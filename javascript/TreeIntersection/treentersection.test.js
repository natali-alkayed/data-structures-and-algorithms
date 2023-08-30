const tree_intersection = require('./tree-intersection');

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
test('Finds common values in two binary trees using Hashtable', () => {
    const tree1 = new TreeNode(100);
    tree1.left = new TreeNode(125);
    tree1.right = new TreeNode(200);

    const tree2 = new TreeNode(42);
    tree2.left = new TreeNode(125);
    tree2.right = new TreeNode(200);

    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual([125, 200]);
});

test('No common values in two binary trees', () => {
    const tree1 = new TreeNode(100);
    tree1.left = new TreeNode(125);
    tree1.right = new TreeNode(200);

    const tree2 = new TreeNode(42);
    tree2.left = new TreeNode(300);
    tree2.right = new TreeNode(500);

    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual([]);
});
test('Common values with duplicate values in two binary trees', () => {
    const tree1 = new TreeNode(100);
    tree1.left = new TreeNode(125);
    tree1.right = new TreeNode(200);
    tree1.left.left = new TreeNode(125);

    const tree2 = new TreeNode(42);
    tree2.left = new TreeNode(200);
    tree2.right = new TreeNode(125);
    tree2.right.right = new TreeNode(125);

    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual(expect.arrayContaining([125, 200]));
    expect(result).toHaveLength(2);
});