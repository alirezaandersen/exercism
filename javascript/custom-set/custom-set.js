function CustomSet(set){
	this._set = [];
	for(var i in set){
		this.add(set[i]);
	}
}

CustomSet.prototype.empty = function(){
	return this._set.length === 0;
};

CustomSet.prototype.contains = function(value){
	return this._set.indexOf(value) != -1;
};

CustomSet.prototype.subset = function(CSet){
	if(this._set.length < CSet._set.length){
		return false;
	}
	var isSubset = true;
	for(var i = 0; i < CSet._set.length; i++){
		if(this._set.indexOf(CSet._set[i]) == -1){
			isSubset = false;
			break;
		}
	}
	return isSubset;
};

CustomSet.prototype.disjoint = function(CSet){
	var isDisjoint = true;
	for(var i = 0; i < CSet._set.length; i++){
		if(this._set.indexOf(CSet._set[i]) != -1){
			isDisjoint = false;
			break;
		}
	}
	return isDisjoint;
};

CustomSet.prototype.eql = function(CSet){
	var sortedSetA = this._set;
	sortedSetA.sort();
	var sortedSetB = CSet._set;
	sortedSetB.sort();
	return sortedSetA.join() == sortedSetB.join();
};

CustomSet.prototype.add = function(value){
	if(this._set.indexOf(value) == -1)
		this._set.push(value);
	return this;
};

CustomSet.prototype.intersection = function(CSet){
	var interS = [];
	for(var i = 0; i < CSet._set.length; i++){
		if(this._set.indexOf(CSet._set[i]) != -1){
			interS.push(CSet._set[i]);
		}
	}
	return new CustomSet(interS);
};

CustomSet.prototype.difference = function(CSet){
	var differ = [];
	if(this._set.length === 0)
		return new CustomSet(differ);
	for(var i = 0; i < this._set.length; i++){
		if(CSet._set.indexOf(this._set[i]) == -1){
			differ.push(this._set[i]);
		}
	}
	return new CustomSet(differ);
};

CustomSet.prototype.union = function(CSet){
	var _union = new CustomSet(this._set);
	for(var i = 0; i < CSet._set.length; i++){
		_union.add(CSet._set[i]);
	}
	return _union;
};

CustomSet.prototype.clear = function(){
	this._set = [];
	return this;
};

CustomSet.prototype.size = function(){
	return this._set.length;
};

CustomSet.prototype.toList = function(){
	return this._set;
};

module.exports = CustomSet;
