//Graph - BFS Implementation

class Graph {
  constructor() {
    this.nodes = new Map();
  }
  addVertex(vertex) {
    const isVertex = this.nodes.has(vertex);
    if (!isVertex) {
      this.nodes.set(vertex, []);
    }
  }
  addEdge(vertex1, vertex2) {
    const isVertex1 = this.nodes.has(vertex1);
    const isVertex2 = this.nodes.has(vertex2);
    if (isVertex1 && isVertex2) {
      this.nodes.get(vertex1).push(vertex2);
      this.nodes.get(vertex2).push(vertex1);
    }
  }
  BFSTraversal(source) {
    const queue = [source];
    const visited = new Array(this.nodes.size).fill(false);
    visited[source] = true;
    while (queue.length) {
      const current = queue.shift();
      console.log(current);
      const neighbor = this.nodes.get(current);
      for (let val of neighbor) {
        if (!visited[val]) {
          queue.push(val);
          visited[val] = true;
        }
      }
    }
  }
}

const graph = new Graph();

graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 5);
graph.addEdge(1, 3);
graph.addEdge(3, 5);
graph.addEdge(2, 4);
graph.addEdge(4, 5);

console.log(graph);
console.log("-----------");

graph.BFSTraversal(0);
