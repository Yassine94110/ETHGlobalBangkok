import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import cowFace from "/public/cowFace.svg"

const Header = () => {
  return (
    <header className="bg-background border-b px-4 md:px-6 flex items-center h-14">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image src={cowFace} alt="Logo"  />
          <span className="">The coWncil</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 md:gap-6">
          <Link href="/createTournament" className="font-medium hover:underline" prefetch={false}>
            Create Tournament
          </Link>
          <Link href="/tournaments" className="font-medium hover:underline" prefetch={false}>
            Tournaments
          </Link>
          <Link href="/swap" className="font-medium hover:underline" prefetch={false}>
            Swap
          </Link>
          <Link href="/profil" className="font-medium hover:underline" prefetch={false}>
            Profil
          </Link>
          <appkit-button balance='hide' />
        </nav>
      </header>
  )
}

export default Header