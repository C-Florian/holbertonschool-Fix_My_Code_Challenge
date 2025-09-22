#!/usr/bin/python3
""" FizzBuzz
Prints numbers from 1 to n with Fizz, Buzz and FizzBuzz replacements
"""

import sys


def fizzbuzz(n):
    """Prints the FizzBuzz sequence up to n"""
    for i in range(1, n + 1):
        if i % 15 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: ./0-fizzbuzz.py <number>")
        sys.exit(1)
    try:
        number = int(sys.argv[1])
    except ValueError:
        print("Input must be an integer")
        sys.exit(1)

    fizzbuzz(number)
