import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { SortedObjectCollection } from "/imports/db/SortedObjectCollection";

Meteor.methods({
  "SortedObject.insert"(objectId, sortDuration) {
    check(objectId, String);
    check(sortDuration, Number);

    SortedObjectCollection.insert({
      objectId,
      sortDuration,
    });
  },
});
