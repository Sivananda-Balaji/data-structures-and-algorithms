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

const treeSize = (root) => {
  if (root === null) {
    return 0;
  }
  const left = treeSize(root.left);
  const right = treeSize(root.right);
  return 1 + left + right;
};

const result = treeSize(root);

console.log(result);
