var myBundle = (function () {
    'use strict';

    var foo = 'hello world';

    // import './main.css'

    function main () {
        console.log(foo);
    }

    return main;

}());
