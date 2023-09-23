//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that mints an NFT for the Node Host and get the Node Host paid 
 * @author Ting
 */
struct NodeInfo{
	string nodeId
}

contract HostContract is ERC721 {
	// State Variables
	address public immutable owner = msg.sender;
	mapping(string tokenId => NodeInfo info) tokenIdToInfo;

	function getDataForTokenId(string tokenId) public view return (NodeInfo) {
		return tokenIdToInfo[tokenId];
	}

	function mintNFT(string memory tokenId) public payable {

		// Print data to the hardhat chain console. Remove when deploying to a live network.
		console.log(
			"Creating a Host NFT with Node ID, %s, for %s",
			tokenId,
			msg.sender
		);

		// emit: keyword used to trigger an event
		emit ContractEvent(msg.sender, tokenId);

		_mint(_owner, tokenId);
		tokenIdToInfo[tokenId] = NodeInfo{
			NodeId: 1
		}
		return tokenId;
	}

	// Events: a way to emit log statements from smart contract that can be listened to by external parties
	event ContractEvent(
		address indexed owner,
		string nodeID
	);

	// Constructor: Called once on contract deployment
	// Check packages/hardhat/deploy/00_deploy_your_contract.ts
	constructor(address _owner) {
		owner = _owner;
	}

	// Modifier: used to define a set of rules that must be met before or after a function is executed
	// Check the withdraw() function
	modifier isOwner() {
		// msg.sender: predefined variable that represents address of the account that called the current function
		require(msg.sender == owner, "Not the Owner");
		_;
	}
}
