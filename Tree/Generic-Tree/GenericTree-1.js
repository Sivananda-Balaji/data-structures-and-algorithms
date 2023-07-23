// Generic Tree Creation

class GenericTree {
  constructor(data) {
    this.root = new Node(data);
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.middle = null;
    this.right = null;
  }
}

const myTree = new GenericTree(50);

const leftNode = new Node(30);
const middleNode = new Node(60);
const rightNode = new Node(80);

myTree.root.left = leftNode;
myTree.root.middle = middleNode;
myTree.root.right = rightNode;

console.log(myTree.root);
