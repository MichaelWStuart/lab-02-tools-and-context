const fp = require('./lib/fp.js');

let args = process.argv.slice(2);

if (args.length === 0) {
  args = ['this', ' is', ' just', ' a', ' test'];
}

const upper = fp.map(args, n => n.toUpperCase());

console.log(upper);
