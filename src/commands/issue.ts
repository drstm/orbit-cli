import {Command} from '@oclif/command'
import {teslaRocket} from '../utils/issueAsset'
const ora = require('ora');

export class Issue extends Command {

    static description = 'issues a token'
    static usage = 'issue --flag'

    static examples = [
        '$ issue --force',
        '$ issue --help',
    ]

    static args = [
        {name: 'new'}
    ]

    async run() {
        const {args} = this.parse(Issue)
        if (args.new){
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
                text: 'Issuing a TeslaRocket Token',
                color: 'red',
              })
              spinnerStart.start();
              await new Promise(resolve => setTimeout(resolve, 3000));
              spinnerStart.stopAndPersist({
                  symbol: '🚀'
              })
              console.log(teslaRocket)
        } else {
            this.error('incorrect option passed!')
            this.exit(1)
        }
    }
}