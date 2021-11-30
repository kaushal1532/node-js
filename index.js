const fs = require("fs");

//creating a new file:-
// fs.writeFileSync("read.txt", "welcome to my channel");

// fs.appendFileSync('read.txt', "how are you i am fine thank you");

// const buf_data = fs.readFileSync("read.txt");
// org_data = buf_data.toString();
// console.log(org_data);

//to rename the file:-
fs.renameSync('read.txt', 'readwrite.txt');