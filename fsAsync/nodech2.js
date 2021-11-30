const fs = require("fs");
// fs.mkdir("thapa", (err) => {
//     console.log("folder created");
// });

fs.writeFile('bio.txt', "my name is vinod",
    (err) => {
        console.log("files created");

    });