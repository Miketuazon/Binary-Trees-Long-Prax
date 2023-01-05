// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      // Your code here
      this.root = null;
    }

    insert(val, currentNode = this.root) {
      // Your code here
      //creating a new node, passing in value
      const newNode = new TreeNode(val);
      //if there is no currentNode, place the newNode at the root
      if (!currentNode) {
        this.root = newNode;
        return this;
      }
      //look at left and insert smaller vals
      if (val < currentNode.val) {
        //if there is no currentNode on the left
        if (!currentNode.left) currentNode.left = newNode;
        //if there is
        else return this.insert(val, currentNode.left)
      }
      //look at right and insert bigger vals
      if (val > currentNode.val) {
        //if there is no currentNode on the right, reassign the currentNode.right as newNode
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else {
          //if there is,
          return this.insert(val, currentNode.right);
        }
      }

    }

    search(val) {
      //create root
      let currentNode = this.root;
      //if there is no root, return false
      if (!this.root) return false;
      //if the root's val is equal to val, return true
      if (this.root.val === val) return true
      //create a way to iterate through tree.
      //while there is a currentNode both in left and right
      while (currentNode.left || currentNode.right) {
        // console.log(currentNode)
        if (val === currentNode.val) return true
        else if (val <= currentNode.val) {
          currentNode = currentNode.left
        } else if (val >= currentNode.val) {
          currentNode = currentNode.right
        }
      }
      if (val === currentNode.val) return true
      return false
    }
    //      4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7
    // self = node we are at, left right
    preOrderTraversal(currentNode = this.root) {

      //base case
      if (!currentNode) return;
      if (currentNode) {
        //print out node
        console.log(currentNode.val)
        //recursive steps
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
      }
    }

    //left, self, right
    inOrderTraversal(currentNode = this.root) {
      //base case
      if (currentNode === null) return;
      //traverse left
      this.inOrderTraversal(currentNode.left);
      //print out
      console.log(currentNode.val);
      //traverse right
      this.inOrderTraversal(currentNode.right);
    }

    //left, right, self
    postOrderTraversal(currentNode = this.root) {
      //base case
      if (currentNode === null) return;
      //traverse left first
      this.postOrderTraversal(currentNode.left);
      //then traverse right
      this.postOrderTraversal(currentNode.right);
      //print vals
      console.log(currentNode.val)
    }
    //      4
    //    /   \
    //   2     6
    //  / \   / \
    // 1   3 5   7
    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      if (!this.root) return this;
      //create a queue to store what to be popped
      const queue = [];
      //push root into queue
      queue.push(this.root);
      //while queue is not empty
      while (queue.length) {
        // setting current as variable. SHIFT for left side
        const curr = queue.shift();
        //print out the current value
        console.log(curr.val);
        //Repopulate the queue!
        //if there is a value to the left, push it to queue
        if (curr.left) queue.push(curr.left);
        //if there is a value to the right, push it to queue
        if (curr.right) queue.push(curr.right)
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      if (!this.root) return this;
      //create a queue to store what to be popped
      const stack = [];
      //push root into queue
      stack.push(this.root);
      //while queue is not empty
      while (stack.length) {
        // setting current as variable. POP for right side
        const curr = stack.pop();
        //print out the current value
        console.log(curr.val);
        //Repopulate the stack!
        //if there is a value to the left, push it to queue
        if (curr.left) stack.push(curr.left);
        //if there is a value to the right, push it to queue
        if (curr.right) stack.push(curr.right)
      }
    }
  }
  module.exports = { BinarySearchTree, TreeNode };
