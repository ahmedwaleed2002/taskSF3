const fs = require('fs');

console.log('Logging an operation...');
const timestamp = new Date().toISOString();
fs.appendFileSync('demo-logs.txt', timestamp + ': Demo operation performed\n');
console.log('Operation logged successfully!');
