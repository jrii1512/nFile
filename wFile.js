const fs = require('fs');
fs.writeFile('./data.json', '{name:"Jouni"}', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Writing completed.")
    }
});
