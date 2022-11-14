import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { UnSortedObjectCollection } from "/imports/db/UnSortedObjectCollection";

Meteor.methods({
  "unSortedObject.insert"(object, keyCount, depth, size, generationTime) {
    check(object, Object);
    check(keyCount, Number);
    check(depth, Number);
    check(size, Number);
    check(generationTime, Number);

    UnSortedObjectCollection.insert({
      object,
      keyCount,
      depth,
      size,
      generationTime,
      createdAt: Date.now(),
    });
  },
});
