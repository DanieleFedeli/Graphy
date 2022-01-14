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

	addRelationship(
		nodeA: GraphNode,
		nodeB: GraphNode,
		opts?: { mutual?: boolean; weight?: number }
	) {
		const mutual = opts?.mutual || false;
		const weight = opts?.weight || 1;

		nodeA.addNeighbour(nodeB, weight);
		if (mutual) {
			nodeB.addNeighbour(nodeA, weight);
		}
		return this;
	}

	removeRelationship(
		nodeA: GraphNode,
		nodeB: GraphNode,
		opts?: { mutual?: boolean }
	) {
		const mutual = opts?.mutual || false;

		nodeA.removeNeighbour(nodeB.id);
		if (mutual) nodeB.removeNeighbour(nodeA.id);
		return this;
	}
}
