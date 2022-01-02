import { GraphNode } from "./node";

export class Graph {
  private nodes = new Map<string, GraphNode>();

  insertNode(node: GraphNode) {
    this.nodes.set(node.id, node);
    return this;
  }

  getNodes() {
    return new Map(this.nodes);
  }

  addRelationship(nodeA: GraphNode, nodeB: GraphNode) {
    nodeA.addNeighbour(nodeB);
    nodeB.addNeighbour(nodeA);
    return this;
  }

  removeRelationship(nodeA: GraphNode, nodeB: GraphNode) {
    nodeA.removeNeighbour(nodeB.id);
    nodeB.removeNeighbour(nodeA.id);
    return this;
  }
}
