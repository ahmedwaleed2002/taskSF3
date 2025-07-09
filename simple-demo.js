const os = require('os');

console.log('System Information:');
console.log('------------------');
console.log('Platform: ' + os.platform());
console.log('Free Memory: ' + Math.round(os.freemem() / (1024 * 1024)) + ' MB');
console.log('Total Memory: ' + Math.round(os.totalmem() / (1024 * 1024)) + ' MB');
console.log('CPU Cores: ' + os.cpus().length);
console.log('------------------');
