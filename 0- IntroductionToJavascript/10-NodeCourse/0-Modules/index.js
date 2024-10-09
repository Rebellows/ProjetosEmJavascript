const fs = require('fs'); // importing file system

fs.readFile('file.txt', 'utf8', (error, data) => { // utilizing a function of fs
  if (error) {
    console.log(eror);
  }
  console.log(data);
});
