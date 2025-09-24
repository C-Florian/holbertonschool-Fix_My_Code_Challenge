#!/usr/bin/node
/**
 * Print a square with the character "X"
 * The size of the square is the first command line argument
 */

const size = parseInt(process.argv[2], 10);

if (!isNaN(size)) {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}