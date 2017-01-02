var LinkedList = function(){
  /* A linked list */
  this.head = null;
  this.tail = null;
  this.lenght = 0;

};

LinkedList.prototype.push = function(val) {
  /* Adds a value to the end of the linked list */
  this.tail = new Element(val, null, this.tail);
  if(this.length >=1)
    this.tail.prev.next = this.tail;
    else {
      this.head = this.tail;
      this.length ++;
    }
};

var Element = function(val, next, prev) {
	/* Element of a linked list */
	this.val = val;
	this.next = next;
	this.prev = prev;
};

module.exports = LinkedList;
