const fs = require('fs');

//folder create:-
// fs.mkdirSync('thapa');

//new file create:-
// fs.writeFileSync('thapa/bio.txt', "my name is kaushal panchal");
// fs.appendFileSync("thapa/bio.txt", "plz subscribe to my channel");

//read file:
// const data = fs.readFileSync("thapa/bio.txt", "utf-8");
// console.log(data);
// fs.renameSync("thapa/bio.txt", "thapa/mybio.txt");

//delete file:-
// fs.unlinkSync("thapa/mybio.txt");

//folder delete:-
fs.rmdirSync("thapa");