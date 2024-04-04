// This code does not work

console.clear();
import dotenv from "dotenv";
import { ethers } from "hardhat";
import { ABI_COINFLIP } from "./variables/ABIS";

dotenv.config();

// const PRIVATE_KEY = process.env.PRIVATE_KEY as string;
// const CONTRACT_ADDRS = "0x40dA224Fe57afcC450B9c60797d789977cE72D50";
// const provider = ethers.getDefaultProvider(
//   "wss://ethereum-sepolia-rpc.publicnode.com"
// );

const PRIVATE_KEY =
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const CONTRACT_ADDRS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const provider = ethers.getDefaultProvider("http://127.0.0.1:8545");

const FACTOR = ethers.getBigInt(
  "57896044618658097711785492504343953926634992332820282019728792003956564819968"
);

console.log("Your private key is: ", PRIVATE_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const contract = new ethers.Contract(CONTRACT_ADDRS, ABI_COINFLIP, signer);

const getFlip = async () => {
  const blockNumber = ethers.getBigInt((await provider.getBlockNumber()) - 1);
  const block = await provider.getBlock(blockNumber);
  const blockHash = ethers.getBigInt(block.hash);
  const coinFlip = blockHash / FACTOR;
  console.log(coinFlip);
  const side = coinFlip == ethers.getBigInt(1) ? true : false;
  console.log({ blockHash, blockNumber, side });

  return side;
};

const countPlus = async () => {
  await contract.countPlus();
};

const getCount = async () => {
  const count = await contract.count();
  console.log("the value of count is", count);
  return count;
};

const flipTest = async () => {
  await contract.flip_test();
};

const getFlipBlock = async (blockToTest: number) => {
  const blockNumber = ethers.getBigInt(blockToTest);
  const block = await provider.getBlock(blockNumber);
  const blockHash = ethers.getBigInt(block.hash);
  const coinFlip = blockHash / FACTOR;
  // console.log(coinFlip);
  const side = coinFlip == ethers.getBigInt(1) ? true : false;
  // console.log({ blockHash, blockNumber, side });

  return side;
};

const getFlipBlockC = async (blockToTest: number) => {
  const x = await contract.flip_checkt(blockToTest);
  // console.log(x);
  return x[0];
};

const testBlocks = async () => {
  let currentBlock = await provider.getBlockNumber();

  for (let i = 0; i < currentBlock; i++) {
    const gess = await getFlipBlock(i);
    const fact = await getFlipBlockC(i);
    console.log(
      `The gess for the block ${i} is ${gess == fact ? "correct" : "wrong"}`
    );
  }
};
const getWins = async () => {
  const wins = await contract.consecutiveWins();
  console.log("you won ", wins, " times");
};

const main = async () => {
  const guess = await getFlip();
  contract.flip(guess);
  console.log("the guess is:", guess);
};

const testGuess = async (blockToTest: number) => {
  const y = await getFlipBlock(blockToTest);
  console.log("the guess:", y);
  const x = await getFlipBlockC(blockToTest);
  console.log("the facst:", x);
};
// // main();
// // getWins();
// testGuess(30);
// testBlocks();
provider.getBlockNumber().then((x) => {
  console.log("block: ", x);
});
console.log("\n\n ---------------------------- \n\n");
