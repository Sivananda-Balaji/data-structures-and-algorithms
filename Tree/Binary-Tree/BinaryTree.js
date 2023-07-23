class BinaryTree {
  constructor(data) {
    this.root = new Node(data);
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const arr = [
  50,
  25,
  15,
  null,
  null,
  35,
  30,
  null,
  null,
  null,
  75,
  60,
  null,
  70,
  null,
  null,
  90,
  null,
  null,
];
const binaryTree = new BinaryTree(arr[0]);

class Pairs {
  constructor(node, value) {
    this.node = node;
    this.value = value;
  }
}

const pairs = new Pairs(binaryTree.root, 1);

const stack = [];

stack.push(pairs);
let index = 1;

while (stack.length) {
  const topPairs = stack.at(-1);
  if (topPairs.value === 1) {
    if (arr[index] !== null) {
      const leftNode = new Node(arr[index]);
      topPairs.node.left = leftNode;
      const newPairs = new Pairs(leftNode, 1);
      stack.push(newPairs);
    }
    index++;
    topPairs.value++;
  } else if (topPairs.value === 2) {
    if (arr[index] !== null) {
      const rightNode = new Node(arr[index]);
      topPairs.node.right = rightNode;
      const newPairs = new Pairs(rightNode, 1);
      stack.push(newPairs);
    }
    index++;
    topPairs.value++;
  } else {
    stack.pop();
  }
}
console.log(binaryTree.root);
