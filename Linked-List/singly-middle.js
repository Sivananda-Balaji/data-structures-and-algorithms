//Middle of linked list in Javascript

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = new Node(10);
const temp1 = new Node(20);
const temp2 = new Node(30);
const temp3 = new Node(40);
const temp4 = new Node(50);
const temp5 = new Node(60);

head.next = temp1;
temp1.next = temp2;
temp2.next = temp3;
temp3.next = temp4;
temp4.next = temp5;

const middleNode = (head) => {
  if (head === null) {
    return head;
  }
  let slow = head;
  let fast = head;
  while (fast !== null || (fast && fast.next !== null)) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
};

const result = middleNode(head);

console.log(result);

/**
 * const middleNode = (head) => {
  if (head === null) {
    return head;
  }
  let count = 0;
  let curr = head;
  while (curr !== null) {
    curr = curr.next;
    count++;
  }
  const middle = Math.floor(count / 2);
  curr = head;
  for (let i = 0; i < middle; i++) {
    curr = curr.next;
  }
  return curr.data;
};
 */
