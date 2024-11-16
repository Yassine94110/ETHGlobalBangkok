"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Address } from "viem";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@/components/IconSVG";
import { format } from "date-fns";

import { useWriteTradingTournamentCreateTournament } from "@/generated";
import { fetchStable } from "@/lib/API";

export type Token = {
  address: string;
  symbol: string;
};

const CreateTournament = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [tournamentName, setTournamentName] = useState("");
  const [entryFee, setEntryFee] = useState("");
  const [maxPlayers, setMaxPlayers] = useState("");
  const [maxBudget, setMaxBudget] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [token, setToken] = useState<Address>("0x");
  const [error, setError] = useState<string | null>(null);
  const [, setLoading] = useState<boolean>(true);

  const { writeContract: createTournament } =
    useWriteTradingTournamentCreateTournament();
  const [stable, setStables] = useState<Token[]>([]);

  useEffect(() => {
    const loadTournaments = async () => {
      try {
        setLoading(true);
        const stableArray = await fetchStable();
        setStables(stableArray);
      } catch (err) {
        setError("Une erreur s'est produite lors du chargement des stables.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTournaments();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Conversion des dates en timestamp en secondes
    const startTimestamp =
      startDate && startTime
        ? Math.floor(
            new Date(`${startDate.toDateString()} ${startTime}`).getTime() /
              1000
          )
        : null;

    const endTimestamp =
      endDate && endTime
        ? Math.floor(
            new Date(`${endDate.toDateString()} ${endTime}`).getTime() / 1000
          )
        : null;

    // Vérification de la complétion de tous les champs
    if (
      !tournamentName ||
      !entryFee ||
      !maxPlayers ||
      !maxBudget ||
      !startDate ||
      !startTime ||
      !endDate ||
      !endTime ||
      !token
    ) {
      setError("Tous les champs doivent être remplis.");
      return;
    }

    // Vérification que le token commence par '0x'

    if (!token.startsWith("0x")) {
      setError("Le token doit commencer par '0x'.");
      return;
    }

    // Vérification que entryFee et maxBudget sont des nombres
    if (isNaN(Number(entryFee)) || isNaN(Number(maxBudget))) {
      setError("Entry Fee et Max Budget doivent être des nombres valides.");
      return;
    }

    // Vérification que startTimestamp est avant endTimestamp
    if (startTimestamp && endTimestamp && startTimestamp >= endTimestamp) {
      setError("La date de début doit être antérieure à la date de fin.");
      return;
    }

    // Réinitialiser l'erreur si toutes les validations passent
    setError(null);

    // Affichage des valeurs en console si tout est valide
    console.log({
      tournamentName,
      entryFee,
      maxPlayers,
      maxBudget,
      startTimestamp,
      endTimestamp,
      token,
    });

    createTournament({
      address: "0x70FD33c283bDA7402A3593276ef31962433AadA2",
      args: [
        tournamentName,
        BigInt(entryFee),
        BigInt(maxPlayers),
        BigInt(maxBudget),
        BigInt(startDate?.getTime() / 1000),
        BigInt(endDate?.getTime() / 1000),
        token,
      ],
    });
  };

  return (
    <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground">
            Create Tournament
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Fill out the form to create a new tournament.
          </p>
        </div>
        <form className="space-y-6">
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Tournament Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter tournament name"
                value={tournamentName}
                onChange={(e) => setTournamentName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="entry-fee">Entry Fee (in USD)</Label>
              <Input
                id="entry-fee"
                placeholder="Enter entry fee"
                value={entryFee}
                onChange={(e) => setEntryFee(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="max-players">Max Players</Label>
              <Input
                id="max-players"
                type="number"
                placeholder="Enter max players"
                value={maxPlayers}
                onChange={(e) => setMaxPlayers(e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">
                0 = no limit player
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-budget">Max Budget</Label>
              <Input
                id="max-budget"
                placeholder="Enter max budget"
                value={maxBudget}
                onChange={(e) => setMaxBudget(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <div className="flex space-x-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? (
                        format(startDate, "PPP")
                      ) : (
                        <span>Pick a start date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Input
                  type="time"
                  className="w-[120px]"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <div className="flex space-x-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !endDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {endDate ? (
                        format(endDate, "PPP")
                      ) : (
                        <span>Pick an end date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Input
                  type="time"
                  className="w-[120px]"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="token">Stablecoin Token</Label>
            <Select onValueChange={(value) => setToken(value as Address)}>
              <SelectTrigger id="token">
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent>
                {stable.map((token, index) => (
                  <SelectItem
                    key={`${token.address}-${index}`}
                    value={token.address}
                  >
                    {token.symbol}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleClick} className="w-full">
            Create Tournament
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateTournament;
