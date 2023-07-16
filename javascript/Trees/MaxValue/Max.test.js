const BinaryTree = require('./MaxValue');
const Node = require('../Node');

describe('max value in binary tree', () => {
    let bt;

    beforeEach(() => {
        bt = new BinaryTree();
    });

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


        bt.root = tow;

        expect(bt.MaxValue()).toEqual(9);
    });

    test('return null for an empty tree', () => {
        const bt = new BinaryTree();
        expect(bt.MaxValue()).toBeNull();
      });

});






  