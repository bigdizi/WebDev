import math
import os
import random
import re
import sys

def solve(s):
    a = s.split(" ")
    for i in range(0, len(a)):
        a[i] = a[i].capitalize()

    return " ".join(a)


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = solve(s)

    fptr.write(result + '\n')

    fptr.close()