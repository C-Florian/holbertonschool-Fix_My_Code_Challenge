#!/usr/bin/node
/**
 * Print a square with the character '#'
 * The size of the square is given as the first command line argument
 */

if (process.argv.length !== 3) {
  console.log('Usage: ./1-print_square.js <size>');
  process.exit(1);
}

const size = parseInt(process.argv[2], 10); // ✅ base 10 obligatoire

if (isNaN(size)) {
  console.log('Size must be a number');
  process.exit(1);
}

for (let i = 0; i < size; i++) {
  console.log('#'.repeat(size));
}
