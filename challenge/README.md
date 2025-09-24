# Fix My Code Challenge

This project is part of the Holberton School curriculum.  
It contains small pieces of code in different languages (Python, JavaScript, Ruby, C) that were intentionally buggy and had to be fixed.

---

##  Project Structure

```
challenge/
├── 0-fizzbuzz.py              # Python - FizzBuzz implementation
├── 1-print_square.js          # JavaScript - Print a square of '#' characters
├── 2-sort.rb                  # Ruby - Sort integers from command line args
├── 3-user.py                  # Python - User class with password hashing
├── 4-delete_dnodeint/         # C - Doubly linked list
│   ├── add_dnodeint_end.c
│   ├── delete_dnodeint_at_index.c
│   ├── free_dlistint.c
│   ├── lists.h
│   ├── main.c
│   ├── print_dlistint.c
└── README.md
```

---

##  Python (FizzBuzz & User)

### Run FizzBuzz
```bash
python3 challenge/0-fizzbuzz.py 15
```

Expected output (excerpt):
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
```

### Run User class test
```bash
python3 challenge/3-user.py
```

---

##  JavaScript (Print Square)

### Run
```bash
node challenge/1-print_square.js 4
```

Expected output:
```
####
####
####
####
```

---

##  Ruby (Sort)

### Run
```bash
ruby challenge/2-sort.rb 12 41 2 C 9 -9 31 fun -1 32
```

Expected output:
```
-9
-1
2
9
12
31
32
41
```

---

##  C (Doubly Linked List)

### Compile
```bash
gcc -Wall -Wextra -Werror -pedantic \
    challenge/4-delete_dnodeint/main.c \
    challenge/4-delete_dnodeint/add_dnodeint_end.c \
    challenge/4-delete_dnodeint/delete_dnodeint_at_index.c \
    challenge/4-delete_dnodeint/free_dlistint.c \
    challenge/4-delete_dnodeint/print_dlistint.c \
    -o challenge/4-delete_dnodeint/dlist
```

### Run
```bash
./challenge/4-delete_dnodeint/dlist
```

Expected behavior: the list prints correctly after each deletion.

---

##  Requirements

- Ubuntu 20.04 LTS  
- Python 3.8+  
- Node.js 14+  
- Ruby 2.7+  
- GCC 9.x  

---

## Author

- Florian Chéreau - [GitHub: C-Florian](https://github.com/C-Florian)
