import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { throws } from "assert";
import { ethers } from "hardhat";

// add this in the env afther the tests
//TELEPHONE_ADDRS="0x062B9b65C8Bc11AC5AFd82Ee7Ac1b3c9112649c0"

const ADDRS_VICTIM =
  process.env.TELEPHONE_ADDRS || "0x5fbdb2315678afecb367f032d93f642f64180aa3";

const TelephoneModule = buildModule("telephone_attack", (m) => {
  let signers: any = null;

  const telephone = m.contract("TelephoneAttack", [ADDRS_VICTIM]);

  return { telephone };
});

export default TelephoneModule;
