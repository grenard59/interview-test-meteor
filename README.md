# Coding exercise

The objective of this exercise is not to deliver a perfect solution, but rather to see what you’re
able to build in a short amount of time without perfectly knowing all of the technologies
involved. We’re looking for people who can quickly create a prototype that works.

The result will be used as a basis for the follow-up interview where you will be asked to code
something more on top of it.

**Goal** : Build a meteor app that sorts large objects
**Deliverable:** Please submit this exercise in a privategit repository online, and send an invitation
when youʼre done.

## Specs

You will be creating a meteor app that performs 3 basic tasks:

1. Creates large randomly generated objects and stores them in the DB
2. Receives objects and sorts their keys, returning the duration of the sort
3. A frontend to display the stats and allows the user to configure how it works

## Requirements


- The DB will store the generated objects, and it will store the sort timings. Your DB will have 2 collections, unsortedObjects , and sortStats
  - The unsortedObjects should have 5 keys:
    - _id : String, the mongo id
    - object : Object, the object you generated
    - keyCount : Number, the amount of keys at the root ofthe object
    -  depth : Number, the maxDepth used to generate the object
    -  size : Number, the size in bytes of your object, usethe npm library object-sizeof to determine the size
    -  generationTime : Number, the time it took to generatethe object in milliseconds
  - The sortStats should have 3 keys:
    - _id : String, the mongo id
    - objectId : String, the _id of the object that was sorted
    - sortDuration : Number, the time it took to sort theobject in ms
- You will have to write 2 separate JS algorithms: one that generates an object, and one that sorts them alphabetically by key (as deep as possible). Both algorithms should be unit tested properly.
  -  The object generation algorithm receives 2 inputs: rootKeyCount , and maxDepth
  - For each random key in the object, it should randomly decide to make it a number, string, object, boolean, or array
- If it is an object, an object will have half the amount of keys as its parent (floored value)
- Numbers and strings can be random of any length, upto 20 characters
- Arrays should simply be empty
  -  Your objects should not have more than _maxDepth_ amountof nesting. i.e. if _maxDepth_ is 2, you can not have more than 2 levelsof nested objects
  -  When you reach maxDepth, any object will simply be an empty object
  -  The object sort function will work recursively until all objects are sorted by key
● The frontend should have the following features
  -  I should be able to set the total amount of keys at the root of the generated object
  -  I should be able to set the maximum amount of nested levels of hierarchy in the generated objects
  -  I should be able to generate a new object by clicking on a button, each one of them should appear in a list with its stats (i.e. donʼt display the object, but just how many keys it has, its depth, its generation time, and how much memory it takes up (formatted properly B/KB/MB))
  -  Each object should have a “Sort” button next to it, that sorts it, displays a loader, and then displays the time it took in milliseconds/seconds to sort it.
  - If an object was sorted multiple times, it should display all the sort
durations for that object.
  - There should also be a button that lets me sort all objects at once, and a button that sorts all unsorted objects at once
- Make sure you handle the edge cases in user inputs
- The UI should refresh itself automatically, you shouldnʼt have to request updated data, it does not necessarily need to use pub/sub however, up to you
- Sorting should time out aer 200 milliseconds
- You should only test 2 things:
  - The object generation function
  - The object sorting function
- Pay attention to details, make it work well and clean up your UI