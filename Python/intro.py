#!/usr/bin/python
# -*- coding: latin-1 -*-
import os, sys

yes = True
no = False
num = 1

if no:
    print ("yes")
elif yes and no:
    print("yes and no")
else:
    print("no")

while num <= 3:
    print("løkke siger" + str(num))
    num += 1

loop_condition = True

while loop_condition:
    print("Loop Condition keeps: " + str(loop_condition))
    loop_condition = False

for i in range (1, 3):
    print(i)

my_integers = [1, 2, 3, 4, 5]
print(my_integers[4])

my_relatives = [
    "ida",
    "torben",
    "nynne",
    "tobias"
]

print (my_relatives[3])

#eller løb igennem
for relative in my_relatives:
    print (relative)


my_relatives.append("eigil")

print(my_relatives[4])

dictionary_example = {
  "fornavn": "simon",
  "efternavn": "moe",
  "by": "vordingborg"
}

print (dictionary_example["by"])

print("Mit navn er " + dictionary_example["fornavn"] + " " + dictionary_example["efternavn"])

#føj noget mere til dictionary dynamisk

dictionary_example['alder'] = 43

print(dictionary_example)

#eller løb igennem 
for key, value in dictionary_example.items():
    print(key, value)

    

