import { abi } from "../abi/abi";
import { erc20 } from "../abi/erc20";
import { client } from "../client/client";

export const getAllStablecoin = async (): Promise<any> => {
  // Fetch the list of allowed stablecoins
  const allStablecoin: any = await client.readContract({
    address: "0xbeee3763d92ede4fb83d57e42231b085855d6e8a",
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
