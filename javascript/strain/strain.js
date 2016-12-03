var Strain = function() {};

Strain.keep = function(subject, fn) {
  return subject.filter(fn);
};

Strain.discard = function(subject, fn) {
  var out = [];
  subject.forEach((item)  {
    return if((!fn(item)) { out.push(item)); }
  });
  return out;
};

module.exports = Strain;
