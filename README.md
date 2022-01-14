# Graphy

![CI workflow](https://github.com/DanieleFedeli/graphy/workflows/CI%20workflow/badge.svg)

Small library for node.js used to represent a Graph in memory.

## Install
```
npm i graphy
```

## Usage
Require\Import `graphy` and start using its instances/functions
```ts
import { promisify } from "util";
import { Graph, GraphNode, BFS } from "graphy";

const sleep = promisify(setTimeout);
const graph = new Graph();

const nodes = Array.from({ length: 10 }, (_, i) => new GraphNode(i));
nodes.forEach(node => graph.insertNode(node));

// Create a random graph
for (let i = 0; i < nodes.length; i++) {
	const node = nodes[i];
	const neighbours = nodes.slice(0, Math.floor(Math.random() * nodes.length));
	neighbours.forEach(neighbour => {
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


```

## License

Licensed under [MIT](./LICENSE).<br/>