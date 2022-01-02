import { GraphNode } from "../model/node";
import { Controller } from "./controller";
import { sleepUntil } from "./sleep-until";
import { Stack } from "./stack";

export async function DFS(
  vertex: GraphNode,
  cb?: (err: Error | null, node: GraphNode, controller: Controller) => void
) {
  const controller = new Controller();
  const toVisit = new Stack<GraphNode>();
  const visited = new Set<string>();

  toVisit.enqueue(vertex);
  let node;
  while ((node = toVisit.dequeue())) {
    // Listen the controller instance.
    // If the controller is paused, we wait until the resume.
    // If the controller is aborted, we break the cycle.
    if (controller.isPaused()) await sleepUntil(() => !controller.isPaused());
    if (controller.isAborted()) break;

    if (visited.has(node.id)) continue;
    cb?.(null, node, controller);
    visited.add(node.id);
    const neighbors = node.getNeighbors().values();
    for (const neighbour of neighbors) {
      toVisit.enqueue(neighbour);
    }
  }
}
