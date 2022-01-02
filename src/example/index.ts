import { Graph } from "../model/graph";
import { GraphNode } from "../model/node";
const graph = new Graph();

const values = ["Value 1", "Value 2", "Value 3"];
const nodeA = new GraphNode(values[0]);
const nodeB = new GraphNode(values[1]);
const nodeC = new GraphNode(values[2]);
const nodeD = new GraphNode(values[3]);

graph.insertNode(nodeA);
graph.insertNode(nodeB);
graph.insertNode(nodeC);
graph.insertNode(nodeD);

graph.addRelationship(nodeA, nodeB);
graph.addRelationship(nodeC, nodeB);

console.log(graph.getNodes());
