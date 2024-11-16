"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FilterIcon, ListOrderedIcon, PlusIcon } from "@/components/IconSVG";
import { Tournament } from "@/components/TournamentCard";

import TournamentCard from "@/components/TournamentCard";
import { fetchTournaments } from "@/lib/API"; // Assurez-vous que ce chemin pointe vers votre fonction API
import Link from "next/link";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTournaments = async () => {
      try {
        setLoading(true);
        const data = await fetchTournaments();
        setTournaments(data);
      } catch (err: any) {
        setError("Une erreur s'est produite lors du chargement des tournois.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTournaments();
  }, []);

  return (
    <main className="flex-1 py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tournaments..."
              className="pl-8 w-full rounded-lg bg-background"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <FilterIcon className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Upcoming</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Ended</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-1">
                <ListOrderedIcon className="w-4 h-4" />
                <span>Sort</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Sort by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="prize">
                <DropdownMenuRadioItem value="prize">
                  Prize Pool
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="participants">
                  Participants
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="start_date">
                  Start Date
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/createTournament">
            <Button variant="outline" size="sm" className="gap-1">
              <PlusIcon className="w-4 h-4" />
              <span>Create Tournament</span>
            </Button>
          </Link>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <TournamentCard key={tournament.id} tournament={tournament} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Tournaments;
