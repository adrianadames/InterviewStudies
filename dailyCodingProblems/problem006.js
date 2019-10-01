/*
This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of
each node holding next and prev fields, it holds a field named both, which is
an XOR of the next node and the previous node. Implement an XOR linked list;
it has an add(element) which adds the element to the end, and a get(index) which
returns the node at index.

If using a language that has no pointers (such as Python), you can assume you
have access to get_pointer and dereference_pointer functions that converts 
between nodes and memory addresses.
*/

// Exclusive disjunction essentially means 'either one, but not both nor none'. 
// In other words, the statement is true if and only if one is true and the other
// is false. For example, if two horses are racing, then one of the two will win
// the race, but not both of them. 