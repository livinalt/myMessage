# MyMessage Smart Contract

## Overview

This repository contains the Solidity code for the "MyMessage" smart contract. The contract is designed to store and manage messages on the Ethereum blockchain.

## Smart Contract Details

### Contract Name: MyMessage

The `MyMessage` contract includes:

1. **State Variable:**
   - `message`: A public state variable that stores the message.

2. **Constructor:**
   - `constructor(string memory initialMessage)`: Initializes the `message` variable with an initial message provided during contract deployment.

3. **Functions:**
   - `setMessage(string memory newMessage)`: Allows updating the message to a new value.
   - `getMessage() public view returns (string memory)`: Retrieves the current message.

## Usage

1. **Setting a New Message:**
   - The `setMessage` function updates the stored message.

2. **Getting the Current Message:**
   - The `getMessage` function retrieves stored message.

## License

This smart contract is distributed under the MIT License.

