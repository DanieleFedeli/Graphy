import { GraphNode } from "../model/node";
import { Controller } from "./controller";
import { sleepUntil } from "./sleep-until";
import { Stack } from "./stack";

export async function DFS(
	vertex: GraphNode,
	cb?: (
		err: Error | null,
		node: GraphNode,
		weight: number,
		controller: Controller
	) => void
) {
	const controller = new Controller();
	const toVisit = new Stack<{ node: GraphNode; weight: number }>();
	const visited = new Set<string>();

	toVisit.enqueue({ node: vertex, weight: 0 });
	let nodePayload: { node: GraphNode; weight: number } | undefined;
	while ((nodePayload = toVisit.dequeue())) {
		// Listen the controller instance.
		// If the controller is paused, we wait until the resume.
		// If the controller is aborted, we break the cycle.
		if (controller.isPaused()) await sleepUntil(() => !controller.isPaused());
		if (controller.isAborted()) break;

		if (visited.has(nodePayload.node.id)) continue;
		cb?.(null, nodePayload.node, nodePayload.weight, controller);
		visited.add(nodePayload.node.id);
		const neighbors = nodePayload.node.getNeighbors().values();
		for (const neighbourPayload of neighbors) {
			toVisit.enqueue(neighbourPayload);
		}
	}
}
