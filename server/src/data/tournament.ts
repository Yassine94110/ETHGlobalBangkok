import axios from "axios";
import tradeOfParticipant1 from "./fakeData/tradeOfParticipant1.json";
// import tradeOfParticipant2 from "./fakeData/tradeOfParticipant2.json";
import { abi } from "../abi/abi";
import { client } from "../client/client";

interface Player {
  address: string;
  trades?: any[];
  portfolio?: { [token: string]: string };
  tag?: string;
}

interface Tournament {
  id: number;
  name: string;
  entryFee: number;
  maxBudget: number;
  maxPlayer: number;
  startTime: number;
  endTime: number;
  players: Player[];
  winner?: string;
  prizePool: number;
  winnerClaimed?: boolean;
  stablecoin: string;
}

// Fonction pour calculer le portefeuille d'un joueur
const calculatePortfolio = (
  player: Player,
  stablecoin: string,
  maxBudget: string | number
): void => {
  const portfolio: { [token: string]: bigint } = {};
  let isCheater = false;

  // Initialise le portefeuille avec le stablecoin avec le maxBudget (décimales : 18)
  portfolio[stablecoin] = BigInt(maxBudget);

  player.trades?.forEach((trade) => {
    const sellToken = trade.sellToken;
    const buyToken = trade.buyToken;
    const sellAmount = BigInt(trade.sellAmount);
    const buyAmount = BigInt(trade.buyAmount);

    // Diminue le montant vendu
    portfolio[sellToken] = (portfolio[sellToken] || BigInt(0)) - sellAmount;
    // Augmente le montant acheté
    portfolio[buyToken] = (portfolio[buyToken] || BigInt(0)) + buyAmount;

    // Vérifie si le stablecoin devient négatif
    if (portfolio[stablecoin] < BigInt(0)) {
      isCheater = true;
    }
  });

  // Convertit les valeurs en string et vérifie les soldes négatifs
  const portfolioString: { [token: string]: string } = {};
  for (const token in portfolio) {
    // if token is stablecoin add maxBudget

    portfolioString[token] = portfolio[token].toString();

    if (portfolio[token] < BigInt(0)) {
      isCheater = true;
    }
  }

  player.portfolio = portfolioString;
  if (isCheater) {
    player.tag = "CHEATER";
  }
};

// Fonction pour récupérer les détails d'un tournoi par ID
export const getTournamentDetailsById = async (
  id: number
): Promise<Tournament | undefined> => {
  // Récupérer le tournoi par ID
  const tournamentById: any = await client.readContract({
    address: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi: abi,
    functionName: "getTournamentById",
    args: [id],
  });

  const tournamentData = tournamentById as [
    number,
    string,
    number,
    number,
    number,
    number,
    number,
    string[],
    string,
    number,
    boolean,
    string
  ];

  const tournamentJson = {
    id: Number(tournamentData[0]),
    name: tournamentData[1],
    entryFee: Number(tournamentData[2]),
    maxBudget: Number(tournamentData[3]),
    maxPlayer: Number(tournamentData[4]),
    startTime: Number(tournamentData[5]),
    endTime: Number(tournamentData[6]),
    players: tournamentData[7].map((address: string) => ({ address })),
    winner: tournamentData[8],
    prizePool: Number(tournamentData[9]),
    winnerClaimed: tournamentData[10],
    stablecoin: tournamentData[11],
  };

  if (!tournamentJson) {
    return undefined; // Tournoi non trouvé
  }
  const tournament = tournamentJson;

  // Récupérer les participants à partir des fichiers JSON
  const tradeOfParticipant = await fetchTradeOfParticipants(
    tournament.players.map((p) => p.address)
  );

  // Fusionne les adresses et les transactions, puis calcule le portefeuille
  tournament.players = tournament.players.map(
    (participant: any, index: number) => {
      participant.trades = tradeOfParticipant[index] || [];
      calculatePortfolio(
        participant,
        tournament.stablecoin,
        tournament.maxBudget
      );

      return participant;
    }
  );

  return tournament;
};

const fetchTradeOfParticipants = async (addresses: string[]): Promise<any> => {
  const tradeOfParticipantos = await axios.get(
    `https://api.cow.fi/mainnet/api/v1/account/0x04d84e1d86cfad5ffea5e9ab833276481bf965e4/orders?limit=10`
  );
  console.log(tradeOfParticipantos);
  const JSONTradeOfParticipants = [tradeOfParticipantos.data];

  // Parcourt chaque ensemble de transactions pour les participants
  const tradeOfParticipants = JSONTradeOfParticipants.map(
    (tradeOfParticipant) => {
      return tradeOfParticipant
        .map((p: any) => {
          p.creationDate = new Date(p.creationDate).getTime();

          // Vérifie les hooks dans les métadonnées et filtre si nécessaire
          const prehooks =
            p.fullAppData && JSON.parse(p.fullAppData).metadata?.hooks?.pre;

          // Filtre les transactions où prehooks est indéfini
          if (!prehooks) {
            return null;
          }

          // Vérifie si un objet appelé target est égal à l'adresse spécifiée
          const target = prehooks.find(
            (hook: any) =>
              hook.target === "0x01BA67AAC7f75f647D94220Cc98FB30FCc5105Bf"
          );
          if (!target) {
            return null;
          }

          // Suppression des propriétés inutiles
          delete p.owner;
          delete p.uid;
          delete p.availableBalance;
          delete p.executedBuyAmount;
          delete p.executedSellAmount;
          delete p.executedSellAmountBeforeFees;
          delete p.executedFeeAmount;
          delete p.executedSurplusFee;
          delete p.status;
          delete p.settlementContract;
          delete p.fullFeeAmount;
          delete p.solverFee;
          delete p.ethflowData;
          delete p.onchainOrderData;
          delete p.onchainUser;
          delete p.isLiquidityOrder;
          delete p.invalidated;
          delete p.interactions;
          delete p.signingScheme;
          delete p.signature;
          delete p.partiallyFillable;
          delete p.validTo;
          delete p.appData;
          delete p.fullAppData;
          delete p.feeAmount;
          delete p.receiver;

          return p;
        })
        .filter((p: any) => p !== null); // Filtre les transactions supprimées
    }
  );

  return tradeOfParticipants;
};
