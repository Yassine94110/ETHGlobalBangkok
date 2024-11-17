import { abi } from "../abi/abi";
import { erc20 } from "../abi/erc20";
import { client } from "../client/client";

export const getAllStablecoin = async (): Promise<any> => {
  // Fetch the list of allowed stablecoins
  const allStablecoin: any = await client.readContract({
    address: "0x3284E1a61426b8EF80E7edf7fbf48a3ceE66AA51",
    abi: abi,
    functionName: "getAllowedStablecoins",
  });
  console.log("allStablecoin", allStablecoin);

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
