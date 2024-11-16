"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAccount } from "wagmi";
import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";
import { erc20Abi } from "viem";

// Setup Viem client
const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});

// Token list API
const tokenListUrl =
  "https://raw.githubusercontent.com/cowprotocol/token-lists/main/src/public/CowSwapSepolia.json";

const quoteApiUrl = "https://barn.api.cow.fi/sepolia/api/v1/quote";

const Swap: React.FC = () => {
  const [fromAmount, setFromAmount] = useState<string>("0");
  const [toAmount, setToAmount] = useState<string>("0");
  const [tokens, setTokens] = useState<{ address: string; symbol: string }[]>(
    []
  );
  const [sellToken, setSellToken] = useState<`0x${string}`>("0x");
  const [buyToken, setBuyToken] = useState<`0x${string}`>("0x");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const relayerAddress = "0xC92E8bdf79f0507f65a392b0ab4667716BFE0110"; // CoW Protocol Relayer
  const { address: userAddress } = useAccount();

  // Fetch token list from API
  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await fetch(tokenListUrl);
        const data = await response.json();
        setTokens(data.tokens);
        if (data.tokens.length > 0) {
          setSellToken(data.tokens[0].address); // Set default sell token
          setBuyToken(data.tokens[1].address); // Set default buy token
        }
      } catch (error) {
        console.error("Error fetching token list:", error);
      }
    };

    fetchTokens();
  }, []);

  // Fetch quote dynamically when sell token, buy token, or amount changes
  useEffect(() => {
    const fetchQuote = async () => {
      if (!sellToken || !buyToken || !fromAmount || parseFloat(fromAmount) <= 0) {
        setToAmount("0");
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const payload = {
          sellToken,
          buyToken,
          sellAmountBeforeFee: BigInt(parseFloat(fromAmount) * 10 ** 18).toString(),
          from: userAddress || "0x0000000000000000000000000000000000000000", // Use a default address if not connected
          kind: "sell",
        };

        const response = await fetch(quoteApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch quote");
        }

        const data = await response.json();
        console.log("API Response:", data); // Debugging the response structure

        // Extract buyAmount
        const buyAmountRaw = BigInt(data.quote.buyAmount);

        // Convert to human-readable format (as a float, avoiding integer division issues)
        const buyAmount = parseFloat((buyAmountRaw / BigInt(10 ** 14)).toString()) / 10 ** 4;

        console.log("Converted Buy Amount:", buyAmount);
        setToAmount(buyAmount.toString());
      } catch (error) {
        console.error("Error fetching quote:", error);
        setError("Failed to fetch quote. Please try again.");
        setToAmount("0");
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, [sellToken, buyToken, fromAmount, userAddress]);

  const handleApproveToken = async () => {
    if (!userAddress) {
      console.error("Wallet not connected");
      return;
    }
  
    try {
      // Convert fromAmount to BigInt
      const parsedFromAmount = parseFloat(fromAmount);
      if (isNaN(parsedFromAmount) || parsedFromAmount <= 0) {
        throw new Error("Invalid fromAmount");
      }
  
      // Convert to Wei (integer representation)
      const amountToApprove = BigInt(Math.round(parsedFromAmount * 10 ** 18));
  
      // Check current allowance
      const allowance = await client.readContract({
        address: sellToken,
        abi: erc20Abi,
        functionName: "allowance",
        args: [userAddress, relayerAddress],
      });
  
      if (BigInt(allowance) >= amountToApprove) {
        console.log("Token already approved for the specified amount");
        return;
      }
  
      // Approve the relayer
      const { request } = await client.simulateContract({
        address: sellToken,
        abi: erc20Abi,
        functionName: "approve",
        args: [relayerAddress, amountToApprove],
        account: userAddress!,
      });
  
      const txHash = await client.readContract(request);
      console.log("Approval transaction sent:", txHash);
    } catch (error) {
      console.error("Error during token approval:", error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Swap</h1>
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* From Section */}
            <div className="space-y-2">
              <label className="text-lg text-muted-foreground">From</label>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="text-2xl"
                  placeholder="0.0"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2 pl-3 pr-3">
                      <div className="flex items-center">
                        <span className="ml-2 font-semibold">
                          {tokens.find((token) => token.address === sellToken)
                            ?.symbol || "Select"}
                        </span>
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {tokens.map((token) => (
                      <DropdownMenuItem
                        key={token.address}
                        onClick={() => setSellToken(`0x${token.address.slice(2)}` as `0x${string}`)}
                      >
                        {token.symbol}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Swap Direction Button */}
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => {
                  const temp = fromAmount;
                  setFromAmount(toAmount);
                  setToAmount(temp);
                  const tempToken = sellToken;
                  setSellToken(buyToken);
                  setBuyToken(tempToken);
                }}
              >
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </div>

            {/* To Section */}
            <div className="space-y-2">
              <label className="text-lg text-muted-foreground">To</label>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  value={toAmount}
                  readOnly
                  onChange={(e) => setToAmount(e.target.value)}
                  className="text-2xl"
                  placeholder="0.0"
                />
                {isLoading && <span>Loading...</span>}
                {error && <span className="text-red-500">{error}</span>}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2 pl-3 pr-3">
                      <div className="flex items-center">
                        <span className="ml-2 font-semibold">
                          {tokens.find((token) => token.address === buyToken)
                            ?.symbol || "Select"}
                        </span>
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {tokens.map((token) => (
                      <DropdownMenuItem
                        key={token.address}
                        onClick={() => setBuyToken(`0x${token.address.slice(2)}` as `0x${string}`)}
                      >
                        {token.symbol}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Approve Token Button */}
            <Button
              onClick={handleApproveToken}
              className="w-full py-6 text-lg"
              size="lg"
            >
              Approve Token
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Swap;
