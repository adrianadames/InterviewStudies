"""
This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last
element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) 
returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair

Implement car and cdr.

"""

def cons(a,b):
    def pair(f):
        return f(a,b)
    return pair

print(cons(3,4))

# You have a function cons(a,b) that returns a function pair
# pair() is defined as follows: 
#   def pair(f):
#       return f(a,b)
#
# We need to come up with a function car, such that when you 
# pass in pair to car, the function passes a function to pair
# such that it returns the first var passed to cons. 
#
# What function can we pass into car so that it will return the 
# first var passed to cons. 
#
# we want f(a,b) to return a: lambda a,b: a
#
# so in the car function we need to pass lambda a,b: a into pair

def car(f):
    return f(lambda a,b:a)

def cdr(f):
    return f(lambda a,b:b)

print(car(cons(3,4)))
print(cdr(cons(3,4)))
