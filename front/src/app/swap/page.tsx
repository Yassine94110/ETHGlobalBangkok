"use client"

import * as React from "react"
import { ArrowUpDown, ChevronDown } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Swap = () => {
  const [fromAmount, setFromAmount] = React.useState("0.0")
  const [toAmount, setToAmount] = React.useState("0.0")

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* From Section */}
            <div className="space-y-2">
              <label className="text-lg text-muted-foreground">From</label>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="text-2xl"
                  placeholder="0.0"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2 pl-3 pr-3">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-red-500" />
                        <span className="ml-2 font-semibold">AVAX</span>
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>AVAX</DropdownMenuItem>
                    <DropdownMenuItem>ETH</DropdownMenuItem>
                    <DropdownMenuItem>BTC</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Swap Direction Button */}
            <div className="flex justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => {
                  const temp = fromAmount
                  setFromAmount(toAmount)
                  setToAmount(temp)
                }}
              >
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </div>

            {/* To Section */}
            <div className="space-y-2">
              <label className="text-lg text-muted-foreground">To</label>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  className="text-2xl"
                  placeholder="0.0"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2 pl-3 pr-3">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-blue-500" />
                        <span className="ml-2 font-semibold">AI</span>
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>AI</DropdownMenuItem>
                    <DropdownMenuItem>USDT</DropdownMenuItem>
                    <DropdownMenuItem>USDC</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Connect Wallet Button */}
            <Button 
              className="w-full py-6 text-lg"
              size="lg"
            >
              Connect Wallet
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Swap