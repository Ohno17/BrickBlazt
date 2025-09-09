import os
import sys

# Turn raw_words.txt into valid JS file

words = set()

with open(os.path.join(sys.path[0], "raw_words.txt"), "r", encoding='utf-8') as raw:
    for line in raw.readlines():
        if line[0] == '#':
            continue
        if not line.isascii():
            continue
        if not line.lower()[:-1].isalpha():
            continue
        if len(line) == 1 and 'a' not in line:
            continue

        words.add(line.lower()[:-1])

with open(os.path.join(sys.path[0], "new_words.js"), "w", encoding='utf-8') as output:
        output.write("const words = [\n")
        for word in words:
            output.write("\t\"" + word + "\",\n")
        output.write("]")
