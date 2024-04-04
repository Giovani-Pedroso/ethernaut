import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { throws } from "assert";
import { ethers } from "hardhat";

const CoinFlipModule = buildModule("coin_flip_attack", (m) => {
  if (!process.env.ADDRS_COINFLIP_OG) {
    throw new Error("You forgot to pass the adders for the original contract");
  }
  let signers: any = null;

  const telephone = m.contract("CoinFlipAttack");

  return { telephone };
});

export default CoinFlipModule;
