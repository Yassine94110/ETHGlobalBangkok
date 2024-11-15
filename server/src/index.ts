import express, { Request, Response } from "express";
import { getTournamentDetailsById } from "./data/tournament"; // Ensure the path is correct
import { getTournaments } from "./data/allTournaments";
import { getAllStablecoin } from "./data/stablecoin";
import { getTournamentByAddress } from "./data/player";
import cors from "cors";
// import { getTournamentByPlayer} from "./data/player"; // Ensure the path is correct

const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

export interface Tournament {
  id: number; // Unique identifier for the tournament
  name: string; // Tournament name
  entryFee: string; // Entry fee (in formatted units)
  maxBudget: string; // Maximum allowed budget (in formatted units)
  startTime: number; // Tournament start time (timestamp)
  endTime: number; // Tournament end time (timestamp)
  players: number; // Number of players registered
  winner: string; // Winner's address (or identifier)
  stablecoin: string; // Stablecoin address or identifier used
  prizePool: string; // Total prize pool (in formatted units)
  winnerClaimed: boolean; // Indicates if the winner has claimed their prize
  maxPlayer: number; // Maximum number of players allowed
  creator: string; // Tournament creator's address or identifier
}

// Route to get tournament details by ID
app.get("/tournament/:id", async (req: Request, res: Response) => {
  const tournamentId = parseInt(req.params.id, 10);
  try {
    const tournament = await getTournamentDetailsById(tournamentId);

    res.json(tournament); // Return tournament details
  } catch (error) {
    console.error("Error retrieving the tournament:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to get all stablecoins
app.get("/stablecoin", async (req: Request, res: Response) => {
  try {
    const stablecoin = await getAllStablecoin();

    res.json(stablecoin); // Return stablecoin details
  } catch (error) {
    console.error("Error retrieving stablecoins:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to get tournament details by player address
app.get("/player/:player", async (req: Request, res: Response) => {
  try {
    const player = req.params.player;
    const addresses = await getTournamentByAddress(player);

    res.json(addresses); // Return tournament details for the player
  } catch (error) {
    console.error("Error retrieving player data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to get a list of tournaments with filtering options
app.get("/Tournaments", async (req: Request, res: Response) => {
  try {
    const ids: any = req.query.ids as string | undefined;

    let tournaments: Tournament[] = await getTournaments(ids);

    // Filter by name
    const name = req.query.name as string | undefined;
    if (name) {
      tournaments = tournaments.filter((tournament) =>
        tournament.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    // Filter by creator
    const creator = req.query.creator as string | undefined;
    if (creator) {
      tournaments = tournaments.filter((tournament) =>
        tournament.creator.toLowerCase().includes(creator.toLowerCase())
      );
    }

    res.json(tournaments); // Return filtered and sorted tournaments
  } catch (error) {
    console.error("Error retrieving tournaments:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
