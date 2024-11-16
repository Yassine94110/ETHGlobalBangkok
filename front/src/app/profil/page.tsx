'use client';
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tournament } from '@/components/TournamentCard';
import Link from "next/link";
import cowPP from "/public/cowPP.webp";

import { useAppKitAccount } from "@reown/appkit/react";

import TournamentCard from '@/components/TournamentCard';
import { fetchPlayerTournaments } from '@/lib/API'; // Assurez-vous que ce chemin pointe vers votre fonction API

const Profil = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { address, isConnected } = useAppKitAccount();

    useEffect(() => {
        // Appeler l'API uniquement si l'utilisateur est connecté
        if (isConnected && address) {
            const loadTournaments = async () => {
                try {
                    setLoading(true);
                    const data = await fetchPlayerTournaments(address);
                    setTournaments(data);
                } catch (err) {
                    setError("Erreur lors du chargement des tournois.");
                    console.error("Erreur API :", err); // Log détaillé
                } finally {
                    setLoading(false);
                }
            };
            loadTournaments();
        } else {
            console.log("Utilisateur non connecté. L'appel API est annulé.");
        }
    }, [isConnected, address]); // Recharger uniquement si `isConnected` ou `address` change

    return (
        <div className="container mx-auto p-6 space-y-6">
            {isConnected ? (
                <>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">The coWncil boss</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col md:flex-row items-center gap-6">
                            <Avatar className="w-32 h-32">
                                <AvatarImage src={cowPP.src} alt="User avatar" />
                                <AvatarFallback>Cow</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="text-xl font-semibold">Address :</h2>
                                <Link
                                    href={`https://eth-sepolia.blockscout.com/address/${address}`}
                                    className="hover:underline"
                                >
                                    <p className="text-muted-foreground">{address}</p>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    <div>
                        <h2 className="text-xl font-semibold">Your tournaments :</h2>
                    </div>

                    {loading ? (
                        <p>Loading tournaments...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {tournaments.map((tournament) => (
                                <TournamentCard key={tournament.id} tournament={tournament} />
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <p className="text-center text-xl font-semibold">
                    Please connect your wallet to view your profile and tournaments.
                </p>
            )}
        </div>
    );
};

export default Profil;
