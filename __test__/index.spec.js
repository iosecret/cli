const loadConfig = require('../lib/utils/config');

const config = loadConfig();

console.table(config);
