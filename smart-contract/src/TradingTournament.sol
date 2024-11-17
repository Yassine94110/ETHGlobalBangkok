// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TradingTournament is AccessControl {
    uint private _tournamentIdCounter;

    IERC20[] private _allowedStablecoins;

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant GPv2Settlement_ROLE =
        keccak256("GPv2Settlement_ROLE");

    struct Player {
        address player;
        uint tradeCount;
    }

    struct Tournament {
        uint id;
        string name;
        uint entryFee;
        uint maxBudget;
        uint maxPlayer; // Ajout de la propriété maxPlayer
        uint startTime;
        uint endTime;
        Player[] players;
        address winner;
        IERC20 stablecoin;
        uint prizePool;
        bool winnerClaimed;

    }

    mapping(uint => Tournament) private _tournaments;
    mapping(address => uint[]) private _playerTournaments;

    event TournamentCreated(
        uint tournamentId,
        string name,
        uint entryFee,
        uint maxBudget,
        uint maxPlayer,
        uint startTime,
        uint endTime,
        address stablecoin
    );
    event PlayerJoined(uint tournamentId, address player);
    event WinnerDeclared(uint tournamentId, address winner, uint prize);
    event StablecoinAdded(address stablecoin);

    constructor() {
        _grantRole(ADMIN_ROLE, msg.sender);
        _grantRole(GPv2Settlement_ROLE, msg.sender);
    }

    function getTournamentIdCounter() public view returns (uint) {
        return _tournamentIdCounter;
    }

    function getAllowedStablecoins() public view returns (IERC20[] memory) {
        return _allowedStablecoins;
    }

    function getTournamentById(
        uint _tournamentId
    )
        public
        view
        returns (
            uint id,
            string memory name,
            uint entryFee,
            uint maxBudget,
            uint maxPlayer,
            uint startTime,
            uint endTime,
            Player[] memory players,
            address winner,
            uint prizePool,
            bool winnerClaimed,
            address stablecoin
        )
    {
        Tournament storage tournament = _tournaments[_tournamentId];

        Player[] memory playerList = new Player[](
            tournament.players.length
        );

        for (uint i = 0; i < tournament.players.length; i++) {
            playerList[i] = tournament.players[i];
        }

        return (
            tournament.id,
            tournament.name,
            tournament.entryFee,
            tournament.maxBudget,
            tournament.maxPlayer,
            tournament.startTime,
            tournament.endTime,
            playerList,
            tournament.winner,
            tournament.prizePool,
            tournament.winnerClaimed,
            stablecoin
        );
    }

    function getPlayerTournaments(
        address player
    ) public view returns (uint[] memory) {
        return _playerTournaments[player];
    }

    // Functions
    function addStablecoin(IERC20 _stablecoin) public onlyRole(ADMIN_ROLE) {
        _allowedStablecoins.push(_stablecoin);
        emit StablecoinAdded(address(_stablecoin));
    }

    function isStablecoinAllowed(
        IERC20 _stablecoin
    ) public view returns (bool) {
        for (uint i = 0; i < _allowedStablecoins.length; i++) {
            if (_allowedStablecoins[i] == _stablecoin) {
                return true;
            }
        }
        return false;
    }

    function createTournament(
        string memory _name,
        uint _entryFee,
        uint _maxBudget,
        uint _maxPlayer, // Ajout de maxPlayer
        uint _startTime,
        uint _endTime,
        IERC20 _stablecoin
    ) public  {
        require(isStablecoinAllowed(_stablecoin), "Stablecoin not allowed");
        require(
            _startTime > block.timestamp,
            "Start time must be in the future"
        );
        require(_startTime < _endTime, "Start time must be before end time");
        require(
            _maxPlayer != 1,
            "You cant create a tournament with only 1 player"
        );

        _tournamentIdCounter++;
        Tournament storage newTournament = _tournaments[_tournamentIdCounter];
        newTournament.id = _tournamentIdCounter;
        newTournament.name = _name;
        newTournament.entryFee = _entryFee;
        newTournament.maxBudget = _maxBudget;
        newTournament.maxPlayer = _maxPlayer;
        newTournament.startTime = _startTime;
        newTournament.endTime = _endTime;
        newTournament.stablecoin = _stablecoin;

        emit TournamentCreated(
            _tournamentIdCounter,
            _name,
            _entryFee,
            _maxBudget,
            _maxPlayer,
            _startTime,
            _endTime,
            address(_stablecoin)
        );
        joinTournament(_tournamentIdCounter);
    }

    function joinTournament(uint _tournamentId) public {
        Tournament storage tournament = _tournaments[_tournamentId];
        require(block.timestamp < tournament.endTime, "Tournament has ended");
        require(
            tournament.players.length < tournament.maxPlayer,
            "Tournament is full"
        ); // Vérifie le nombre de participants
        require(msg.sender != address(0), "Invalid sender");

        for (uint i = 0; i < _playerTournaments[msg.sender].length; i++) {
            if (_playerTournaments[msg.sender][i] == _tournamentId) {
                revert("You are already in this tournament");
            }
        }

        tournament.players.push(Player(msg.sender, 0));
        tournament.prizePool += tournament.entryFee;
        _playerTournaments[msg.sender].push(_tournamentId);

        emit PlayerJoined(_tournamentId, msg.sender);
    }

    function trackingSwap(
        uint _tournamentId, address _player
    ) public  {
        Tournament storage tournament = _tournaments[_tournamentId];
        for (uint i = 0; i < tournament.players.length; i++) {
            if (tournament.players[i].player == _player) {
                tournament.players[i].tradeCount++;
                return;
            }
        }
        revert("Player is not in the tournament");
    }

    function declareWinner(
        uint _tournamentId,
        address _winner
    ) public  {
        Tournament storage tournament = _tournaments[_tournamentId];
        require(
            block.timestamp > tournament.endTime,
            "Tournament is still ongoing"
        );
        tournament.winner = _winner;
    }

    function claimPrize(uint _tournamentId) public {
        Tournament storage tournament = _tournaments[_tournamentId];
        require(msg.sender == tournament.winner, "You are not the winner");
        require(!tournament.winnerClaimed, "Prize already claimed");

        uint prize = tournament.prizePool;
        tournament.winnerClaimed = true;
        require(
            tournament.stablecoin.transfer(msg.sender, prize),
            "Prize transfer failed"
        );

        emit WinnerDeclared(_tournamentId, msg.sender, prize);
    }

    function getPlayerCount(uint _tournamentId) public view returns (uint) {
        return _tournaments[_tournamentId].players.length;
    }

    function getAllTournaments() public view returns (Tournament[] memory) {
        Tournament[] memory tournaments = new Tournament[](
            _tournamentIdCounter
        );

        for (uint i = 1; i <= _tournamentIdCounter; i++) {
            tournaments[i - 1] = _tournaments[i];
        }

        return tournaments;
    }

	 function grantAdminRole(address account) public onlyRole(ADMIN_ROLE) {
        _grantRole(ADMIN_ROLE, account);
    }

    function revokeAdminRole(address account) public onlyRole(ADMIN_ROLE) {
        _revokeRole(ADMIN_ROLE, account);
    }
    function grantGPv2SettlementRole(address account) public onlyRole(ADMIN_ROLE) {
        _grantRole(GPv2Settlement_ROLE, account);
    }


    function revokeGPv2SettlementRole(address account) public onlyRole(ADMIN_ROLE) {
        _revokeRole(GPv2Settlement_ROLE, account);
    }

    receive() external payable {}
}
