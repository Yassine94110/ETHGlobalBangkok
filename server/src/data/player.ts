import { client } from "../client/client";
import { abi } from "../abi/abi";
import { getTournaments } from "./allTournaments";
// abi erc20

export const getTournamentByAddress = async (player: any): Promise<any> => {
  const tournamentByPlayer: any = await client.readContract({
    address: "0x612C46712a6411d16A34BE988c6865124C4169c1",
    abi: abi,
    functionName: "getPlayerTournaments",
    args: [`${player}`],
  });

  const tournamentByPlayerClear = tournamentByPlayer.map((tournament: any) => {
    return Number(tournament);
  });

  return getTournaments(tournamentByPlayerClear);
};
