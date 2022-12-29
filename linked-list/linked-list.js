/* 
create a linked list that has A B C D nodes 
*/
console.log('create a linked list that has A B C D node' );

/*
Each node of link list has value and next reference. 
*/

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// Creating each linked list node
const a = new Node('A');
console.log(a);
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// linking the nodes and D already points to null
a.next = b;
b.next = c;
c.next = d;

// print the linked list node

const printLinkedList = (head) => {
    let current = head;

    while(current != null){
        console.log(current.val);
        //console.log(current);
        current = current.next;
    }
}

printLinkedList(a);