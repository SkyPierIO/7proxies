//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
// import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";

contract YourContract {
	// Events
	event HostRegistered(address indexed host, string nodeId);
	event HostUnregistered(address indexed host, string nodeId);
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
	mapping(address => NodeInfo) hostsToInfo;

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
			hostsToInfo[msg.sender] = NodeInfo(nodeId, 0, true, 0);
			emit HostRegistered(msg.sender, nodeId);
		}
	}

	function unregisterAsHost(string memory nodeId) public {
		if(hostsToInfo[msg.sender].active){
			hostsToInfo[msg.sender].nodeId = "";
			hostsToInfo[msg.sender].active = false;
			emit HostUnregistered(msg.sender, nodeId);
		}
	}

	function useHost(address host) public {
		hostsToInfo[host].users++;
	}
}
