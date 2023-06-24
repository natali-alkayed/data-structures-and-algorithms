'use strict';
const Node = require('./Node');
class LinkedList {
  constructor() { this.head = null; }
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  includes(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
  toString() {
    let currentNode = this.head;
    let result = "";
    while (currentNode !== null) {
      result += `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    result += "NULL";
    return result;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      throw new Error('The linked list is empty.');
    }

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error(`Node with value ${value} not found.`);
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      throw new Error('The linked list is empty.');
    }

    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error(`Node with value ${value} not found.`);
  }

  LinkedListZip(LL1, LL2) {
    let current1 = LL1.head;
    let current2 = LL2.head;
    let Result = new LinkedList();
    let flag = true;

    while (current1 || current2) {
      if (flag && current1) {
        Result.append(current1.value);
        current1 = current1.next;
      }
      else if (!flag && current2) {
        Result.append(current2.value);
        current2 = current2.next;
      }
      flag = !flag;
    }
    return Result;
  }
}
module.exports = LinkedList;