import { abi } from "../abi/abi";
import { client } from "../client/client";
import { formatUnits } from "viem";

export const getTournaments = async (ids?: number[]): Promise<any> => {
  const allTournaments: any = await client.readContract({
    address: "0x612C46712a6411d16A34BE988c6865124C4169c1",
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
      maxBudget: formatUnits(tournament.maxBudget, 18),
      startTime: Number(tournament.startTime),
      endTime: Number(tournament.endTime),
      playersCount: tournament.players.length,
      // players: tournament.players.map((player: any) => player.player),
      winner: tournament.winner,
      stablecoin: tournament.stablecoin,
      prizePool: formatUnits(tournament.prizePool, 18),
      winnerClaimed: tournament.winnerClaimed,
      maxPlayer: Number(tournament.maxPlayer),
      creator: tournament.players[0].player,
      status,
    };
  });

  if (ids) {
    return tournaments.filter((tournament: any) => ids.includes(tournament.id));
  }

  return tournaments;
};
