const LinkedList = require("../../LinkedListInsertion/LinkedList");


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


  
  describe('Linked List Zip', () => {
    test('tow linked list have the same length', () => {
      const LL1 = new LinkedList();
      LL1.append(1);
      LL1.append(2);
      LL1.append(3);

      const LL2 = new LinkedList();
      LL2.append(4);
      LL2.append(5);
      LL2.append(6);

      const Result = new LinkedList();

      Result.append(1);
      Result.append(4);
      Result.append(2);
      Result.append(5);
      Result.append(3);
      Result.append(6);

      expect(LL1.LinkedListZip(LL1, LL2)).toEqual(Result);
    
    });

    test('first linked list has more nodes than second linked list', () => {
      const LL1 = new LinkedList();
      LL1.append(1);
      LL1.append(2);
      LL1.append(3);

      const LL2 = new LinkedList();
      LL2.append(4);
      LL2.append(5);
    
      const Result = new LinkedList();

      Result.append(1);
      Result.append(4);
      Result.append(2);
      Result.append(5);
      Result.append(3);


      expect(LL1.LinkedListZip(LL1, LL2)).toEqual(Result);
    
    });
  
  
    test('second linked list has more nodes than first linked list', () => {
      const LL1 = new LinkedList();
      LL1.append(1);
      LL1.append(2);
      
      const LL2 = new LinkedList();
      LL2.append(4);
      LL2.append(5);
      LL1.append(3);

      const Result = new LinkedList();

      Result.append(1);
      Result.append(4);
      Result.append(2);
      Result.append(5);
      Result.append(3);


      expect(LL1.LinkedListZip(LL1, LL2)).toEqual(Result);
    
    });});});

