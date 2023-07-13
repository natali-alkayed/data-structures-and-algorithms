'use strict';
const Node =require('./Node');

class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }
}

class BinarySearchTree extends BinaryTree {
    constructor(root = null) {
      super(root);
    }
  
    add(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        addNode(this.root, newNode);
      }
  
      function addNode(node, newNode) {
        if (newNode.value < node.value) {
          if (node.left === null) {
            node.left = newNode;
          } else {
            addNode(node.left, newNode);
          }
        } else {
          if (node.right === null) {
            node.right = newNode;
          } else {
            addNode(node.right, newNode);
          }
        }
      }
    }
  
    contains(value) {
      function search(node) {
        if (node === null) {
          return false;
        }
  
        if (value === node.value) {
          return true;
        }
  
        if (value < node.value) {
          return search(node.left);
        } else {
          return search(node.right);
        }
      }
  
      return search(this.root);
    }
  }

module.exports = BinaryTree;
module.exports = BinarySearchTree;