class TreeNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left || null;
    this.right = right || null;
  }
}

const arr = [15, 25, 35, 50, 65, 75, 90];

const createTree = (arr, left, right) => {
  if (left > right) {
    return null;
  }
  const mid = Math.floor((left + right) / 2);
  left = createTree(arr, left, mid - 1);
  right = createTree(arr, mid + 1, right);
  const data = arr[mid];
  const rootNode = new TreeNode(data, left, right);
  return rootNode;
};

const root = createTree(arr, 0, arr.length - 1);

const maxValue = (root) => {
  if (root === null) {
    return -Infinity;
  }
  const left = maxValue(root.left);
  const right = maxValue(root.right);
  const max = Math.max(left, right);
  return Math.max(root.data, max);
};

const minValue = (root) => {
  if (root === null) {
    return Infinity;
  }
  const left = minValue(root.left);
  const right = minValue(root.right);
  const min = Math.min(left, right);
  return Math.min(root.data, min);
};

const leftMax = maxValue(root.left);
const rightMin = maxValue(root.right);
//console.log(leftMax, rightMin);
console.log(root);

const isBST = (root, min, max) => {
  if (root == null) {
    return true;
  }

  const parent = root.data;
  if (parent < min || parent > max) {
    return false;
  }
  const left = isBST(root.left, min, parent);
  const right = isBST(root.right, parent, max);
  return left && right;
};

const result = isBST(root, -Infinity, Infinity);
console.log(result);
