'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tournament } from '@/components/TournamentCard';

import TournamentCard from '@/components/TournamentCard';
import { fetchTournaments } from '@/lib/API'; // Assurez-vous que ce chemin pointe vers votre fonction API

const Profil = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTournaments = async () => {
            try {
                setLoading(true);
                const data = await fetchTournaments();
                setTournaments(data);
            } catch (err) {
                setError("Erreur lors du chargement des tournois.");
                console.error("Erreur API:", err);
            } finally {
                setLoading(false);
            }
        };
        loadTournaments();
    }, []);

    return (
        <div className="container mx-auto p-6 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Profil Utilisateur</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row items-center gap-6">
                    <Avatar className="w-32 h-32">
                        <AvatarImage src="" alt="User avatar" />
                        <AvatarFallback>test</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-xl font-semibold">Username</h2>
                        <p className="text-muted-foreground">Adresse: 0X</p>
                    </div>
                </CardContent>
            </Card>

            <div>
                <h2 className="text-xl font-semibold">Tournois</h2>
            </div>

            {loading ? (
                <p>Chargement des tournois...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {tournaments.map((tournament) => (
                        <TournamentCard key={tournament.id} tournament={tournament} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Profil;
