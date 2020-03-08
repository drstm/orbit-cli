import {Command} from '@oclif/command'
import * as request from 'superagent'
import { askInitProposal, askVoteProposal } from '../utils/inquirer';
import {createMultiSig} from '../utils/createMultiSig'
const ora = require('ora');

export class Proposal extends Command {
    static description = 'commands related to a proposal'
    static usage = 'issue --flag'

    static examples = [
        '$ issue --force',
        '$ issue --help',
    ]

    static args = [
        {name: 'new'},
        {name: 'view'}
    ]

    async run() {
        const {args} = this.parse(Proposal)
        console.log(args)
        const baseUrl = 'http://localhost:8080/api/'
        if (args.new == 'new'){
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
            const message = await askInitProposal();
            const spinnerStart = ora({
                text: 'Submitting a proposal',
                color: 'green',
            })
            spinnerStart.start();
            const propRes = await request.post(baseUrl + 'proposals/')
                                .set('Content-Type', 'application/json')
                                .send({
                                    message: message.message,
                                    nick: "manu"
                                });
            await new Promise(resolve => setTimeout(resolve, 2000));
            spinnerStart.stopAndPersist({
                text: 'Submitted proposal',
                symbol: '📄'
            })
        } else if (args.new == 'view') {
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
            const spinnerStart = ora({
                text: 'Fetching proposals',
                color: 'green',
            })
            spinnerStart.start();
            const propResFetch = await request.get(baseUrl + 'proposals/')
            await new Promise(resolve => setTimeout(resolve, 2000));
            spinnerStart.succeed()
            console.log(propResFetch.body.data[0])

        } else if (args.new == 'vote') {
            const data = await askVoteProposal()
            const spinnerStart = ora({
                text: 'Registering vote',
                color: 'green',
            })
            spinnerStart.start()
            const propResFetch = await request.put(baseUrl + 'proposals/')
            await new Promise(resolve => setTimeout(resolve, 2000));
            spinnerStart.succeed()
        } else if (args.new == 'execute') {
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
            const spinnerStart = ora({
                text: 'Creating multisig wallet',
                color: 'cyan',
              })
            spinnerStart.start();
            const result:any = await createMultiSig()
            await new Promise(resolve => setTimeout(resolve, 2000));
            spinnerStart.succeed(`Created a new wallet`);
            console.log(result)
        }
    }
}