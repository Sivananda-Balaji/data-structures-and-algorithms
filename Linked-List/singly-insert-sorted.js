//Sorted Insert in a Singly Linked List in Javascript

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

temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;
const head = temp1;

const insertCorrect = (head, val) => {
  const newNode = new Node(val);
  if (head === null) {
    return newNode;
  }
  if (val < head.data) {
    newNode.next = head;
    head = newNode;
    return head;
  }
  let temp = head;
  while (temp.next !== null && temp.next.data < newNode.data) {
    temp = temp.next;
  }
  newNode.next = temp.next;
  temp.next = newNode;
  return head;
};

const result = insertCorrect(head, 45);

console.log(result);
