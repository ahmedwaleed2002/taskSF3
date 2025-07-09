const fs = require('fs');

console.log('Creating a file...');
fs.writeFileSync('sample-file.txt', 'This is a test file created by our CLI app');
console.log('File created successfully!');
