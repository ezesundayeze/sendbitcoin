const { testnet, mainnet } = require("bitcore-lib/lib/networks");
const { createWallet, createHDWallet } = require("./wallet.bitcoin");
const sendBitcoin = require("./send.bitcoin");

sendBitcoin("mnJJCCLa8FEpVFKoCeE2BUQWKaT6rWUGWV", 0.0001)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// console.log(createHDWallet(testnet))
