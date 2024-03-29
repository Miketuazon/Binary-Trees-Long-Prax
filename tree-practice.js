const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  if (rootNode.left) {
    return findMinBST(rootNode.left);
  }
  return rootNode.val;
}

function findMaxBST (rootNode) {
  // Your code here
  if (rootNode.right) {
    return findMaxBST(rootNode.right);
  }
  return rootNode.val;
}

function findMinBT (rootNode) {
  let min = rootNode.val;

  if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));
  if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));

  return min;
}

function findMaxBT (rootNode) {
  let max = rootNode.val;

  if (rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));
  if (rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));

  return max;
}

function getHeight (rootNode) {
  // count = 0
  // if (!rootNode) return -1
  // if (!rootNode.left && !rootNode.right) return 0
  // let curr = rootNode

  //   // count++
  //  if (curr.left){
  //   count++
  //   // rootNode = rootNode.left
  //   getHeight(curr.left)
  //  }
  //   if (curr.right) {
  //   count++
  //   // rootNode = rootNode.right
  //   getHeight(curr.right)

  // }
  // return count

  if (!rootNode) return -1;
  if (!rootNode.left && !rootNode.right) return 0;
  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right))

  // let height = 0;
  // let queue = [rootNode, null];

  // while (queue.length) {
  //   let shifted = queue.shift();
  //   if (shifted === null) ++height;

  //   if (shifted !== null) {
  //     if (shifted.left) queue.push(shifted.left);
  //     if (shifted.right) queue.push(shifted.right);
  //   } else if (queue.length) {
  //     queue.push(null);
  //   }
  // }
  // return height - 1;
}

function balancedTree (rootNode) {

  let left = Math.max(getHeight(rootNode.left))
  let right = Math.max(getHeight(rootNode.right))
  if (left === right + 1) return true
  return false
}

function countNodes (rootNode) {
  if (!rootNode) return 0;
  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right)
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
