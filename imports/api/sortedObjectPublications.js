import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";

import { SortedObjectCollection } from "/imports/db/SortedObjectCollection";

Meteor.publish("sortedObject", function publishSortedObject(id) {
  check(id, String);
  return SortedObjectCollection.find({ objectId: id });
});
