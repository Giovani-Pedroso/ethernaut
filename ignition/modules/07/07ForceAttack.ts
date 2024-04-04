import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { throws } from "assert";
import { ethers } from "hardhat";

const ForceModule = buildModule("ForceAttack", (m) => {
  let signers: any = null;

  const contract = m.contract("ForceAttack");

  return { contract };
});

export default ForceModule;
