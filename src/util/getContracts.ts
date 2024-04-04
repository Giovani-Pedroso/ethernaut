//To more info go to /contracts/03CoinFlipAttack.sol
import { ethers } from "hardhat";
// import { ABI, ABI_ATTACK } from "./variables/09/ABIS";
import * as fs from "fs";
// import {  } from "../../artifacts/contracts/";
import colors from "colors";
import figlet from "figlet";
import dotenv from "dotenv";
import { AbstractProvider, Contract, Signer, Wallet } from "ethers";

colors.enable();
dotenv.config();

type ChalegenInfo = {
  provider: AbstractProvider;
  signer: Wallet;
  contract: Contract;
  contractAttack: Contract | null;
};

export const getContracs = async (
  chalengeName: string,
  isTest: boolean
): Promise<ChalegenInfo> => {
  let CONTRACT_ADDS, CONTRACT_ADDS_ATTACK, PRIVATE_KEY, URL;

  const envContract = `${chalengeName.toUpperCase()}_ADDRS`;
  const envAttackContract = `${chalengeName.toUpperCase()}_ADDRS_ATTACK`;

  if (isTest) {
    CONTRACT_ADDS = process.env.TEST_ADDR_ONE as string;
    CONTRACT_ADDS_ATTACK = process.env.TEST_ADDR_TWO as string;
    PRIVATE_KEY = process.env.PRIVATE_KEY_TEST_TWO as string;
    URL = "http://127.0.0.1:8545/";

    await figlet("Test", function (err: any, data: any) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    });
  } else {
    CONTRACT_ADDS = process.env[envContract] as string;
    CONTRACT_ADDS_ATTACK = process.env[envAttackContract] as string;
    PRIVATE_KEY = process.env.PRIVATE_KEY as string;
    URL = "wss://ethereum-sepolia-rpc.publicnode.com";

    await figlet("Production", function (err: any, data: any) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    });
  }

  const artifactsPath = `./artifacts/contracts/${chalengeName}`;
  const files = fs.readdirSync(artifactsPath);

  const provider = ethers.getDefaultProvider(URL);
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);

  // 2 contracts means there is an attack contract
  if (files.length == 2) {
    // Get the abi infromation of the contracts
    let abi_file_path_1 = `../.${artifactsPath}/og.sol/${
      fs.readdirSync(`${artifactsPath}/og.sol/`)[1]
    }`;
    let abi_file_path_2 = `../.${artifactsPath}/attack.sol/${
      fs.readdirSync(`${artifactsPath}/attack.sol/`)[1]
    }`;
    const ABI_OG = (await import(abi_file_path_1)).abi;
    const ABI_ATTACK = (await import(abi_file_path_2)).abi;

    const contract = new ethers.Contract(CONTRACT_ADDS, ABI_OG, signer);
    const contractAttack = new ethers.Contract(
      CONTRACT_ADDS_ATTACK,
      ABI_ATTACK,
      signer
    );

    return { contract, contractAttack: contractAttack, provider, signer };
  } else {
    let abi_file_path_1 = `../.${artifactsPath}/og.sol/${
      fs.readdirSync(`${artifactsPath}/og.sol/`)[1]
    }`;
    const ABI_OG = (await import(abi_file_path_1)).abi;
    const contract = new ethers.Contract(CONTRACT_ADDS, ABI_OG, signer);
    return { contract, contractAttack: null, provider, signer };
  }
};
