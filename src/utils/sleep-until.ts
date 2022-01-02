import { promisify } from "util";

const sleep = promisify(setTimeout);

export async function sleepUntil(predicate: () => boolean) {
  while (!predicate()) {
    await sleep(500);
  }

  return;
}
