#!/usr/bin/node
/*
  Print a square with the character '#'
  The size of the square is the first argument of the program.
*/

const size = parseInt(process.argv[2], 10);

if (!Number.isNaN(size)) {
  const line = '#'.repeat(size);
  for (let i = 0; i < size; i++) {
    console.log(line);
  }
}
