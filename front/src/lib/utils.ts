import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Converts a timestamp to a human-readable date format
export const toDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleString();
};

// Determines the status of the tournament based on the start and end times
export const getStatus = (startTime: number, endTime: number): string => {
  const now = Date.now() / 1000; // Current time in seconds
  if (now < startTime) return 'Upcoming';
  if (now >= startTime && now <= endTime) return 'Active';
  return 'Ended';
};

export const shortenAddress = (address: string): string => {
  if (!address || address.length < 10) return address; // Handle invalid or too-short addresses
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};