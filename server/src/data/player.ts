import { client } from "../client/client";
import { abi } from "../abi/abi";
import { getTournaments } from "./allTournaments";
// abi erc20

export const getTournamentByAddress = async (player: any): Promise<any> => {
  const tournamentByPlayer: any = await client.readContract({
    address: "0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi: abi,
    functionName: "getPlayerTournaments",
    args: [`${player}`],
  });

  const tournamentByPlayerClear = tournamentByPlayer.map((tournament: any) => {
    return Number(tournament);
  });

  return getTournaments(tournamentByPlayerClear);
};
