// Day 3 CLI Application
const fs = require('fs');
const os = require('os');

console.log('Welcome to the Day 3 CLI Application!');
console.log('This application will:');
console.log('1. Create a file with sample content');
console.log('2. Log the operation to a log file');
console.log('3. Display system information');

// Step 1: Create a file
console.log('\n--- Step 1: File Creation ---');
const fileContent = 'This is a sample file created by our CLI application.';
fs.writeFileSync('userFile.txt', fileContent);
console.log('File created successfully: userFile.txt');

// Step 2: Log the operation
console.log('\n--- Step 2: Operation Logging ---');
const timestamp = new Date().toISOString();
const logMessage = timestamp + ': File created: userFile.txt\n';
fs.appendFileSync('operationLogs.txt', logMessage);
console.log('Operation logged: ' + logMessage.trim());

// Step 3: Display system information
console.log('\n--- Step 3: System Information ---');
const platform = os.platform();
const freeMemory = Math.round(os.freemem() / (1024 * 1024));
const totalMemory = Math.round(os.totalmem() / (1024 * 1024));
const cpuCores = os.cpus().length;

console.log('System Information:');
console.log('------------------');
console.log('Platform: ' + platform);
console.log('Free Memory: ' + freeMemory + ' MB');
console.log('Total Memory: ' + totalMemory + ' MB');
console.log('CPU Cores: ' + cpuCores);
console.log('------------------');

// Log system info display
const sysTimestamp = new Date().toISOString();
const sysLogMessage = sysTimestamp + ": System information displayed\n";
fs.appendFileSync("operationLogs.txt", sysLogMessage);
console.log("Operation logged: " + sysLogMessage.trim());

// Step 4: Git commit instructions
console.log("\n--- Step 4: Git Commit ---");
console.log("To commit these changes to Git, run:");
console.log("git add userFile.txt operationLogs.txt");
console.log("git commit -m \"Add files created by CLI application\"");

console.log("\nApplication completed successfully!");
