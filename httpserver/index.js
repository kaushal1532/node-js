const http = require('http');
const server = http.createServer((req, res) => {
    // res.end("hello form the oths");
    if (req.url == "/") {
        res.end("hello form the home sides");
    } else if (req.url == "/about") {
        res.end("hello fomr the about us sides");

    } else if (req.url = "/contact") {
        res.end("hello form the contactus sides");
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404 error pages.page doen't exist</h1>");
    }

});
server.listen(5000, "127.0.0.1", () => {
    // console.log(req.url);

    console.log("listening to the port no 5000");
});