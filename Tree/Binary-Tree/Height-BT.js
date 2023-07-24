// Height of the Binary Tree

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

root.right.left = new TreeNode(40);
root.right.right = new TreeNode(60);

//console.log(root);

const heightOfTree = (root) => {
  if (root === null) {
    return 0;
  }
  const left = heightOfTree(root.left);
  const right = heightOfTree(root.right);
  return Math.max(left, right) + 1;
};

const height = heightOfTree(root);

console.log(height);
