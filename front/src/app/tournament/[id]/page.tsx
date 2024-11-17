"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Mock data for demonstration
const tournamentData = {
  id: 1,
  name: "Crypto Clash 2023",
  creator: "BlockchainGuru",
  entryFee: 50,
  tradeLimit: 10000,
  startTime: "2024-12-12T09:00:00Z",
  endTime: "2024-07-08T18:00:00Z",
  participants: [
    "0x1234...5678",
    "0xabcd...efgh",
    "0x9876...5432",
    "0xijkl...mnop",
    "0xqrst...uvwx",
    "0x1234...5678",
    "0xabcd...efgh",
    "0x9876...5432",
    "0xijkl...mnop",
    "0xqrst...uvwx",
  ],
  maxParticipants: 1000,
  prizePool: 50000,
  status: "Upcoming",
};

const Tournament = () => {
  const params = useParams();
  const [tournament, setTournament] = useState(tournamentData);
  const [timeRemaining, setTimeRemaining] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const start = new Date(tournament.startTime).getTime();
      const distance = start - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeRemaining("Tournament has started");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [tournament.startTime]);

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Tournament Info Recap */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">{tournament.name}</h1>
            <Badge
              variant={tournament.status === "Active" ? "secondary" : "outline"}
            >
              {tournament.status}
            </Badge>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Creator</p>
              <p className="font-medium">{tournament.creator}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Entry Fee</p>
              <p className="font-medium">${tournament.entryFee}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Trade Limit</p>
              <p className="font-medium">
                ${tournament.tradeLimit.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground">Prize Pool</p>
              <p className="font-medium">
                ${tournament.prizePool.toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-[1fr,300px] gap-6">
        {/* Participants Section */}
        <Card>
          <CardHeader>
            <CardTitle>
              Participants ({tournament.participants.length}/
              {tournament.maxParticipants})
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-2">
                  {tournament.participants.map((address, index) => (
                    <div key={index} className="p-3 bg-muted rounded-lg">
                      {address}
                    </div>
                  ))}
                </div>
              </ScrollArea> */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tournament.participants.map((address, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{address}</TableCell>
                    <TableCell className="text-right">{index}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Join Button */}
          <Card>
            <CardContent className="p-6">
              <Button
                className="w-full h-12 text-lg"
                disabled={tournament.status !== "Upcoming"}
              >
                Join Tournament
              </Button>
            </CardContent>
          </Card>

          {/* Countdown Timer */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Time until start</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-center">
                {timeRemaining}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tournament;
