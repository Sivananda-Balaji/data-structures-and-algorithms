class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const createBinaryTree = (arr) => {
  const root = new TreeNode(arr[0]);
  const queue = [root];
  for (let i = 1; i < arr.length - 1; i++) {
    const currentNode = queue.pop();
    if (arr[i] !== -1) {
      currentNode.left = new TreeNode(arr[i]);
      queue.unshift(currentNode.left);
    }
    i++;
    if (i < arr.length && arr[i] !== -1) {
      currentNode.right = new TreeNode(arr[i]);
      queue.unshift(currentNode.right);
    }
  }
  return root;
};

const arr = [1, 2, 3, 4, -1, 5, -1];
const root = createBinaryTree(arr);
//console.log(root);

const preOrder = (root) => {
  if (root === null) {
    return;
  }
  console.log(root.data);
  preOrder(root.left);
  preOrder(root.right);
};

preOrder(root);

console.log("-----");
const inOrder = (root) => {
  if (root === null) {
    return;
  }
  inOrder(root.left);
  console.log(root.data);
  inOrder(root.right);
};

inOrder(root);

console.log("-----");

const postOrder = (root) => {
  if (root === null) {
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.data);
};

postOrder(root);
