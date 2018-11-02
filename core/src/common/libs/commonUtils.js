var deepExtend = function(out) {
    out = out || {};

    for (var i = 1, len = arguments.length; i < len; ++i) {
        var obj = arguments[i];

        if (!obj) {
            continue;
        }

        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) {
                continue;
            }

            // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
            if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
                out[key] = deepExtend(out[key], obj[key]);
                continue;
            }

            out[key] = obj[key];
        }
    }

    return out;
};

function merge(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
            result[key] = merge(result[key], val);
        } else {
            result[key] = val;
        }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
    }
    return result;
}

function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return;
    }

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
    }

    if (isType(obj, 'array')) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
        }
    } else {
        // Iterate over object keys
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}


var isType = function (obj, type) { return Object.prototype.toString.call(obj).toLowerCase() === ("[object " + type + "]"); };


export {
    deepExtend,
    merge,
    isType
}