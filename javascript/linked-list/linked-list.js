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

LinkedList.prototype.pop = function() {
	/* Removes and returns a value from the end of the linked list */
	if(this.length === 0)
		return undefined;
	this.length--;
	var element = this.tail;
	this.tail = element.prev;
	if(this.length === 0)
		this.head = this.tail;
	element.delete();
	return element.val;
};

var Element = function(val, next, prev) {
	/* Element of a linked list */
	this.val = val;
	this.next = next;
	this.prev = prev;
};

module.exports = LinkedList;
