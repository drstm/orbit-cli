var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

const pair = StellarSdk.Keypair.random();

export const teslaRocket = new StellarSdk.Asset('TSLR', pair.publicKey());