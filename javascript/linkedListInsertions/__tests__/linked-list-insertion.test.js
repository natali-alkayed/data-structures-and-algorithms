const LinkedList = require("../lib/LinkedList");

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('append', () => {
    test('should append a node to an empty list', () => {
      linkedList.append(5);
      expect(linkedList.head.value).toBe(5);
      expect(linkedList.head.next).toBeNull();
    });

    test('should append a node to the end of the list', () => {
      linkedList.append(5);
      linkedList.append(10);
      linkedList.append(15);

      expect(linkedList.head.value).toBe(5);
      expect(linkedList.head.next.value).toBe(10);
      expect(linkedList.head.next.next.value).toBe(15);
      expect(linkedList.head.next.next.next).toBeNull();
    });
  });

  describe('insertBefore', () => {
    test('should insert a node before the specified value', () => {
      linkedList.append(5);
      linkedList.append(10);
      linkedList.append(15);

      linkedList.insertBefore(10, 7);

      expect(linkedList.head.value).toBe(5);
      expect(linkedList.head.next.value).toBe(7);
      expect(linkedList.head.next.next.value).toBe(10);
      expect(linkedList.head.next.next.next.value).toBe(15);
      expect(linkedList.head.next.next.next.next).toBeNull();
    });

    test('should insert a node before the head node', () => {
      linkedList.append(5);
      linkedList.insertBefore(5, 2);

      expect(linkedList.head.value).toBe(2);
      expect(linkedList.head.next.value).toBe(5);
      expect(linkedList.head.next.next).toBeNull();
    });

    test('should throw an error if the specified value does not exist', () => {
      linkedList.append(5);

      expect(() => linkedList.insertBefore(10, 7)).toThrow(
        'Node with value 10 not found.'
      );
    });
  });

  describe('insertAfter', () => {
    test('should insert a node after the specified value', () => {
      linkedList.append(5);
      linkedList.append(10);
      linkedList.append(15);

      linkedList.insertAfter(10, 12);

      expect(linkedList.head.value).toBe(5);
      expect(linkedList.head.next.value).toBe(10);
      expect(linkedList.head.next.next.value).toBe(12);
      expect(linkedList.head.next.next.next.value).toBe(15);
      expect(linkedList.head.next.next.next.next).toBeNull();
    });

    test('should insert a node after the last node', () => {
      linkedList.append(5);
      linkedList.append(10);
      linkedList.insertAfter(10, 12);

      expect(linkedList.head.value).toBe(5);
      expect(linkedList.head.next.value).toBe(10);
      expect(linkedList.head.next.next.value).toBe(12);
      expect(linkedList.head.next.next.next).toBeNull();
    });

    test('should throw an error if the specified value does not exist', () => {
      linkedList.append(5);

      expect(() => linkedList.insertAfter(10, 12)).toThrow(
        'Node with value 10 not found.'
      );
    });
  });
//************************************************lab7**************************************************//
describe('kth From End ', () => {
  test("Where k is greater than the length of the linked list",()=>{
    linkedList.append("a");
    linkedList.append("b");
    linkedList.append("c");
    linkedList.append("d");
    expect(linkedList.kthFromEnd(5)).toBeNull();
  })
  test("Where k and the length of the list are the same",()=>{
    linkedList.append("a");
    linkedList.append("b");
    linkedList.append("c");
    linkedList.append("d");
    expect(linkedList.kthFromEnd(4)).toBe("a");
  })
  test("Where k is not a positive integer",()=>{
    linkedList.append("a");
    linkedList.append("b");
    linkedList.append("c");
    linkedList.append("d");
    expect(linkedList.kthFromEnd(-1)).toBeNull();
    expect(linkedList.kthFromEnd(0)).toBeNull();
  })
  test("Where the linked list is of a size 1",()=>{
    linkedList.append("a");
    expect(linkedList.kthFromEnd(1)).toBe("a");
  })
  test("Happy Path” where k is not at the end, but somewhere in the middle of the linked list",()=>{
    linkedList.append(1);
    linkedList.append(8);
    linkedList.append(3);
    linkedList.append(2);
    expect(linkedList.kthFromEnd(2)).toBe(3);
  })

});
//*****************************************************************************************************//

});