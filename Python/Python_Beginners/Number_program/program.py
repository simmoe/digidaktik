# GUESS THAT NUMBER GAME

import random
from typing import Any, Union

number = random.randint(0,200);

guess_text = input("gæt et nummer mellem 0 og 200")

print (int(guess_text) < number)