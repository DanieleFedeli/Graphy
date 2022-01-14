import { promisify } from "util";
import { Graph } from "../../src/index";
import { GraphNode } from "../model/node";
import { BFS } from "../utils/bfs";

const sleep = promisify(setTimeout);
const graph = new Graph();

const nodes = Array.from({ length: 10 }, (_, i) => new GraphNode(i));
nodes.forEach((node) => graph.insertNode(node));

// Create a random graph
for (let i = 0; i < nodes.length; i++) {
  const node = nodes[i];
  const neighbours = nodes.slice(0, Math.floor(Math.random() * nodes.length));
  neighbours.forEach((neighbour) => {
    if (neighbour.id !== node.id) node.addNeighbour(neighbour);
  });
}

BFS(nodes[0], async (err, node, weight, controller) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Found a node with data: ${node.data}`);
  if (node.data === 5) {
    controller.pause();
    console.log("Pausing BFS...");
    await sleep(6000);
    console.log("Resuming BFS...");
    controller.resume();
  }
});
