// Simple CLI demo application
const fs = require('fs');
const os = require('os');

// Welcome message
console.log('Welcome to the Day 3 CLI Application Demo!');

// Create a file
console.log('\n--- File Creation Demo ---');
const fileContent = 'This is a sample file created by our CLI application.';
fs.writeFileSync('userFile.txt', fileContent);
console.log('File created successfully!');

// Log the operation
const timestamp = new Date().toISOString();
fs.appendFileSync('operationLogs.txt', \: File created: userFile.txt\n);
console.log([LOG] \: File created: userFile.txt);

// Display system information
console.log('\n--- System Information Demo ---');
const platform = os.platform();
const freeMemory = Math.round(os.freemem() / (1024 * 1024));
const totalMemory = Math.round(os.totalmem() / (1024 * 1024));
const cpuCores = os.cpus().length;

console.log('System Information:');
console.log('------------------');
console.log(Platform: \);
console.log(Free Memory: \ MB);
console.log(Total Memory: \ MB);
console.log(CPU Cores: \);
console.log('------------------');

// Log system info display
const sysTimestamp = new Date().toISOString();
fs.appendFileSync('operationLogs.txt', \: System information displayed\n);
console.log([LOG] \: System information displayed);

console.log('\nDemo completed! Check operationLogs.txt for the operation logs.');
console.log('Goodbye!');
