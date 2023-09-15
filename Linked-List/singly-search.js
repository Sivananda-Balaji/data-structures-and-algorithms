//Search in singly linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const temp1 = new Node(10);
const temp2 = new Node(5);
const temp3 = new Node(20);
const temp4 = new Node(35);

const head = temp1;
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;

const search = (head, key) => {
  if (head === null) {
    return head;
  }
  let temp = head;
  let count = 0;
  while (temp !== null) {
    if (temp.data === key) {
      return count;
    }
    temp = temp.next;
    count++;
  }
  return -1;
};

const result = search(head, 20);
console.log(result);
