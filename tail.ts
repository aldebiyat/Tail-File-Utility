import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const numberOfLines = argv.n || 10;
const files = argv._;

// Your solution starts here
