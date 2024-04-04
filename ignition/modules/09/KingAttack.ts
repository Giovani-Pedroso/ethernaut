import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { throws } from "assert";
import { ethers } from "hardhat";

const ADDRS_VICTIM =
  process.env.KING_ADDRS || "0x5fbdb2315678afecb367f032d93f642f64180aa3";

const Contract = buildModule("KingAttack", (m) => {
  let signers: any = null;

  const contract = m.contract("KingAttack", [ADDRS_VICTIM]);

  return { contract };
});

export default Contract;
