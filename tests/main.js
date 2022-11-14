import { Meteor } from "meteor/meteor";
import "/imports/ui/object/algo/generateTree.test.js";
import "/imports/ui/object/algo/sortTree.test.js";
import assert from "assert";

describe("interview-test", function () {
  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
