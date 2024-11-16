import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CreatorIcon,
  EntryFeeIcon,
  TradeLimitIcon,
  CalendarIcon,
  UsersIcon,
  TrophyIcon,
} from "@/components/IconSVG";

import { shortenAddress } from "@/lib/utils";
import Link from "next/link";

export type Tournament = {
  id: number;
  name: string;
  entryFee: string;
  maxBudget: string;
  startTime: number;
  endTime: number;
  playersCount: number;
  winner: string;
  stablecoin: string;
  prizePool: string;
  winnerClaimed: boolean;
  maxPlayer: number;
  creator: string;
  status: string;
};

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard = ({ tournament }: TournamentCardProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{tournament.name}</h3>
          <Badge
            variant={
              tournament.status === "incomming" ? "secondary" : "outline"
            }
            className="text-xs"
          >
            {tournament.status}
          </Badge>
        </div>
        <div className="space-y-2 text-sm">
          <p className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center">
              <CreatorIcon className="w-4 h-4 mr-2" />
              Creator:
            </span>
            <Link
              href={`https://eth-sepolia.blockscout.com/address/${tournament.creator}`}
              className="hover:underline"
            >
              <span className="font-medium">
                {shortenAddress(tournament.creator)}
              </span>
            </Link>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center">
              <EntryFeeIcon className="w-4 h-4 mr-2" />
              Entry Fee:
            </span>
            <span className="font-medium">${tournament.entryFee}</span>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center">
              <TradeLimitIcon className="w-4 h-4 mr-2" />
              Trade Limit:
            </span>
            <span className="font-medium">
              ${tournament.maxBudget.toLocaleString()}
            </span>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Start Time:
            </span>
            <span className="font-medium">
              {new Date(tournament.startTime * 1000).toLocaleString()}
            </span>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              End Time:
            </span>
            <span className="font-medium">
              {new Date(tournament.endTime * 1000).toLocaleString()}
            </span>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center">
              <UsersIcon className="w-4 h-4 mr-2" />
              Participants:
            </span>
            <span className="font-medium">
              {tournament.playersCount} / {tournament.maxPlayer}
            </span>
          </p>
          <p className="flex items-center justify-between">
            <span className="text-muted-foreground flex items-center">
              <TrophyIcon className="w-4 h-4 mr-2" />
              Prize Pool:
            </span>
            <span className="font-medium">
              ${tournament.prizePool.toLocaleString()}
            </span>
          </p>
        </div>
        <Link href={`/tournament/${tournament.id}`}>
          <Button className="w-full mt-2">
            {tournament.status === "upcomming"
              ? "Join Tournament"
              : "See Tournament"}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default TournamentCard;
