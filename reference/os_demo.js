const os = require('os');

// Platform
console.log(os.platform());     //win32

// CPU Arch
console.log(os.arch());         //x64

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());
