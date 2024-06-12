require("dotenv").config();

const ethers = require("ethers");
const HelloWorld = require("../out/HelloWorld.sol/HelloWorld.json");

async function main() {
  const provider = new ethers.AlchemyProvider(
    "sepolia",
    process.env.ALCHEMY_SEPOLIA_API_KEY
  );

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const factory = new ethers.ContractFactory(
    HelloWorld.abi,
    HelloWorld.bytecode,
    wallet
  );

  console.log("Deploying a contract....");
  const contract = await factory.deploy();
  console.log("The contract has been successfully deployed");

  console.log("Contact Address is:", await contract.getAddress());
}

main();
