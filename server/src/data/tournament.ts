import axios from "axios";
import tradeOfParticipant1 from "./fakeData/tradeOfParticipant1.json";
import tradeOfParticipant2 from "./fakeData/tradeOfParticipant2.json";
import { abi } from "../abi/abi";
import { client } from "../client/client";

interface Player {
  address: string;
  trades?: any[];
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

// Simule des données de tournois avec des participants et la date de création en Unix

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
  console.log(tournamentById);
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
    entryFee: Number(tournamentData[2]) / 10 ** 6,
    maxBudget: Number(tournamentData[3]) / 10 ** 6,
    maxPlayer: Number(tournamentData[4]),
    startTime: Number(tournamentData[5]),
    endTime: Number(tournamentData[6]),
    players: tournamentData[7].map((address: string) => ({ address })),
    winner: tournamentData[8],
    prizePool: Number(tournamentData[9]) / 10 ** 6,
    winnerClaimed: tournamentData[10],
    stablecoin: tournamentData[11],
  };

  if (!tournamentJson) {
    return undefined; // Tournoi non trouvé
  }
  const tournament = tournamentJson;

  // tournament.participants est un tableau d'addresse des participant
  // Récupérer les participants à partir des fichiers JSON
  const tradeOfParticipant = await fetchTradeOfParticipants(
    tournament.players.map((p) => p.address)
  );

  //
  // merge address trades
  tournament.players = tournament.players.map(
    (participant: any, index: string | number) => {
      return {
        ...participant,
        trades: tradeOfParticipant[index] || [],
      };
    }
  );

  return tournament;
};

const fetchTradeOfParticipants = async (addresses: string[]): Promise<any> => {
  const JSONTradeOfParticipants = [
    tradeOfParticipant1,
    tradeOfParticipant2,
    // participant3,
    // participant4,
  ];

  const tradeOfParticipants = JSONTradeOfParticipants.map(
    (tradeOfParticipant) => {
      return tradeOfParticipant
        .map((p: any) => {
          p.creationDate = new Date(p.creationDate).getTime();

          const hooks =
            p.fullAppData && JSON.parse(p.fullAppData).metadata?.hooks?.pre;
          if (hooks) {
            for (const hook of hooks) {
              if (
                hook.target === "0x3cF76028f955E200Af292f78BF1048257463614A"
              ) {
                return null;
              }
            }
          }

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
        .filter((p: any) => p !== null);
    }
  );

  return tradeOfParticipants;
};
function addScore(tradeOfParticipant: any) {
  console.log("adding scoore");

  const scoreAdded = tradeOfParticipant.map((t: any) => {
    t.score = 30000;
    t.assets = {
      ETH: {
        price: 3000,
        balance: 10,
      },
    };
  });

  return scoreAdded;
}
