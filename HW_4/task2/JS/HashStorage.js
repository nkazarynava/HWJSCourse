var drinkStorage = (function () {
    function HashStorage () {
        var self = this;
        var _hash = {};
        self.addValue = function (key, val) {
            _hash[String(key)] = val;
            return self;
        }

        self.getValue = function (key) {
            return _hash[String(key)];
        }

        self.deleteValue = function (key) {
            var key = String(key);
            if (key in _hash) {
                delete _hash[key];
                return true;
            }
            return false;
        }

        self.getKeys = function() {
            var result = [];
            for (var k in _hash){
                result.push(k);
            }
            return result;
        }

    }

    var drinkStorage = new HashStorage();

    return drinkStorage;
})();


