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

const preorder = (root) => {
  if (root !== null) {
    console.log(root.data);
    preorder(root.left);
    preorder(root.right);
  }
};

preorder(root);
