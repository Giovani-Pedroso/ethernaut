import { ethers } from "hardhat";
import { getContracs } from "./util/getContracts";

const main = async () => {
  const { contract, contractAttack, signer, provider } = await getContracs(
    "10_Reentrance",
    true
  );
  const myAddress = await signer.getAddress();
  // const re = await contract.donate(myAddress, {
  //   value: ethers.parseEther("0.11"),
  // });
  const balance = await contract.balanceOf(myAddress);
  console.log(`the balance of ${myAddress} is ${balance}`);
};

main();
