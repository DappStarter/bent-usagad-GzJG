require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot fire radar outside clutch coral light army genius'; 
let testAccounts = [
"0x2ed143306d2c8c5a9a39090029588758758ea264954bbd6a188f1fcc6e242f88",
"0x405457139fe20f5901a75aecde0c788e83b24449df541859406ff2ad2b605b0e",
"0x868e220a630bd1788d45777175493fe2b80de23071dd1ba50a984b60d7b4bb6d",
"0xa93f090b24b9a5126f160e6fd539159ee74e835dc397955c2544f894f670bd85",
"0xb4353d7bd314aae309dc420d0d79ebf2b5b3132929209fa035330aff5651009c",
"0x65233e89ee73aeb3ac0f074eee1e6e57b85b38f5f1748b0503dff75a67179b84",
"0xd995b5a753650cfa5af4ab8fde2f74926c3622273a744fdc0771e3e8f6e991d4",
"0x164b4e9e8f432bec2d649ab9847e4c135b9d0ed8597a6f7d5b2628803d0034da",
"0xec46ee274dfbd4d6bbd419799ef3e5f48c7f8c7058dee554dbe300c12d0f3854",
"0x3cc88b461903019c63b2f7fe7146e80b4702c6b2544e4cc17823346badb08940"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

