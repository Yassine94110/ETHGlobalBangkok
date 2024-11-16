import { abi } from "../abi/abi";
import { erc20 } from "../abi/erc20";
import { client } from "../client/client";

export const getAllStablecoin = async (): Promise<any> => {
  // Fetch the list of allowed stablecoins
  const allStablecoin: any = await client.readContract({
    address: "0x612C46712a6411d16A34BE988c6865124C4169c1",
    abi: abi,
    functionName: "getAllowedStablecoins",
  });

  // Fetch the details for each stablescoin in parallel
  const stablecoinDetails = await Promise.all(
    allStablecoin.map(async (stablecoin: `0x${string}`) => {
      const symbol: any = await client.readContract({
        address: stablecoin,
        abi: erc20,
        functionName: "symbol",
      });

      return {
        address: stablecoin,
        symbol: symbol,
      };
    })
  );

  return stablecoinDetails;
};
