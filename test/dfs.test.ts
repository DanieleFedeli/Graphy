import tap from "tap";
import { GraphNode } from "../src/model/node";
import { DFS } from "../src/utils/dfs";
import { buildGraph } from "./fixture/graph.build";

tap.only("Right order", async t => {
	t.plan(1);
	const graph = buildGraph();

	const correctVisited = [0, 2, 5, 1, 4, 3];
	const visited: number[] = [];
	const cb = (_err: any, node: GraphNode) => {
		visited.push(node.data as number);
	};

	const node = [...graph.getNodes().values()][0];

	await DFS(node, cb);

	t.same(visited, correctVisited);
});

tap.test("DFS With no callback", async t => {
	t.plan(1);

	const graph = buildGraph();

	const node = [...graph.getNodes().values()][0];
	t.resolves(DFS(node));
});
