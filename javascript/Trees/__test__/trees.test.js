const  BinarySearchTree = require('../BinaryTree'); 
const  Node = require('../Node'); 

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
});
