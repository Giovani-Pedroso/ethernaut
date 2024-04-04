import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { throws } from "assert";
import { ethers } from "hardhat";

const ForceModule = buildModule("Force", (m) => {
  let signers: any = null;

  const contract = m.contract("Force");

  return { contract };
});

export default ForceModule;
