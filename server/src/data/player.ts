import { client } from "../client/client";
import { abi } from "../abi/abi";
import { getTournaments } from "./allTournaments";
// abi erc20

export const getTournamentByAddress = async (player: any): Promise<any> => {
  const tournamentByPlayer: any = await client.readContract({
    address: "0x70369485D91c875436dC6237443B8D824f755409",
    abi: abi,
    functionName: "getPlayerTournaments",
    args: [`${player}`],
  });

  const tournamentByPlayerClear = tournamentByPlayer.map((tournament: any) => {
    return Number(tournament);
  });

  return getTournaments(tournamentByPlayerClear);
};
