import * as request from 'superagent';
var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const pair = StellarSdk.Keypair.random();

export const secretKey = pair.secret();
export const publicKey = pair.publicKey();

export const createAccount = async() => {
    // console.log("newly created secret :" + secretKey)
    // console.log("newly created public key : " + publicKey)
    try {
        const newAccount:any = await request.get(`https://friendbot.stellar.org?addr=${pair.publicKey()}`)
        // console.debug(newAccount.body)
        const balance = await checkBalances()
        return {
            secretKey: secretKey,
            publicKey: publicKey,
            balance: balance
        }
    } catch (error) {
        console.error("error n/w is " + error)
    }

}

const checkBalances = async() => {
    const account = await server.loadAccount(pair.publicKey());
    let balance = account.balances;
    // console.debug("Balances for account: " + pair.publicKey());
    return account.balances[0].balance
}