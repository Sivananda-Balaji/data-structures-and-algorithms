//Recursion Traversal of Singly Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const temp1 = new Node(10);
const temp2 = new Node(20);
const temp3 = new Node(30);
const temp4 = new Node(40);

const head = temp1;
head.next = temp2;
temp2.next = temp3;
temp3.next = temp4;

const traversal = (head) => {
  if (head === null) {
    return;
  }
  console.log(head.data);
  traversal(head.next);
};

traversal(head);
