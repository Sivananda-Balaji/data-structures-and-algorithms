//Level order traversal in binary tree

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

root.right.right = new TreeNode(60);

root.right.right.left = new TreeNode(70);
root.right.right.right = new TreeNode(80);

//console.log(root.right);

const printLevelNodes = (root) => {
  if (!root) {
    return;
  }

  const queue = [root];

  while (queue.length > 0) {
    const currentLevelNodes = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.pop();
      currentLevelNodes.push(node.data);

      if (node.left) {
        queue.unshift(node.left);
      }
      if (node.right) {
        queue.unshift(node.right);
      }
    }

    console.log(currentLevelNodes.join(", "));
  }
};

printLevelNodes(root);
