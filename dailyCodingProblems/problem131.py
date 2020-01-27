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

list1 = LinkedList()
list1.add_to_tail(5)
list1.add_to_tail(7)
list1.add_to_tail(8)
list1.add_to_tail(17)

print(list1.head.value)
print(list1.contains(117))
print(list1.get_max())