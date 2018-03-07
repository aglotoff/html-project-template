import minimist from 'minimist';

const knownOptions = {
    string: 'env',
    default: { 
        env: process.env.NODE_ENV || 'develop'
    }
};

const options = minimist(process.argv.slice(2), knownOptions);

export default options;