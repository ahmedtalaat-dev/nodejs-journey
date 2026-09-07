const os = require("os");

// Operating system platform
console.log("Platform:", os.platform());

// CPU architecture
console.log("Architecture:", os.arch());

// Operating system type
console.log("OS Type:", os.type());

// Hostname
console.log("Hostname:", os.hostname());

// Home directory
console.log("Home Directory:", os.homedir());

// Temporary directory
console.log("Temp Directory:", os.tmpdir());

// Total system memory
console.log("Total Memory:", os.totalmem());

// Free system memory
console.log("Free Memory:", os.freemem());

// CPU information
console.log("CPU Information:", os.cpus());

// Number of CPU cores
console.log("CPU Cores:", os.cpus().length);

// System uptime in seconds
console.log("System Uptime:", os.uptime());
