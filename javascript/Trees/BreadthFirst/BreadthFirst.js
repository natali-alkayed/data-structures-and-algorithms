function BreadthFirst(tree) {
    if (!tree) {
      return ("tree is empty");
    }
    let result = [];
    let queue = [tree];

    while (queue.length > 0) {
      let currentNode = queue.shift();
      result.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);

    }
    return result;
  }
module.exports=BreadthFirst;