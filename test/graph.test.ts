import tap from "tap";
import { Graph } from "../src/model/graph";
import { GraphNode } from "../src/model/node";

tap.test("Graph addRelationship", t => {
	t.plan(1);
	const graph = new Graph();
	const nodeA = new GraphNode("aaa");
	const nodeB = new GraphNode("baaa");
	graph.insertNode(nodeA);
	graph.insertNode(nodeB);
	graph.addRelationship(nodeA, nodeB);
	const isNodeBPresent = nodeA.getNeighbors().has(nodeB.id);
	t.ok(isNodeBPresent);
});

tap.test("Graph addRelationship mutual", t => {
	t.plan(2);
	const graph = new Graph();
	const nodeA = new GraphNode("aaa");
	const nodeB = new GraphNode("baaa");
	graph.insertNode(nodeA);
	graph.insertNode(nodeB);
	graph.addRelationship(nodeA, nodeB, { mutual: true, weight: undefined });
	graph.addRelationship(nodeA, nodeB, { mutual: true, weight: 1 });
	const isNodeBPresent = nodeA.getNeighbors().has(nodeB.id);
	const isNodeAPresent = nodeB.getNeighbors().has(nodeA.id);
	t.ok(isNodeBPresent);
	t.ok(isNodeAPresent);
});

tap.test("Graph removeRelationship", t => {
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

tap.test("Graph removeRelationship mutual", t => {
	t.plan(2);
	const graph = new Graph();
	const nodeA = new GraphNode("aaa");
	const nodeB = new GraphNode("baaa");
	graph.insertNode(nodeA);
	graph.insertNode(nodeB);
	graph.addRelationship(nodeA, nodeB);
	graph.addRelationship(nodeB, nodeA);
	t.ok([...graph.getNodes().values()][0].getNeighbors().size === 1);

	graph.removeRelationship(nodeA, nodeB, { mutual: true });

	t.ok([...graph.getNodes().values()][0].getNeighbors().size === 0);
});
