// Simple Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const temp1 = new Node(10);
const temp2 = new Node(20);
const temp3 = new Node(30);

temp1.next = temp2;
temp2.next = temp3;
const head = temp1;

console.log(head);

console.log("-----------");
//Alternate Way

const newHead = new Node(1);
newHead.next = new Node(2);
newHead.next.next = new Node(3);

console.log(newHead);
