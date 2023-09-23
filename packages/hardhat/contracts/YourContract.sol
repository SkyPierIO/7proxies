//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// import "@openzeppelin/contracts/access/Ownable.sol";

contract HostContract is Ownable  {
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
	mapping(address host => NodeInfo info) hostsToInfo;

	function getHost(address host) public view returns (NodeInfo) {
		return tokenIdToInfo[host];
	}

	function registerAsHost(string memory nodeId) public {
		if(!hostsToInfo[msg.sender]){
			hostsToInfo[msg.sender] = NodeInfo(nodeId, 0, true);
			emit HostRegistered(msg.sender, nodeId);
		}
	}

	function unregisterAsHost(string memory nodeId) public {
		if(hostsToInfo[msg.sender]){
			hostsToInfo[msg.sender].nodeInfo = "";
			hostsToInfo[msg.sender].active = false;
			emit HostUnregistered(msg.sender, nodeId);
		}
	}

	function useHost(address host) public {
		hostsToInfo.users++;
	}
}
