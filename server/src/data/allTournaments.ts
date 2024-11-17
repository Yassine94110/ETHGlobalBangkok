import { abi } from "../abi/abi";
import { client } from "../client/client";
import { formatUnits } from "viem";

export const getTournaments = async (ids?: number[]): Promise<any> => {
  const allTournaments: any = await client.readContract({
    address: "0xdE73cABef5c539e21C30fdE81bBd4b52d256cF44",
    abi: abi,
    functionName: "getAllTournaments",
  });

  const tournaments = allTournaments.map((tournament: any) => {
    const currentTime = Math.floor(Date.now() / 1000); // Timestamp actuel en secondes

    // Détermine l'état du tournoi
    let status: "upcoming" | "active" | "ended";

    if (currentTime < tournament.startTime) {
      status = "upcoming"; // Le tournoi n’a pas encore commencé
    } else if (
      currentTime >= tournament.startTime &&
      currentTime <= tournament.endTime
    ) {
      status = "active"; // Le tournoi est en cours
    } else {
      status = "ended"; // Le tournoi est terminé
    }

    return {
      id: Number(tournament.id),
      name: tournament.name,
      entryFee: formatUnits(tournament.entryFee, 18),
      maxBudget: Number(tournament.maxBudget),
      startTime: Number(tournament.startTime),
      endTime: Number(tournament.endTime),
      playersCount: tournament.players.length,
      winner: tournament.winner,
      stablecoin: tournament.stablecoin,
      prizePool: formatUnits(tournament.prizePool, 18),
      winnerClaimed: tournament.winnerClaimed,
      maxPlayer: formatUnits(tournament.maxPlayer, 6),
      creator: tournament.players[0].player,
      status,
    };
  });

  if (ids) {
    return tournaments.filter((tournament: any) => ids.includes(tournament.id));
  }

  return tournaments;
};
