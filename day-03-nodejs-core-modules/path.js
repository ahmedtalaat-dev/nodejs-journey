const path = require("path");

// Example file path
const filePath = "/users/ahmed/projects/nodejs/app.js";

// Get the directory name
console.log("Directory:", path.dirname(filePath));

// Get the file name
console.log("File Name:", path.basename(filePath));

// Get the file extension
console.log("Extension:", path.extname(filePath));

// Get information about the path
console.log("Parse:", path.parse(filePath));

// Join path segments
const newPath = path.join("users", "ahmed", "projects", "nodejs", "app.js");

console.log("Joined Path:", newPath);

// Get the absolute path
console.log("Absolute Path:", path.resolve("app.js"));
