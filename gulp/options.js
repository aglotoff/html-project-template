const minimist = require('minimist');

const knownOptions = {
    string: 'env',
    default: { 
        env: process.env.NODE_ENV || 'develop'
    }
};

module.exports = minimist(process.argv.slice(2), knownOptions);