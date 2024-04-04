//To more info go to /contracts/03CoinFlipAttack.sol
import { ethers } from "hardhat";
import { ABI, ABI_ATTACK } from "./variables/09/ABIS";
import colors from "colors";
import figlet from "figlet";
import dotenv from "dotenv";

colors.enable();
dotenv.config();

const TEST = true;

//

if (TEST) {
  CONTRACT_ADDS = process.env.TEST_ADDR_ONE as string;
  CONTRACT_ADDS_ATTACK = process.env.TEST_ADDR_TWO as string;
  PRIVATE_KEY = process.env.PRIVATE_KEY_TEST_TWO as string;
  URL = "http://127.0.0.1:8545/";

  figlet("Test", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
} else {
  CONTRACT_ADDS = process.env.VAULT_ADDRS as string;
  CONTRACT_ADDS_ATTACK = process.env.FORCE_ADDRS_ATTACK as string;
  PRIVATE_KEY = process.env.PRIVATE_KEY as string;
  URL = "wss://ethereum-sepolia-rpc.publicnode.com";

  figlet("Production", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
}

const provider = ethers.getDefaultProvider(URL);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

const contract = new ethers.Contract(CONTRACT_ADDS, ABI, signer);
const contractAttack = new ethers.Contract(
  CONTRACT_ADDS_ATTACK,
  ABI_ATTACK,
  signer
);

const check = async () => {
  const isLocked = await contract.locked();
  console.log("Is the contract locked:", isLocked);
};

const main = async () => {
  // const balance = await provider.getBalance(CONTRACT_ADDS);
  // const prize = await contract.prize();
  // console.log(prize);
  // const owner = await contract.owner();
  // signer.sendTransaction({
  //   to: CONTRACT_ADDS,
  //   value: ethers.parseEther("1"),
  // });
  // console.log("the owner is:", owner);
  // contract.fallback({value:ethers.parseEther("0.001")})
  // console.log("con", contract);
  contractAttack.startAttack();
};

main();
// check();
