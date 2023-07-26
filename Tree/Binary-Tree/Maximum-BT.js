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

const getMax = (root) => {
  if (root === null) {
    return -Infinity;
  }
  const left = getMax(root.left);
  const right = getMax(root.right);
  return Math.max(root.data, left, right);
};

const maximumValue = getMax(root);

console.log(maximumValue);
