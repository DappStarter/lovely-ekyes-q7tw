require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name razor pupil coach industry light army genius'; 
let testAccounts = [
"0x72865fbe7048945f742c2224a05ce96d8e102ccc277ee5bb1c27d166a19149e2",
"0x1a94bccd30a3a87aac330d84dc7b988867febecebeb5bfaaa40c32e6274c2788",
"0x50dd673e4f2689546f65b1b1de02ec66fba76f6e765544c77cd2f3bb571ad761",
"0xa16624e6f4e190c48067b8b466dd212e67f9840b6463991fb1dcae2d8a16e41b",
"0x626a4de6a4533c2efee3f799de8f7216f812380286470b7dec8c97254cd3a8fe",
"0x7855ce8fd6b155ee876f991e138840e17fc7a7862ebf12d055a4c2995bb9a1c9",
"0x9320c274f160fd3a11c6d92c1cfe3fb362b53faa0e54af98a6b61906a1e0d492",
"0x8a7fa984efe7326e4a1d376112c0ba3c67aff4decae3a273a06a47b13eca8112",
"0xfb3f2a086cab11c171614175c87bcd073ba867e1460f3e53836552ddf8938e90",
"0xf57e18b8754b3d6cf341af9ec97c95d89460c7f89d0189504c435f82ec86bec6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

