import { expect } from "chai";
import { sortTree } from "./sortTree";

describe("sortTree", function () {
  it("should sort tree", function () {
    const sortedTree = sortTree({
      b: 2,
      a: 1,
    });
    expect(sortedTree).to.deep.equal({
      a: 1,
      b: 2,
    });
  });
  it("should sort deep tree", function () {
    const sortedTree = sortTree({
      b: 2,
      c: {
        d: 4,
        a: 1,
        b: 2,
        c: 3,
      },
      a: 1,
    });
    expect(sortedTree).to.deep.equal({
      a: 1,
      b: 2,
      c: {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      },
    });
  });
});
