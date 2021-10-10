const CryptXxx = artifacts.require("CryptXxx");

//Crypt Wolf
module.exports = function (deployer) {
  deployer.deploy(CryptXxx, "0xf57b2c51ded3a29e6891aba85459d600256cf317", "Crypt Wolf", "WLF", "https://crypt-wolf.test.net");
};
