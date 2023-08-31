// Graph Implementation (undirected)

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
  getVertex(vertex) {
    const Vertex = this.nodes.get(vertex);
    if (Vertex) {
      return Vertex;
    }
    return -1;
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

const vertex = graph.getVertex(4);
console.log(vertex);
console.log("------");

console.log(graph);
console.log("------");

graph.printGraph();
