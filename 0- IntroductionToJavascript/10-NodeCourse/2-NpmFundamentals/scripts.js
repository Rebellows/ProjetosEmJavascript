const _ = require('lodash');
const chalk = require('chalk');

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 6, 7, 8];

const diff = _.difference(a, b);
console.log(chalk.green('The difference is:'), diff);

// npm install <package> to install a package
// pnm uninstall <package> to uninstall a package
// npm link/unlink <package> to link/unlink a package
// npx <package> to run a package
// npm run <package> to run a package