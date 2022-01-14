import tap from "tap";
import { BFS } from "../src/utils/bfs";
import { Controller } from "../src/utils/controller";
import { DFS } from "../src/utils/dfs";
import { buildGraph } from "./fixture/graph.build";

tap.test("BFS with controller", async t => {
	t.plan(1);

	const graph = buildGraph();
	let current = 0;

	const cb = async (
		_err: any,
		_node: any,
		_weight: number,
		controller: Controller
	) => {
		controller.pause();
		await Promise.resolve(current++);
		if (current === 1) controller.abort();
		controller.resume();
	};

	const node = [...graph.getNodes().values()][0];
	await BFS(node, cb);

	t.match(current, 1);
});

tap.test("DFS with controller", async t => {
	t.plan(1);

	const graph = buildGraph();
	let current = 0;

	const cb = async (
		_err: any,
		_node: any,
		weight: number,
		controller: Controller
	) => {
		controller.pause();
		await Promise.resolve(current++);
		if (current === 1) controller.abort();
		controller.resume();
	};

	const node = [...graph.getNodes().values()][0];
	await DFS(node, cb);

	t.match(current, 1);
});
