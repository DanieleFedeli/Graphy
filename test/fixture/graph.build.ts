import { Graph } from "../../src/model/graph";
import { GraphNode } from "../../src/model/node";

const cardinality = 6;

export function buildGraph(): Graph {
	const graph = new Graph();
	const nodes = Array.from({ length: cardinality }, (_, i) => new GraphNode(i));

	nodes.forEach(node => graph.insertNode(node));

	graph.addRelationship(nodes[0], nodes[1], { mutual: true });
	graph.addRelationship(nodes[0], nodes[2], { mutual: true });
	graph.addRelationship(nodes[3], nodes[1], { mutual: true });
	graph.addRelationship(nodes[4], nodes[1], { mutual: true });
	graph.addRelationship(nodes[5], nodes[2], { mutual: true });
	graph.addRelationship(nodes[5], nodes[1], { mutual: true });

	return graph;
}
