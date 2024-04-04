import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { throws } from "assert";
import { ethers } from "hardhat";

const VaultModule = buildModule("Vault", (m) => {
  const password = "meunomenoaejohn";
  const passwordByte = ethers.encodeBytes32String(password);
  let signers: any = null;

  const contract = m.contract("Vault", [passwordByte]);

  return { contract };
});

export default VaultModule;
