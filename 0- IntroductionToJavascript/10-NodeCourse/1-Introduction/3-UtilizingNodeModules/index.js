// // external modules basics
// const minimist = require('minimist');
// const args = minimist(process.argv.slice(2));

// // console.log(args);

// const name = args['name'];
// const job = args['job'];

// // console.log(`His name is ${name} and his profession is ${job}`);

// // internal modules basics
// const sum = require('./sum').sum;
// const args2 = minimist(process.argv.slice(2));

// const a = parseInt(args2['a']);
// const b = parseInt(args2['b']);

// // sum(a, b);

// // utilizing chalk
// const chalk = require('chalk');
// const grade = Math.floor(Math.random() * 11);

// console.log(`Your grade is ${grade}`);
// if (grade >= 7) {
//     console.log(chalk.green("Congratulations, you passed!"));
// }
// else {
//     console.log(chalk.red("You will be here next year..."));
// }

// // reading inputs
// const readLine = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// readLine.question("What is your favorite language? ", (language) => {
//     console.log(`My favorite language is ${language}`);
//     readLine.close();
// });

// // inputs abstraction
// const inquirer = require('inquirer');

// inquirer.prompt([{
//     name: 'p1',
//     message: 'What is the first grade? ',
// }, {
//     name: 'p2',
//     message: 'What is the second note? ',
// }]).then((answers) => {
//     console.log(answers);
//     const average = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;
//     console.log(`The average is ${average}`);
// }).catch((error) => console.log(error));

// // event emitter
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('start', () => {
//     console.log("The program is running");
// });

// console.log("Before the program");
// eventEmitter.emit('start');
// console.log("After the program");

// // sync and assync
// const fs = require('fs');
// console.log("Before");
// fs.writeFileSync('file.txt', 'Hello World');
// console.log("After");

// console.log("Before");
// fs.writeFile('file.txt', 'Hello World', function(error) {
//     SetTimeout(function() {
//         console.log("File created");
//     }, 1000)
// });
// console.log("After");

// // errors
// const x = '10';
// if (!Number.isInteger(x)) {
//     throw new Error('x is not an integer');
// }

// try {
//     x = 2;
// }
// catch(error) {
//     console.log(`Something went wrong: ${error}`);
// }

// // exercise
// const inquirer = require('inquirer');
// const chalk = require('chalk');
// inquirer.prompt([{
//     name: 'p1',
//     message: 'What is your name? ',
// }, {
//     name: 'p2',
//     message: 'How old are you? ',
// }]).then((answers) => {
//     console.log(chalk.bgYellow(chalk.black(`Your name is ${answers.p1} and your age is ${answers.p2}`)));
// }).catch((error) => console.log(error));

// // http module and url module
// const http = require('http');
// const port = 3000;

// const url = require('url');
// const address = 'https://www.mysiste.com.br/catalog?products=chair';
// const parseUrl = new url.URL(address);

// console.log(parseUrl.host);
// console.log(parseUrl.pathname);
// console.log(parseUrl.search);
// console.log(parseUrl.searchParams);
// console.log(parseUrl.searchParams.get('products'));

// const server = http.createServer((req, res) => {
//     const urlInfo = require('url').parse(req.url, true);   
//     const name = urlInfo.query.name;

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html', 'utf-8');
//     if (!name) {
//         res.end('<h1>Fill your name:</h1><form method="GET"><input type="text" name="name"><button>Send</button></form>');
//     }
//     else {
//         res.end(`<h1>Hello ${name}</h1>`);
//     }
// });

// server.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

// // module fs
// const fs = require('fs');
// const http = require('http');

// fs.stat('message.txt', (error, stats) => {
//     if (error) {
//         conbsole.log(error);
//         return;
//     }
//     console.log(stats.isFile());
//     console.log(stats.isDirectory());
//     console.log(stats.isSymbolicLink());
//     console.log(stats.ctime);
//     console.log(stats.size);
// })

// const server = http.createServer((req, res) => {
//     const urlInfo = require('url').parse(req.url, true);
//     const name = urlInfo.query.name;

//     if (!name) {
//         fs.readFile('message.html', function (error, data) {
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data);
//             return res.end();
//         })
//     }
//     else {
//         const nameNewLine = name + '\r\n';

//         fs.appendFile('message.txt', nameNewLine, function (error, data) {
//             res.writeHead(302, {'Location': '/'});
//             return res.end();
//         })
//     }
// });

// const server = http.createServer((req, res) => {
//     const q = require('url').parse(req.url, true);
//     const filename = q.pathname.substring(1);

//     if (filename.includes('html')) {
//         if (fs.existsSync(filename)) {
//             fs.readFile(filename, (error, data) => {
//                 res.writeHead(200, {'Content-Type': 'text/html'});
//                 res.write(data);
//                 return res.end();
//             });
//         }
//         else {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             res.write('File not found');
//             return res.end();
//         }
//     }
// });

// fs.unlink('message.txt', (error) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     console.log('File deleted');
// });

// const lastFileName = 'message.txt';
// const newFileName = 'newMessage.txt';

// fs.rename(lastFileName, newFileName, (error) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     console.log(`File ${lastFileName} renamed to ${newFileName}`);
// });

// server.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

// utilizing path module
const path = require('path');
const customPath = '/directories/gabriel/file.pdf';

console.log(path.dirname(customPath));
console.log(path.basename(customPath));
console.log(path.extname(customPath));

console.log(path.resolve('message.txt'));

const folder = 'directories';
const filename = 'message.txt';

const finalPath = path.join('/', 'gabriel', folder, filename);
console.log(finalPath);