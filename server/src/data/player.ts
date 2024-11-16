import { client } from "../client/client";
import { abi } from "../abi/abi";
import { getTournaments } from "./allTournaments";
// abi erc20

export const getTournamentByAddress = async (player: any): Promise<any> => {
  const tournamentByPlayer: any = await client.readContract({
    address: "0xdE73cABef5c539e21C30fdE81bBd4b52d256cF44",
    abi: abi,
    functionName: "getPlayerTournaments",
    args: [`${player}`],
  });

  const tournamentByPlayerClear = tournamentByPlayer.map((tournament: any) => {
    return Number(tournament);
  });

  return getTournaments(tournamentByPlayerClear);
};
