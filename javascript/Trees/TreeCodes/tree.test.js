const  BinarySearchTree = require('./BinaryTree'); 
const  Node = require('./Node'); 
const BreadthFirst=require('../BreadthFirst/BreadthFirst')

describe('Binary Search Tree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test('can successfully instantiate an empty tree', () => {
    expect(bst.root).toBeNull();
  });

  test('can successfully instantiate a tree with a single root node', () => {
    const rootNode = new Node(10);
    bst = new BinarySearchTree(rootNode);
    expect(bst.root).toBe(rootNode);
  });

  test('for a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    bst.add(12);
    bst.add(6);
    bst.add(17);

    expect(bst.root.value).toBe(12);
    expect(bst.root.left.value).toBe(6);
    expect(bst.root.right.value).toBe(17);
  });

  test('can successfully return a collection from a pre-order traversal', () => {
    bst.add(11);
    bst.add(6);
    bst.add(4);
    bst.add(8);
    bst.add(16);
    bst.add(13);
    bst.add(22);

    const expectedPreOrder = [11, 6, 4, 8, 16, 13, 22];
    expect(bst.preOrder()).toEqual(expectedPreOrder);
  });

  test('can successfully return a collection from an in-order traversal', () => {
    bst.add(11);
    bst.add(6);
    bst.add(4);
    bst.add(8);
    bst.add(16);
    bst.add(13);
    bst.add(22);

    const expectedInOrder = [4, 6, 8, 11, 13, 16, 22];
    expect(bst.inOrder()).toEqual(expectedInOrder);
  });

  test('can successfully return a collection from a post-order traversal', () => {
    bst.add(11);
    bst.add(6);
    bst.add(4);
    bst.add(8);
    bst.add(16);
    bst.add(13);
    bst.add(22);

    const expectedPostOrder = [4, 8, 6, 13, 22, 16, 11];
    expect(bst.postOrder()).toEqual(expectedPostOrder);
  });

  test('returns false for the contains method with a non-existing node value', () => {
    bst.add(11);
    bst.add(6);
    bst.add(16);

    expect(bst.contains(4)).toBe(false);
    expect(bst.contains(8)).toBe(false);
    expect(bst.contains(13)).toBe(false);
  });
////////////////////////////////////////////////////////////////////////////////////////////////////
  test('return the max value in the binary tree', () => {
    const tow = new Node(2);
    const seven = new Node(7);
    const five = new Node(5);
    const one = new Node(1);
    const six = new Node(6);
    const nine = new Node(9);

    tow.left = seven;
    tow.right = five;
    seven.left = one;
    seven.right = six;
    five.left = nine;


    bst.root = tow;

    expect(bst.MaxValue()).toEqual(9);
});

test('return null for an empty tree', () => {
    expect(bst.MaxValue()).toBeNull();
  });
///////////////////////////////////////////////////////////////////////////////////////////////////////////

describe('breadthFirst', () => {
  it('should return an empty array for an empty tree', () => {
    expect(BreadthFirst(null)).toEqual("tree is empty");
  });

  it('should return the values in breadth-first order', () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4, left: null, right: null },
        right: { value: 5, left: null, right: null },
      },
      right: {
        value: 3,
        left: { value: 6, left: null, right: null },
        right: { value: 7, left: null, right: null },
      },
    };
    const expected = [1, 2, 3, 4, 5, 6, 7];
    expect(BreadthFirst(tree)).toEqual(expected);
  });

});
//////////////////////////////////////////////////////////////////////////////////////////////
const { Node, KaryTree, fizzBuzzTree } = require('../FizzBuzz/fizzBuzzTree');
describe('fizzBuzzTree', () => {
  it('should transform the k-ary tree according to FizzBuzz rules', () => {
    const originalRoot = new Node(15);
    const node3 = new Node(3);
    const node5 = new Node(5);
    const node2 = new Node(2);
    const node4 = new Node(4);
    const node30 = new Node(30);
    originalRoot.children = [node3, node5, node2, node4, node30];
    const originalTree = new KaryTree(originalRoot);

    const expectedRoot = new Node('FizzBuzz');
    const expectedNodeFizz = new Node('Fizz');
    const expectedNodeBuzz = new Node('Buzz');
    const expectedNode2 = new Node('2');
    const expectedNode4 = new Node('4');
    const expectedNodeFizzBuzz = new Node('FizzBuzz');
    expectedRoot.children = [expectedNodeFizz, expectedNodeBuzz, expectedNode2, expectedNode4, expectedNodeFizzBuzz];
    const expectedTree = new KaryTree(expectedRoot);
    
    const transformedTree = fizzBuzzTree(originalTree);
    expect(transformedTree).toEqual(expectedTree);
  });
  it('should return an empty k-ary tree for an empty input tree', () => {
    const emptyTree = new KaryTree();
    const transformedTree = fizzBuzzTree(emptyTree);
    expect(transformedTree.root).toBeNull();
  });
  it('should throw an error for non-KaryTree input', () => {
    const notAKaryTree = { root: { value: 1, children: [] } };
    expect(() => fizzBuzzTree(notAKaryTree)).toThrow('Input must be a KaryTree.');
  });
});
});