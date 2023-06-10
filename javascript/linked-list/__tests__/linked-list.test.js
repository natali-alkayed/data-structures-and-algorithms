 'use strict';

const LinkedList = require("../lib/LinkedList");

describe("LinkedList", () => {
  let myList;

  beforeEach(() => {
    myList = new LinkedList();
  });

  it("should instantiate an empty linked list", () => {
    expect(myList.head).toBeNull();
  });

  it("should properly insert into the linked list", () => {
    myList.insert("a");
    expect(myList.head.value).toEqual("a");
  });

  it("should make the head property point to the first node", () => {
    myList.insert("a");
    myList.insert("b");
    expect(myList.head.value).toEqual("b");
  });

  it("should properly insert multiple nodes into the linked list", () => {
    myList.insert("a");
    myList.insert("b");
    myList.insert("c");
    expect(myList.head.value).toEqual("c");
    expect(myList.head.next.value).toEqual("b");
    expect(myList.head.next.next.value).toEqual("a");
  });

  it("should return true when finding a value within the linked list that exists", () => {
    myList.insert("a");
    myList.insert("b");
    myList.insert("c");
    expect(myList.includes("b")).toBe(true);
  });

  it("should return false when searching for a value in the linked list that does not exist", () => {
    myList.insert("a");
    myList.insert("b");
    myList.insert("c");
    expect(myList.includes("d")).toBe(false);
  });

  it("should properly return a collection of all values in the linked list", () => {
    myList.insert("a");
    myList.insert("b");
    myList.insert("c");
    expect(myList.toString()).toEqual("{ c } -> { b } -> { a } -> NULL");
  });
});