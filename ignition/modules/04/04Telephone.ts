import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { throws } from "assert";
import { ethers } from "hardhat";

const TelephoneModule = buildModule("telephone", (m) => {
  let signers: any = null;

  const telephone = m.contract("Telephone");

  return { telephone };
});

export default TelephoneModule;
