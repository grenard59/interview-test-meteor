import {
  GenerateType,
  generateKey,
  generateUnsortedObject,
  makeIdCharacter,
} from "/imports/ui/object/algo/generateTree";
import { expect } from "chai";

describe("generateTree", function () {
  describe("generateKey", function () {
    it("should return number", function () {
      const generatedTree = generateKey(0, 0, GenerateType.NUMBER);
      const [firstKey] = Object.keys(generatedTree);
      expect(generatedTree[firstKey]).to.be.a("number");
    });
    it("should return string", function () {
      const generatedTree = generateKey(0, 0, GenerateType.STRING);
      const [firstKey] = Object.keys(generatedTree);
      expect(generatedTree[firstKey]).to.be.a("string");
    });
    it("should return ARRAY", function () {
      const generatedTree = generateKey(0, 0, GenerateType.ARRAY);
      const [firstKey] = Object.keys(generatedTree);
      expect(generatedTree[firstKey]).to.be.a("array");
    });
    it("should return BOOLEAN", function () {
      const generatedTree = generateKey(0, 0, GenerateType.BOOLEAN);
      const [firstKey] = Object.keys(generatedTree);
      expect(generatedTree[firstKey]).to.be.a("boolean");
    });
    it("should return OBJECT", function () {
      const generatedTree = generateKey(1, 0, GenerateType.OBJECT);
      const [firstKey] = Object.keys(generatedTree);
      expect(generatedTree[firstKey]).to.be.a("object");
    });
  });

  describe("makeIdCharacter", function () {
    it("should return string as key", function () {
      expect(makeIdCharacter()).to.be.a("string");
    });
  });

  describe("generateUnsortedObject", function () {
    it("should return generetedTree", function () {
      const generatedTree = generateUnsortedObject(1, 0, {});
      expect(generatedTree).to.be.a("object");
    });
    it("should return key = 2", function () {
      const generatedTree = generateUnsortedObject(2, 0, {});
      expect(Object.keys(generatedTree).length).to.equal(2);
    });
    it("should return key = 4", function () {
      const generatedTree = generateUnsortedObject(4, 0, {});
      expect(Object.keys(generatedTree).length).to.equal(4);
    });
  });
});
