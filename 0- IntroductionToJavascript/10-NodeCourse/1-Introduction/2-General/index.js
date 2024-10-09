// core modules//
const path = require('path'); // an inner module of node
const extension = path.extname('file.pdf');

console.log(extension);

// reading args
console.log(process.argv);

const args = process.argv.slice(2);
console.log(args);

const name = args[0].split('=')[1];
console.log(name);