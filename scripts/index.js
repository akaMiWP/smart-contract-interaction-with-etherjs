require("dotenv").config();
const HelloWorld = require("../out/HelloWorld.sol/HelloWorld.json");
const ethers = require("ethers");

async function main() {
  const provider = new ethers.AlchemyProvider(
    "sepolia",
    process.env.ALCHEMY_SEPOLIA_API_KEY
  );

  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const contract = new ethers.Contract(
    process.env.ADDRESS,
    HelloWorld.abi,
    wallet
  );

  await contract.changeMessage("Hello World");
  const message = await contract.getMessage();
  console.log("Message is:", message);
}

main();
