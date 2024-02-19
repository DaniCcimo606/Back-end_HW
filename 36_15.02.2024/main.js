const dotenv = require('dotenv').config();
const Logger = require('./logger.js');
console.log(dotenv);
try {
    func();
} catch (error) {
    Logger('Error', error.message);
}
