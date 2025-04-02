// """
// Binary Tree Level Order Traversal

// Given the root of a binary tree, return the level order traversal of its nodes'
// values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
//     3
//   9     20
// n   n  15  7
// Example 2:

// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []
// """

class TreeNode {
    constructor(val, left, right) {
      this.val = val === undefined ? 0 : val;
      this.left = left === undefined ? null : left;
      this.right = right === undefined ? null : right;
    }
  }

// takes in root node -> returns array of arrays of node values
function levelOrder(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      // add the nodes value to the currentLevel arr
      currentLevel.push(node.val);

      // add the nodes children to the queue for the next level
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}

// takes in array -> returns root node of newly created tree from array
function fromArrayToRootNode(array) {
  if (!array || array.length === 0) return null;

  const root = new TreeNode(array[0]);
  const queue = [root];
  let i = 1; //start from the second el

  //process each node
  while (i < array.length && queue.length > 0) {
    const current = queue.shift();

    //L
    if (i < array.length) {
      if (array[i] !== null) {
        current.left = new TreeNode(array[i]);
        queue.push(current.left);
      }
      i++;
    }

    // R
    if (i < array.length) {
      if (array[i] !== null) {
        current.right = new TreeNode(array[i]);
        queue.push(current.right);
      }
      i++;
    }
}
  return root;
}

// create a tree from an array -> perform level order traversal
const testArray = [3, 9, 20, null, null, 15, 7];
const tree = fromArrayToRootNode(testArray);
console.log("NEWLY CREATED TREE: \n", tree);
console.log("level order traversal output: ", levelOrder(tree));



// This code outputs the following:
/*
NEWLY CREATED TREE: 
 TreeNode {
  val: 3,
  left: TreeNode { val: 9, left: null, right: null },
  right: TreeNode {
    val: 20,
    left: TreeNode { val: 15, left: null, right: null },
    right: TreeNode { val: 7, left: null, right: null }
  }
}
level order traversal output:  [ [ 3 ], [ 9, 20 ], [ 15, 7 ] ]
*/



