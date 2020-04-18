"""
Character Counter
❖ Write a function that accepts two arguments – a string and an single character
❖ Have your function search the string for all occurrences of that character
❖ Return the number of times the character was found in the supplied string
"""

"""
Vowel Counter
❖ Write a new function that counts the #’s of vowels in a string (A,E,I,O,U)
❖ Use your character counter function to implement your new function
"""

def charCounter(string, character):
    strArr = [char for char in string]
    count = 0

    for char in strArr:
        if char == character:
            count += 1
    
    return count

charCounter('hello', 'l')

def vowelCounter(string):
    vowelCount = 0
    vowels = ['a', 'A', 'e', 'E', 'i','I', 'o','O', 'u', 'U']

    for vowel in vowels:
        vowelCount += charCounter(string, vowel)
    
    return vowelCount

print(vowelCounter('hellooooOo'))
