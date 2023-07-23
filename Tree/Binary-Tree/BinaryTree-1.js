//Creation of Binary Tree

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

const myTree = new BinaryTree(40);

const leftNode = new Node(30);
const rightNode = new Node(60);

myTree.root.left = leftNode;
myTree.root.right = rightNode;
console.log(myTree.root);
