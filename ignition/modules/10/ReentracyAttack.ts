import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { throws } from "assert";
import { ethers } from "hardhat";

const Contract = buildModule("ReentracyAttack", (m) => {
  let signers: any = null;

  const contract = m.contract("ReEntrancyAttack");

  return { contract };
});

export default Contract;
