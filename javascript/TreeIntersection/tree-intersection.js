const Hashtable = require('../HashMap/HashTable/HashTable');

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function tree_intersection(tree1, tree2) {
    const valuesSet = new Set();
    const hashtable = new Hashtable();

    const traverseAndStore = (node) => {
        if (!node) return;
        hashtable.set(node.value.toString(), true);
        traverseAndStore(node.left);
        traverseAndStore(node.right);
    };

    const traverseAndCheck = (node) => {
        if (!node) return;
        if (hashtable.has(node.value.toString())) {
            valuesSet.add(node.value);
        }
        traverseAndCheck(node.left);
        traverseAndCheck(node.right);
    };

    traverseAndStore(tree1);
    traverseAndCheck(tree2);

    return Array.from(valuesSet);
}

module.exports = tree_intersection;