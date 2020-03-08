var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const pair = StellarSdk.Keypair.random();
import * as request from 'superagent';
import {secretKey, publicKey} from './createStellarAccount'

export const rootSecretKey = pair.secret();
export const rootPublicKey = pair.publicKey();
var rootKeypair = StellarSdk.Keypair.fromSecret(rootSecretKey)
let createAccount = async() => {
    const newAccount = await request.get(`https://friendbot.stellar.org?addr=${rootKeypair.publicKey()}`)
    const account = await server.loadAccount(rootKeypair.publicKey());
    return account
}

export const createMultiSig = async() => {
    var rootAccount = await createAccount()
    var secondaryAddress = publicKey
    var transaction = new StellarSdk.TransactionBuilder(rootAccount, {
        fee: StellarSdk.BASE_FEE,
        networkPassphrase: StellarSdk.Networks.TESTNET
      })
      .addOperation(StellarSdk.Operation.setOptions({
        signer: {
          ed25519PublicKey: secondaryAddress,
          weight: 1
        }
      }))
      .addOperation(StellarSdk.Operation.setOptions({
        masterWeight: 1, // set master key weight
        lowThreshold: 1,
        medThreshold: 2, // a payment is medium threshold
        highThreshold: 2 // make sure to have enough weight to add up to the high threshold!
      }))
      .setTimeout(30)
      .build();
    transaction.sign(rootKeypair);
    return transaction
}



