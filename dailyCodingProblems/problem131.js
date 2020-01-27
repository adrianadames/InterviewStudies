/*
This question was asked by Snapchat.

Given the head to a singly linked list, where each node 
also has a “random” pointer that points to anywhere in 
the linked list, deep clone the list.

resource: https://stackoverflow.com/questions/184710/what-is-the-difference-between-a-deep-copy-and-a-shallow-copy

NOTE: I don't think this problem makes sense in the context of js. Makes more sense in the context of python. Going to do this
in python first and maybe in js if that makes sense. 
*/


/* 
-so you're given the head to a singly linked list
-each node has a "random" pointer that points to anywhere in the linked list. so what does that mean?

- i think it means the node has a property called random. this property is a pointer to a node in the linked list

class Node {
    constructor(value = null, randomNode = null ) {
        this.value = value;
        this.randomNode = randomNode;
    }
}



*/

