import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { throws } from "assert";
import { ethers } from "hardhat";

const Contract = buildModule("King", (m) => {
  let signers: any = null;

  const contract = m.contract("King");

  return { contract };
});

export default Contract;
