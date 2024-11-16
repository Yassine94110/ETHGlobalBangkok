// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

// Importer Script et console de forge-std
import {Script, console} from "forge-std/Script.sol";
// Importer les contrats TradingTournament et USDidy
import {TradingTournament} from "../src/TradingTournament.sol";
// Importer l'interface IERC20
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TradingTournamentScript is Script {
    TradingTournament public tradingTournament;

    function setUp() public {
        // Initialisation si nécessaire
    }

    function run() public {
        // Commencer la diffusion des transactions
        vm.startBroadcast();

        // Déployer le contrat TradingTournament
        tradingTournament = new TradingTournament();

        // Ajouter un stablecoin autorisé (cast explicite en IERC20)
        tradingTournament.addStablecoin(IERC20(0xAbEf72c17D6696Fc7Fdb822aE5782678613d7aAb));

        // Arrêter la diffusion des transactions
        vm.stopBroadcast();
    }
}
