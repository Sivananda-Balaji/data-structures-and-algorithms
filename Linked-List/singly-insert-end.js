// Insert at End in Singly Linked List

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

const insertAtEnd = (head, num) => {
  const newNode = new Node(num);
  if (head === null) {
    return newNode;
  }
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = newNode;
  return head;
};

const res = insertAtEnd(head, 40);

console.log(res);
