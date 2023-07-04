const { PseudoQueue } = require('../PseudoQueue');

describe('PseudoQueue', () => {
  let queue;

  beforeEach(() => {
    queue = new PseudoQueue();
  });

  test('enqueue should add values to the queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.stack1.peek()).toBe(30);
  });

  test('dequeue should remove and return values from the queue in FIFO order', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
  });

  test('dequeue should return null if the queue is empty', () => {
    expect(queue.dequeue()).toBeNull();
  });
});
