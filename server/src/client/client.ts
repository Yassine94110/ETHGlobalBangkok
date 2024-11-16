import { createPublicClient, http, Block } from "viem";
import { sepolia, localhost } from "viem/chains";
// dotenv
import dotenv from "dotenv";
dotenv.config();

const ALCHEMY_SEPOLIA = process.env.ALCHEMY_SEPOLIA;

export const client = createPublicClient({
  chain: localhost,
  transport: http(),
});
