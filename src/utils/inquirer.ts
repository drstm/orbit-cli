const inquirer = require('inquirer');


export const askInitCredentials =  () => {
    const questions = [
        {
            name: 'email',
            type: 'input',
            message: 'Enter your e-mail address:',
            validate: function( value: any ) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your e-mail address.';
            }
            }
        },
        {
            name: 'nick',
            type: 'input',
            message: 'Enter your nickname:',
            validate: function(value: any) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your nickname.';
            }
            }
        }
    ];
    return inquirer.prompt(questions);
}

export const askInitProposal = () => {
    const questions = [
        {
            name: 'message',
            type: 'input',
            message: 'Enter your proposal and be sure to include an asset_code:',
            validate: function( value: any ) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your proposal';
            }
            }
        }
    ];
    return inquirer.prompt(questions);
}

export const askVoteProposal = () => {
    const questions = [
        {
            name: 'vote',
            type: 'input',
            message: 'Enter the proposal you want to vote for: ',
            validate: function( value: any ) {
            if (value.length) {
                return true;
            } else {
                return 'Please enter your vote';
            }
            }
        }
    ];
    return inquirer.prompt(questions);
}
