//Insert at given position - Singly Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const temp1 = new Node(10);
const temp2 = new Node(50);
const temp3 = new Node(70);
const temp4 = new Node(90);

const head = temp1;
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;

console.log(head);

console.log("----------------");

const insertAtPos = (head, data, pos) => {
  const newNode = new Node(data);
  if (pos === 0) {
    newNode.next = head;
    return newNode;
  }
  let temp = head;
  let count = 0;
  while (count < pos - 1 && temp !== null) {
    temp = temp.next;
    count++;
  }
  if (temp === null) {
    return head;
  }
  newNode.next = temp.next;
  temp.next = newNode;
  return head;
};

const newHead = insertAtPos(head, 45, 2);

console.log(newHead);
