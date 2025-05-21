import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { allConstruct, allConstructIter } from "./allConstruct.ts";

type AllConstructInput = [target: string, words: string[]];
type AllConstructTestPair = [input: AllConstructInput, expected: string[][]];

describe("allConstruct", () => {
  it("matches expected values", () => {
    const pairs: AllConstructTestPair[] = [
      [["abcdef", ["ab", "abc", "cd", "def", "abcd"]], [["abc", "def"]]],
      [["skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]], []],
      [
        ["enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]],
        [
          ["enter", "a", "p", "ot", "ent", "p", "ot"],
          ["enter", "a", "p", "ot", "ent", "p", "o", "t"],
          ["enter", "a", "p", "o", "t", "ent", "p", "ot"],
          ["enter", "a", "p", "o", "t", "ent", "p", "o", "t"],
        ],
      ],
      [["eeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]], []],
    ];

    pairs.forEach(([input, expected]) => {
      const [target, words] = input;
      assert.deepEqual(allConstruct(target, words), expected);
      // The iterative version does not return the solutions in the same order as the recursive version.
      const iterSolutions = allConstructIter(target, words);
      expected.forEach((solution) => {
        findMatchForIn(solution, iterSolutions);
      });
    });
  });
});

// Find a match for solution in solutions.
function findMatchForIn(solution: string[], solutions: string[][]) {
  if (!solutions.some((s) => arrayContentsEqual(s, solution))) {
    throw Error(`Could not find match for ${solution} in ${solutions}`);
  }
}

function arrayContentsEqual(a1: any[], a2: any[]) {
  try {
    assert.deepEqual(a1, a2);
    return true;
  } catch (_) {
    return false;
  }
}
