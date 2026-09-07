const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
    });

    // Home route
    if (req.url === "/" && req.method === "GET") {
        res.end("Welcome to my Node.js server!");
    }

    // About route
    else if (req.url === "/about" && req.method === "GET") {
        res.end("This is the about page.");
    }

    // Handle unknown routes
    else {
        res.writeHead(404, {
            "Content-Type": "text/plain",
        });

        res.end("404 - Page Not Found");
    }
});

// Start the server
server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
