let minimist = require('minimist');

let knownOptions = {
    string: 'env',
    default: { 
        env: process.env.NODE_ENV || 'develop'
    }
};

module.exports = minimist(process.argv.slice(2), knownOptions);