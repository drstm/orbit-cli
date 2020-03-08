import {Command} from '@oclif/command'
import cli from 'cli-ux'
import * as request from 'superagent'
import {askInitCredentials} from '../utils/inquirer';
import {createAccount} from '../utils/createStellarAccount'
const ora = require('ora');

export class Init extends Command {
  static description = 'initializes an account'
  static usage = 'init --flag'

  static examples = [
    '$ init --force',
    '$ init --help',
  ]

  static args = [
    {name: 'user'}
  ]

  async run() {
    const {args} = this.parse(Init)
    const baseUrl = 'http://localhost:8080/api/'
    if (args.user){
      // const email = await cli.prompt('What is your email?')
      // const nick = await cli.prompt('What would you like to use as your nickname?')
      console.log('   ·             *       +        ·    o');
      console.log('           \'                  |    +');
      console.log('       ()    .-.,="``"=.    - o -     ´');
      console.log('             \'=/_       :     |            ·');
      console.log('  ·       *   |  \'=._    |              ´');
      console.log('               ;     `=./`,');
      console.log('            .   \'=.__.=\' `=\           *');
      console.log('   +                         +        ·');
      console.log('       o             *            +      ·');
      console.log('*******************************************');
      console.log('*   Welcome to Orbit                      *');
      console.log('*******************************************');
      const credentials = await askInitCredentials();
      const spinnerStart = ora({
        text: 'Creating user',
        color: 'cyan',
      })
      spinnerStart.start();
      const uuid = await request.post(baseUrl + 'users/')
                        .set('Content-Type', 'application/json')
                        .send({
                          email: credentials.email,
                          nickName: credentials.nick
                        });
      await new Promise(resolve => setTimeout(resolve, 2000));
      spinnerStart.succeed(`Created a new user: ${uuid.body.data}`);
      spinnerStart.start('Creating stellar wallet');
      const result:any = await createAccount()
      await new Promise(resolve => setTimeout(resolve, 2000));
      spinnerStart.succeed(`Created a new wallet`);
      console.log("newly created secret :" + result.secretKey)
      console.log("newly created public key : " + result.publicKey)
      console.log("Balances for the account held by " + result.publicKey + " is : " + result.balance +"\n\n");
      
    } else {
      this.error('incorrect option passed!')
      this.exit(1)
    }
  }
}