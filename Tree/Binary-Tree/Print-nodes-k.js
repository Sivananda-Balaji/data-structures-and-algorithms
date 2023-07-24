// Print K Nodes in the tree

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(10);

root.left = new TreeNode(20);
root.right = new TreeNode(30);

root.left.left = new TreeNode(40);
root.left.right = new TreeNode(50);

root.right.right = new TreeNode(70);
root.right.right.right = new TreeNode(80);

//console.log(root.right);

const printNodes = (root, k) => {
  if (root === null) {
    return;
  }
  if (k == 0) {
    console.log(root.data);
  } else {
    printNodes(root.left, k - 1);
    printNodes(root.right, k - 1);
  }
};

printNodes(root, 2);
