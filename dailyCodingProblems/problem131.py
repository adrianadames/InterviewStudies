""" 
This question was asked by Snapchat.

Given the head to a singly linked list, where each node 
also has a “random” pointer that points to anywhere in 
the linked list, deep clone the list.

resource: https://stackoverflow.com/questions/184710/what-is-the-difference-between-a-deep-copy-and-a-shallow-copy
"""


class Node:
  def __init__(self, value=None, next_node=None, random_node = None):
    self.value = value
    self.next_node = next_node
    self.random_node = random_node

  def get_value(self):
    return self.value

  def get_next(self):
    return self.next_node

  def set_next(self, new_next):
    self.next_node = new_next
  
  def set_random(self, new_random_node):
      self.random_node = new_random_node

class LinkedList:
  def __init__(self):
    self.head = None
    self.tail = None

  def add_to_tail(self, value):
    #By default, the next_value argument in Node class is set to None. 
    newNode = Node(value) 
    if self.head == None or self.tail == None:
      self.head = newNode
      self.tail = newNode
    else:
      self.tail.set_next(newNode)
      self.tail = newNode

  def remove_head(self):
    if self.head is None:
      return None
    else:
      oldHead= self.head
      self.head = oldHead.get_next()
      return oldHead.value

  def contains(self,value):
    currentNode = self.head
    foundNode = False
    while currentNode and foundNode is False:
      if currentNode.get_value() == value:
        foundNode = True
        return True
      else: 
        currentNode = currentNode.get_next()
    if currentNode == None:
      return False

  def get_max(self):
    currentNode = self.head
    maxValue = currentNode.value
    if currentNode == None:
      return None
    if currentNode.get_next() == None:
      maxValue = currentNode.value
    while currentNode is not None:
      if currentNode.value > maxValue:
        maxValue = currentNode.value
      else:
        currentNode = currentNode.get_next()
    return maxValue

# list1 = LinkedList()
# list1.add_to_tail(5)
# list1.add_to_tail(7)
# list1.add_to_tail(8)
# list1.add_to_tail(17)

# print(list1.head.value)
# print(list1.contains(117))
# print(list1.get_max())


# class Node:
#   def __init__(self, value=None, next_node=None, random_node = None):
#     self.value = value
#     self.next_node = next_node
#     self.random_node = random_node

#   def get_value(self):
#     return self.value

#   def get_next(self):
#     return self.next_node

#   def set_next(self, new_next):
#     self.next_node = new_next
  
#   def set_random(self, new_random_node):
#       self.random_node = new_random_node

n1 = Node()
n2 = Node()
n3 = Node()
n4 = Node()

n1.value = 1
n2.value = 2
n3.value = 3
n4.value = 4

n1.set_next(n2)
n2.set_next(n3)
n3.set_next(n4)
# n4.set_next(None)

n1.set_random(n4)
n2.set_random(n1)
n3.set_random(n1)
n4.set_random(n3)



# print(n1.random_node.value)

l1 = LinkedList()
l1.head = n1

print(l1.head.next_node.value)

import copy

l1_shallow = copy.copy(l1)
l1_deep = copy.deepcopy(l1)

# print(l1)
# print(l1_shallow)
# print(l1_deep)

print(l1.head)
print(l1_shallow.head)
print(l1_deep.head)

print(l1.head.random_node) 
print(l1_shallow.head.random_node)
print(l1_deep.head.random_node)

# now, for the l1_deep.head random_node, does it reference the same place in memory that was allocated to the l1_deep n4 node? let's check. 
print(l1_deep.head.next_node.next_node.next_node)
# yes it does

# now, what about n2 and n3? do they each reference the same random_node pointer (i.e. n1)?
print(l1_deep.head)
print(l1_deep.head.next_node.random_node)
print(l1_deep.head.next_node.next_node.random_node)
# yes they do



#now, in this problem we're only given the head of the list. how do we make a deep copy of the list only given the head?

"""
We need to keep track of which nodes have already been deeply copied. 

let's say we first create a deep copy of n1, where 
    n1.next_node = n2
    n1.random_node = n4

we will get: 
n1_dc = copy.deepcopy(n1)

then 
    n1_dc.next_node = reference to deepcopy of n2
    n1_dc.random_node = reference to deepcopy of n4

at this point, we will want to keep track of the references to reference of the
deepcopies of n2 and n4 that were made. how do we do that?

-create a dictionary and populate it with the values of the nodes by looking at the .next for each node

l1_dc_next_nodes = {
    n1_dc:n1_dc
    n2_dc:n1_dc.next_node
    n3_dc:n2_dc.next_node
    n4_dc:n3_dc.next_node
} 

l1_dc_random_nodes = {
    n1_dc: 
}


"""