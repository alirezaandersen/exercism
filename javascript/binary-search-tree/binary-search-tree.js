var BinaryTree = function(data) {
	/* Tree data structure */
  this.data = data;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.insert = function(data) {
	/* Adds a value to the tree */
  var node = (data <= this.data) ? 'left' : 'right';

};

BinaryTree.prototype.each = function(func) {
	/* Sorted elements in the tree */

};

module.exports = BinaryTree;
