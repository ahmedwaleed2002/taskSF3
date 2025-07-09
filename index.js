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
