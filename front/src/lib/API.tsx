import { Tournament } from "@/components/TournamentCard";

// Remplace 'API_URL' par l'URL de ton API
export const fetchTournaments = async (): Promise<Tournament[]> => {
  try {
    const response = await fetch("http://localhost:3005/tournaments");
    if (!response.ok) {
      throw new Error(`Une erreur s'est produite: ${response.statusText}`);
    }
    const data = await response.json();
    return data as Tournament[];
  } catch (error) {
    console.error("Erreur lors de la récupération des tournois:", error);
    throw error;
  }
};

export const fetchStable = async (): Promise<Token[]> => {
  try {
    const response = await fetch("http://localhost:3005/stablecoin");
    if (!response.ok) {
      throw new Error(`Une erreur s'est produite: ${response.statusText}`);
    }
    const data = await response.json();

    return data as Token[];
  } catch (error) {
    console.error("Erreur lors de la récupération des tournois:", error);
    throw error;
  }
};

export type Token = {
  address: string;
  symbol: string;
};
