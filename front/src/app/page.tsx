import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import cowContract from "/public/cowContract.webp"
import cowTrade from "/public/cowTrade.webp"
import cowBlockchain from "/public/cowBlockchain.webp"
import cowTrade2 from "/public/cowTrade2.webp"

export default function Home() {
  return (
    <div className="min-h-screen">

      <main className="container mx-auto py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to The coWncil</h2>
          <p className="text-xl mb-8">The ultimate fully on-chain trading tournament platform</p>
          <Button asChild size="lg">
              <a href="/tournaments">Start Trading Now</a>
          </Button>
        </section>

        <section id="features" className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Key Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <Image src={cowContract} alt="Create Tournaments" className="mx-auto mb-4" width={200} height={200} />
                <h4 className="text-xl font-semibold mb-2">Create Tournaments</h4>
                <p>Easily set up and manage your own trading competitions with customizable parameters.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Image src={cowTrade} alt="Join Tournaments" className="mx-auto mb-4" width={200} height={200} />
                <h4 className="text-xl font-semibold mb-2">Join Tournaments</h4>
                <p>Participate in exciting trading contests and compete against traders from around the world.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Image src={cowBlockchain} alt="Fully On-Chain" className="mx-auto mb-4" width={200} height={200} />
                <h4 className="text-xl font-semibold mb-2">Fully On-Chain</h4>
                <p>Enjoy complete transparency and security with all transactions and data stored on the blockchain.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="how-it-works" className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <ol className="list-decimal list-inside space-y-4">
                <li>Create or join a trading tournament</li>
                <li>Use CoW Swap for all your trades during the tournament</li>
                <li>Our smart contracts track all transactions and calculate profits/losses</li>
                <li>Winners are determined automatically based on performance</li>
                <li>Prizes are distributed on-chain to the winners</li>
              </ol>
            </div>
            <div>
              <Image src={cowTrade2} alt="How It Works Diagram" className="w-full h-auto" width={500} height={300} />
            </div>
          </div>
        </section>
        <section id="get-started" className="text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Start?</h3>
          <p className="mb-8">Join The coWncil today and experience the future of trading tournaments!</p>
            <Button asChild size="lg">
              <a href="/tournaments">See tournaments</a>
            </Button>
        </section>
      </main>

      <footer className=" py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 The coWncil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
