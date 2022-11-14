import sortKeysRecursive from "sort-keys-recursive";

export const sortTree = (unSortedTree) => sortKeysRecursive(unSortedTree);

export const generateSortObject = (unSortedObject) => {
  const start = Date.now();
  sortTree(unSortedObject);
  const end = Date.now();
  return end - start;
};
