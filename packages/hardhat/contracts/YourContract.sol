//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
// import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract YourContract {
	// Events
	event HostRegistered(address indexed host, string nodeId, bool active);
	event HostUnregistered(address indexed host, string nodeId, bool active);
	/**
	 * A smart contract that stores the hosts registered on the network
	 * @author Ting
	 */
	struct NodeInfo {
		string nodeId;
		uint256 balance;
		bool active;
		uint users;
	}
	// State Variables
	address public immutable owner;
	mapping(address => NodeInfo) public hostsToInfo;

	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/00_deploy_your_contract.ts
	constructor(address _owner) {
		owner = _owner;
	}

	function getHost(address host) public view returns (NodeInfo memory) {
		return hostsToInfo[host];
	}

	function registerAsHost(string memory nodeId) public {
		if(!hostsToInfo[msg.sender].active){
			hostsToInfo[msg.sender] = NodeInfo({nodeId: nodeId, balance: 0, active: true, users: 0});
			emit HostRegistered(msg.sender, nodeId, true);
		}
	}

	function unregisterAsHost(string memory nodeId) public {
		if(hostsToInfo[msg.sender].active){
			hostsToInfo[msg.sender].nodeId = "";
			hostsToInfo[msg.sender].active = false;
			emit HostUnregistered(msg.sender, nodeId, false);
		}
	}

	function canBeAHost(address host) public view returns (bool) {
		return !hostsToInfo[host].active;
	}

	function useHost(address host) public {
		hostsToInfo[host].users++;
	}
}
