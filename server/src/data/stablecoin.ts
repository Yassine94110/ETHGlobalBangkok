import { abi } from "../abi/abi";
import { erc20 } from "../abi/erc20";
import { client } from "../client/client";

export const getAllStablecoin = async (): Promise<any> => {
  // Fetch the list of allowed stablecoins
  const allStablecoin: any = await client.readContract({
    address: "0xdE73cABef5c539e21C30fdE81bBd4b52d256cF44",
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
