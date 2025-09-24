#!/usr/bin/node
/**
 * Print a square with the character "X"
 * The size is the first CLI argument
 */

const size = parseInt(process.argv[2], 10);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
