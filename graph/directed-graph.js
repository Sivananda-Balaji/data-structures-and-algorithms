// Graph Implementation (directed)

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
  addEdge(fromNode, toNode) {
    const vertex1 = this.nodes.has(fromNode);
    const vertex2 = this.nodes.has(toNode);
    if (vertex1 && vertex2) {
      this.nodes.get(fromNode).push(toNode);
    }
  }
  getNeighbors(vertex) {
    return this.nodes.get(vertex) || [];
  }
  printGraph() {
    for (let [key, value] of this.nodes) {
      console.log(`${key} -> ${value}`);
    }
  }
}

const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);

graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 1);

console.log(graph);
console.log("----------");

const vertex = graph.getNeighbors(4);

console.log(vertex);
console.log("----------");

graph.printGraph();
