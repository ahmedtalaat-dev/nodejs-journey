const fs = require("fs");

// Create and write to a file
fs.writeFileSync("notes.txt", "Hello from Node.js!");

// Read the file
const data = fs.readFileSync("notes.txt", "utf8");
console.log("File Content:", data);

// Add more content to the file
fs.appendFileSync("notes.txt", "\nI am learning the fs module.");

// Read the updated file
const updatedData = fs.readFileSync("notes.txt", "utf8");
console.log("Updated Content:", updatedData);

// Check if the file exists
console.log("File Exists:", fs.existsSync("notes.txt"));

// Create a directory
if (!fs.existsSync("files")) {
    fs.mkdirSync("files");
    console.log("Directory created!");
}

// Create a file inside the directory
fs.writeFileSync("files/example.txt", "This file is inside the files directory.");

// Read the file inside the directory
const exampleData = fs.readFileSync("files/example.txt", "utf8");
console.log("Example File:", exampleData);
