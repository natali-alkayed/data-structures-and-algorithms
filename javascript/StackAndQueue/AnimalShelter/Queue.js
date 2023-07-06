const Node=require('./Node');
class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
    }
  
    enqueue(value) {
      const newNode = new Node(value);
  
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
  
      const dequeuedValue = this.front.value;
      this.front = this.front.next;
  
      if (this.front === null) {
        this.rear = null;
      }
  
      return dequeuedValue;
    }
  
    peek() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
  
      return this.front.value;
    }
  
    isEmpty() {
      return this.front === null;
    }
  }

  module.exports=Queue;