import tap from "tap";
import { GraphNode } from "../src/model/node";
import { BFS } from "../src/utils/bfs";
import { buildGraph } from "./fixture/graph.build";

tap.test("BFS testing the right order", async t => {
	t.plan(1);

	const graph = buildGraph();

	const visited: number[] = [];
	const correctVisited = [0, 1, 2, 3, 4, 5];
	const cb = (_err: any, node: GraphNode) => {
		visited.push(node.data as number);
	};

	const node = [...graph.getNodes().values()][0];
	await BFS(node, cb);

	t.same(visited, correctVisited);
});

tap.test("BFS With no callback", async t => {
	t.plan(1);

	const graph = buildGraph();

	const node = [...graph.getNodes().values()][0];
	t.resolves(BFS(node));
});
