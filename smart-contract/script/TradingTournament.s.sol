// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {TradingTournament} from "../src/TradingTournament.sol";
import {USDidy} from "../src/USDidy.sol";

contract TradingTournamentScript is Script {
    TradingTournament public tradingTournament;
    USDidy public usdd;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();
        usdd = USDidy(0xbe72E441BF55620febc26715db68d3494213D8Cb);
        tradingTournament = new TradingTournament();
        usdd = new USDidy(100000);

        // Ajouter les stablecoins autorisés
        tradingTournament.addStablecoin(usdd);
        tradingTournament.addStablecoin(usdd);

        // Création des tournois
        tradingTournament.createTournament(
            "Enzo cup #1",
            100*(10**18), // entryFee
            111*(10**18), // maxBudget
            10, // maxPlayer
            block.timestamp + 30, // startTime (dans 1 minute)
            block.timestamp + 5000, // endTime (dans 1 heure)
            usdd
        );

        tradingTournament.createTournament(
            "Enzo cup #2",
            200*(10**18), // entryFee
            222*(10**18), // maxBudget
            2, // maxPlayer
            block.timestamp + 40, // startTime (dans 2 minutes)
            block.timestamp + 2000, // endTime (dans 2 heures)
            usdd
        );
        tradingTournament.createTournament(
            "Enzo cup #3",
            300*(10**18), // entryFee
            333*(10**18), // maxBudget
            3, // maxPlayer
            block.timestamp + 40, // startTime (dans 2 minutes)
            block.timestamp + 200, // endTime (dans 2 heures)
            usdd
        );

        vm.stopBroadcast();
    }





 
}
