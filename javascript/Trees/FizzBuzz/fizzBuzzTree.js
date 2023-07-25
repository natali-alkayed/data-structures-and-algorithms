class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}
class KaryTree {
  constructor(root = null) {
    this.root = root;
  }
}
function fizzBuzzTree(karyTree) {
  if (!karyTree || !(karyTree instanceof KaryTree)) {
    throw new Error('Input must be a KaryTree.');
  }
  //In JavaScript, the instanceof operator is used to check whether
  // an object is an instance of a particular class or constructor function. 
  //It allows you to determine if an object was created 
  //from a specific constructor function or from a class that extends that constructor function.
  function fizzBuzzTransform(node) {
    if (!node) {
      return null;
    }
    const newValue = getFizzBuzzValue(node.value);
    const newNode = new Node(newValue);
    node.children.forEach((child) => {
      const newChild = fizzBuzzTransform(child);
      if (newChild) {
        newNode.children.push(newChild);
      }
    });
    return newNode;
  }
  function getFizzBuzzValue(value) {
    if (value % 3 === 0 && value % 5 === 0) {
      return 'FizzBuzz';
    } else if (value % 3 === 0) {
      return 'Fizz';
    } else if (value % 5 === 0) {
      return 'Buzz';
    } else {
      return value.toString();
    }
  }
  const newRoot = fizzBuzzTransform(karyTree.root);
  const newTree = new KaryTree(newRoot);
  return newTree;
}
module.exports = {  Node, KaryTree, fizzBuzzTree  }