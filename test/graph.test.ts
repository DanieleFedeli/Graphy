import tap from "tap";
import { Graph } from "../src/model/graph";
import { GraphNode } from "../src/model/node";

tap.test("Graph addRelationship", (t) => {
  t.plan(2);
  const graph = new Graph();
  const nodeA = new GraphNode("aaa");
  const nodeB = new GraphNode("baaa");
  graph.insertNode(nodeA);
  graph.insertNode(nodeB);
  graph.addRelationship(nodeA, nodeB);
  const isNodeBPresent = nodeA.getNeighbors().has(nodeB.id);
  const isNodeAPresent = nodeB.getNeighbors().has(nodeA.id);
  t.ok(isNodeAPresent);
  t.ok(isNodeBPresent);
});

tap.test("Graph removeRelationship", (t) => {
  t.plan(2);
  const graph = new Graph();
  const nodeA = new GraphNode("aaa");
  const nodeB = new GraphNode("baaa");
  graph.insertNode(nodeA);
  graph.insertNode(nodeB);
  graph.addRelationship(nodeA, nodeB);
  t.ok([...graph.getNodes().values()][0].getNeighbors().size === 1);

  graph.removeRelationship(nodeA, nodeB);

  t.ok([...graph.getNodes().values()][0].getNeighbors().size === 0);
});
