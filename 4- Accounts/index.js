// external modules
const inquirer = require('inquirer');
const chalk = require('chalk');

// internal modules
const fs = require('fs');

// creating the menu for the user
operation();
function operation() {
    inquirer.prompt([ // list to choose between the options
        {
            name: 'operation',
            type: 'list',
            message: 'What do you want to do?',
            choices: [
                'Create an account',
                'Check balance',
                'Deposit',
                'Withdraw',
                'Exit'
            ]
        }
    ]).then((answers) => { // calling the respective function based on the user's choice
        const operation = answers['operation'];

        if (operation === 'Create an account') {
            createAccount();
        } else if (operation === 'Check balance') {
            checkBalance();
        } else if (operation === 'Deposit') {
            deposit();
        } else if (operation === 'Withdraw') {
            withdraw();
        } else if (operation === 'Exit') {
            console.log(chalk.bgBlue.black('Come back soon!'));
            process.exit();
        }
    })
    .then().catch((error) => console.log(error));
}

// creating an account
function createAccount() {
    console.log(chalk.bgGreen.black('Congratulations to choose our bank!'));
    console.log(chalk.green('Fill the options below to create your account'));

    buildAccount();
}

function buildAccount() { // building the account
    inquirer.prompt([
        {
            name: 'account name',
            type: 'input',
            message: 'What is your name?',
            validate: (value) => {
                if (value.length < 1) {
                    return 'Please enter your name';
                }
                return true;
            }
        },
    ]).then((answers) => {
        const accountName = answers['account name'];

        console.info(accountName);

        if (!fs.existsSync('accounts')) { // verifies if the folder exists, if not, creates it
            fs.mkdirSync('accounts');
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) { // verifies if the file exists, if not, creates it (with the name of the user)
            console.log(chalk.bgRed.black('An account with this name already exists! Please choose another name'));
            buildAccount();
            return;
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}',  // creating the file
            function(error) {
                console.log(error);
            },
        );
        console.log(chalk.green('Your account has been created!'));
        operation();

    }).catch((error) => console.log(error));
}

// depositing money
function deposit() {
    inquirer.prompt([
        {
            name: 'account name',
            type: 'input',
            message: 'What is the name of your account?',
            validate: (value) => {
                if (value.length < 1) {
                    return 'Please enter your name';
                }
                return true;
            }
        },
    ]).then((answers) => {
        const accountName = answers['account name'];

        if (!checkAccountExists(accountName)) {
            return;
        }

        inquirer.prompt([
            {
                name: 'amount',
                type: 'number',
                message: 'How much do you want to deposit?',
                validate: (value) => {
                    if (value <= 0) {
                        return 'Please enter a valid amount';
                    }
                    return true;
                }
            },
        ]).then((answers) => {
            const amount = answers['amount'];

            addAmount(accountName, amount);
            operation();
        })
    }).catch((error) => console.log(error));
}

// checking if the account exists
function checkAccountExists(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('An account with this name does not exist!'));
        return false;
    }
    return true;
}

// depositing an amount
function addAmount(accountName, amount) {
    const accountData = getAccount(accountName);

    if (!amount) {
        console.log(chalk.bgRed.black('Invalid amount!'));
        return deposit();
    }

    accountData.balance += parseFloat(amount); 

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(error) {
            console.log(error);
        },
    );

    console.log(chalk.green(`Your new balance is ${accountData.balance}`));
}

// getting the account
function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    });

    return JSON.parse(accountJSON);
}

// consulting the balance
function checkBalance() {
    inquirer.prompt([
        {
            name: 'account name',
            type: 'input',
            message: 'What is the name of your account?',
            validate: (value) => {
                if (value.length < 1) {
                    return 'Please enter your name';
                }
                return true;
            }
        },
    ]).then((answers) => {
        const accountName = answers['account name'];

        if (!checkAccountExists(accountName)) {
            console.log(chalk.bgRed.black('An account with this name does not exist!'));
            return checkBalance();
        }

        const accountData = getAccount(accountName);
        console.log(chalk.green(`Your balance is ${accountData.balance}`));

        operation();
    }).catch((error) => console.log(error));
}

// withdrawing money
function withdraw() {
    inquirer.prompt([
        {
            name: 'account name',
            type: 'input',
            message: 'What is the name of your account?',
            validate: (value) => {
                if (value.length < 1) {
                    return 'Please enter your name';
                }
                return true;
            }
        },
    ]).then((answers) => {
        const accountName = answers['account name'];

        if (!checkAccountExists(accountName)) {
            return deposit();
        }

        inquirer.prompt([
            {
                name: 'amount',
                type: 'number',
                message: 'How much do you want to withdraw?',
                validate: (value) => {
                    if (value <= 0) {
                        return 'Please enter a valid amount';
                    }
                    return true;
                }
            },
        ]).then((answers) => {
            const amount = answers['amount'];

            removeAmount(accountName, amount);
            operation();
        })
    }).catch((error) => console.log(error));
}

// removing amount
function removeAmount(accountName, amount) {
    const accountData = getAccount(accountName);

    if (!amount || amount > accountData.balance) {
        console.log(chalk.bgRed.black('Invalid amount!'));
        return;
    }

    accountData.balance -= parseFloat(amount); 

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(error) {
            console.log(error);
        },
    );

    console.log(chalk.green(`Your new balance is ${accountData.balance}`));
}