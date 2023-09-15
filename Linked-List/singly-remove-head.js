// Remove Head in Singly Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const temp1 = new Node(10);
const temp2 = new Node(20);
const temp3 = new Node(30);

const head = temp1;
temp1.next = temp2;
temp2.next = temp3;

console.log(head);

console.log("-----------");
const removeHead = (head) => {
  if (head !== null) {
    return head.next;
  }
  return head;
};

const res = removeHead(head);

console.log(res);
