#!/usr/bin/env node

const fs = require(\"fs\");
const path = require(\"path\");
const os = require(\"os\");
const readline = require(\"readline\");

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to log operations
function logOperation(operation) {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp}: ${operation}\n`;
  
  fs.appendFile(
    path.join(__dirname, \"operationLogs.txt\"),
    logMessage,
    (err) => {
      if (err) console.error(\"Error writing to log file:\", err);
    }
  );
}

// Function to create a file with user input
function createFile() {
  rl.question(\"Enter the text you want to write to the file: \", (text) => {
    fs.writeFile(
      path.join(__dirname, \"userFile.txt\"),
      text,
      (err) => {
        if (err) {
          console.error(\"Error creating file:\", err);
        } else {
          console.log(\"File created successfully!\");
          logOperation(\"File created: userFile.txt\");
        }
        showMainMenu();
      }
    );
  });
}

// Function to display system information
function showSystemInfo() {
  const platform = os.platform();
  const freeMemory = Math.round(os.freemem() / (1024 * 1024));
  const totalMemory = Math.round(os.totalmem() / (1024 * 1024));
  const cpuCores = os.cpus().length;

  console.log("\nSystem Information:");
  console.log("------------------");
  console.log(`Platform: ${platform}`);
  console.log(`Free Memory: ${freeMemory} MB`);
  console.log(`Total Memory: ${totalMemory} MB`);
  console.log(`CPU Cores: ${cpuCores}`);
  console.log("------------------\n");
  
  logOperation("System information displayed");
  showMainMenu();
}

// Main menu function
function showMainMenu() {
  console.log("\nCLI Application Menu:");
  console.log("1. Create a file");
  console.log("2. View system information");
  console.log("3. Exit");
  
  rl.question("Select an option (1-3): ", (choice) => {
    switch (choice) {
      case "1":
        createFile();
        break;
      case "2":
        showSystemInfo();
        break;
      case "3":
        logOperation("Application closed");
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid option. Please try again.");
        showMainMenu();
    }
  });
}

// Start the application
console.log("Welcome to the Day 3 CLI Application!");
showMainMenu();
