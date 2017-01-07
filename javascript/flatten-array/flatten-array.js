var Flattener = function() {};

Flattener.prototype.flatten = function(list) {
    var flattener = function(list, result) {
        list.forEach(function(value) {
            if (typeof value !== 'object') {
                result.push(value);
                return;
            }
            // array case;
            if (value && typeof value.length !== 'undefined') {
                flattener(value, result);
            }
        });

        return result;
    };

    return flattener(list, []);
};

module.exports = Flattener;
