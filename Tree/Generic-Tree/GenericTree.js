class GenericTree {
  constructor(data) {
    this.root = new Node(data);
  }
}

class Node {
  constructor(data) {
    this.data = data || null;
    this.children = [];
  }
}

const myTree = new GenericTree();

const values = [10, 20, -1, 30, 50, -1, 60, -1, -1, 40, -1, -1];

const stack = [];

for (let i = 0; i < values.length; i++) {
  const num = values[i];
  if (values[i] === -1) {
    stack.pop();
  } else {
    const newNode = new Node(num);
    if (stack.length === 0) {
      myTree.root = newNode;
    } else {
      const top = stack.at(-1);
      top.children.push(newNode);
    }
    stack.push(newNode);
  }
}

const display = (root) => {
  if (!root) {
    return null;
  }
  for (const child of root.children) {
    console.log(child);
  }
};

display(myTree.root);
