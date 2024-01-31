require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const URL = "https://eth-sepolia.g.alchemy.com/v2/IrKacA794mfjNeuRwjIHcDdlrcJBiekz";
const KEY = "8fd68b2aa1e7719bf2f5bfb9ea7004314b594b0b558e3c7327b0f3ba604a11fe" ;
module.exports = {
  solidity: "0.8.19",
  networks:{
    sepolia:{
      url: URL,
      accounts:[`0x${KEY}`],
    },
  },
};


