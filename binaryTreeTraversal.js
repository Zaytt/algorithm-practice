/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var inorderTraversal = function(root) {
  inorder(root);
};

/*
  Recursive Implementation
*/

function inorderRecursive(node) {
  // return if current node is empty
  if (!node) return;

  // traverse left part of node
  inorder(node.left);

  // print node
  console.log(node.val);

  // traverse left part of node
  inorder(node.right);
}

var inorderTraversalIterative = function(root) {
  // Create a stack
  const stack = [];
  // Create a reference to the current node
  let current = root;
  // if the current node is null and the stack is also empty, we are done
  while (stack.length || current !== null) {
    // if the current node exists, push it into the stack
    // and move to its left child
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      // otherwise, if the current node is null, pop an element from
      // the stack, print it, and finally set the current node to its
      // right child
      current = stack.pop();
      console.log(current.val);
      current = current.right;
    }
  }

  return array;
};
