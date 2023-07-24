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

const binaryTree = new BinaryTree(10);

const root = binaryTree.root;

root.left = new Node(20);
root.right = new Node(30);

root.right.left = new Node(40);
root.right.right = new Node(60);

//console.log(root);

const inorder = (root) => {
  if (root !== null) {
    inorder(root.left);
    console.log(root.data);
    inorder(root.right);
  }
};

inorder(root);
