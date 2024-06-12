// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract HelloWorld {
    string private message;
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    function changeMessage(string memory _message) external {
        require(msg.sender == owner, "Sorry, this is only for the owner");
        message = _message;
    }

    function getMessage() external view returns (string memory) {
        return message;
    }
}
