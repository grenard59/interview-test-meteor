import { Meteor } from "meteor/meteor";
import { UnSortedObjectCollection } from "/imports/db/UnSortedObjectCollection";

Meteor.publish("unSortedObject", function publishUnSortedObject() {
  return UnSortedObjectCollection.find();
});
