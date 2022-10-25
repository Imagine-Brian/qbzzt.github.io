require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://eth-goerli.g.alchemy.com/v2/gnpZlsjRhh8aaTOS3I-4Pr83WEh-CwZA",
       accounts: ["45355bb7ee5c4db23e4dd03c82d122ddf66be600768de8c84945adbb28b6e925"]
    }
  }

};
