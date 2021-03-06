import crypto from "crypto";

export class GraphNode<T = unknown> {
	private neighbors: Map<string, { node: GraphNode<T>; weight: number }>;
	data: T;
	id: string;

	constructor(data: T) {
		this.neighbors = new Map();
		this.data = data;
		this.id = crypto.randomBytes(16).toString("hex");
	}

	addNeighbour(node: GraphNode<T>, weight = 1): number {
		if (node.id === this.id) throw Error(`${this.id} is used by this instance`);

		this.neighbors.set(node.id, { node, weight });
		return this.neighbors.size;
	}

	removeNeighbour(id: string) {
		return this.neighbors.delete(id);
	}

	getNeighbors() {
		return new Map(this.neighbors);
	}
}
