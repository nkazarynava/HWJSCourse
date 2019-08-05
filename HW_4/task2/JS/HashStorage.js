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

    //additional functionality for drinks
    drinkStorage.addDrinkValue = (function () {
        var drinkKeys = {type: [0,1,2], recipeStr:''};
        var validateFn = function (inputHash) {
            if(! (typeof inputHash === 'object')) return false;
            for (var k in drinkKeys) {
                if ((k in inputHash)) {
                    continue;
                } else {
                    return false;
                }
            }
            return true;
        };

        return (function (key, inputHash) {
            if (validateFn(inputHash)) {
                this.addValue(key, inputHash);
            } else {
                console.log("Wrong drink data for name : " + key);
            }
        })
    })().bind(drinkStorage);

    drinkStorage.getDrinkHtml = (function() {
        //var drinkInfo = {type: [1,2], recipeStr: ''};
        var typeNames = ['unknown drink type','alcohol','alcohol free'];
        return (function (key) {
            var data = this.getValue(key);
            var result = '';
            if (typeof data === 'object') {
                result += "drink name: <b>" + key+"</b></br>";
                result += ((typeNames[data['type']]) ? typeNames[data['type']]  + " : <b> yes</b></br>":  typeNames[0]);
                result += "receipe: </br><b>" + data['recipeStr']+"</h1>";
            }
            return result;
        });
    })().bind(drinkStorage);

    return drinkStorage;
})();


