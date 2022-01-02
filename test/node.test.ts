import tap from "tap";
import { GraphNode } from "../src/model/node";

tap.test("GraphNode addNeighbour", (t) => {
  t.plan(1);

  const node = new GraphNode("data");

  t.throws(() => node.addNeighbour(node));
});
