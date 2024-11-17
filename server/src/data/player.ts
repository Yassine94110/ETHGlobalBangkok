import { client } from "../client/client";
import { abi } from "../abi/abi";
import { getTournaments } from "./allTournaments";
// abi erc20

export const getTournamentByAddress = async (player: any): Promise<any> => {
  const tournamentByPlayer: any = await client.readContract({
    address: "0x9DDaf5F1750a310d1a4EACc23A918C8fb3fFDA79",
    abi: abi,
    functionName: "getPlayerTournaments",
    args: [`${player}`],
  });

  const tournamentByPlayerClear = tournamentByPlayer.map((tournament: any) => {
    return Number(tournament);
  });

  return getTournaments(tournamentByPlayerClear);
};
