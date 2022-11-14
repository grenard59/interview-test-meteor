import { Meteor } from "meteor/meteor";

// import { UnSortedObjectCollection } from "../imports/db/UnSortedObjectCollection";
// import { SortedObjectCollection } from "../imports/db/SortedObjectCollection";
import "/imports/api/unSortedObjectMethods";
import "/imports/api/sortedObjectMethods";
import "/imports/api/sortedObjectPublications";
import "/imports/api/unSortedObjectPublications";

Meteor.startup(() => {
  // UnSortedObjectCollection.rawCollection().drop();
  // SortedObjectCollection.rawCollection().drop();
});
