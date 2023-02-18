const fs = require('fs');

fs.readdir('./', 'utf-8', (err, data) => {
    console.log(data);
});

fs.readFile('./rFile.js', 'utf-8', (err, data) => {
    console.log(data);
});
