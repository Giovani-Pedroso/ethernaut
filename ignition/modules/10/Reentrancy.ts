import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { throws } from "assert";
import { ethers } from "hardhat";

const Contract = buildModule("Reentrance", (m) => {
  let signers: any = null;

  const contract = m.contract("Reentrance");

  return { contract };
});

export default Contract;
