import { random } from "lodash";

export const GenerateType = {
  NUMBER: "number",
  STRING: "string",
  OBJECT: "object",
  BOOLEAN: "boolean",
  ARRAY: "array",
};
const MAX_CHAR = 1000000000000000000;

export const makeIdCharacter = () => {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  const length = random(1, 20);
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const generateKey = (rootKeyCount, maxDepth, type) => {
  switch (type) {
    case GenerateType.NUMBER:
      return {
        [makeIdCharacter()]: random(MAX_CHAR),
      };
    case GenerateType.STRING:
      return {
        [makeIdCharacter()]: makeIdCharacter(),
      };
    case GenerateType.ARRAY:
      return {
        [makeIdCharacter()]: [],
      };
    case GenerateType.BOOLEAN:
      return {
        [makeIdCharacter()]: Math.random() < 0.5,
      };
    case GenerateType.OBJECT:
      if (maxDepth === 0) {
        return { [makeIdCharacter()]: {} };
      }
      return {
        [makeIdCharacter()]: generateUnsortedObject(
          Math.floor(rootKeyCount / 2),
          maxDepth - 1,
          {}
        ),
      };
  }
};

export const generateUnsortedObject = (rootKeyCount, maxDepth, tree) => {
  if (rootKeyCount === 0) {
    return tree;
  }
  const type = Object.keys(GenerateType).map((type) => {
    return GenerateType[type];
  })[random(4)];

  const newKey = generateKey(rootKeyCount, maxDepth, type);
  return generateUnsortedObject(rootKeyCount - 1, maxDepth, {
    ...tree,
    ...newKey,
  });
};
