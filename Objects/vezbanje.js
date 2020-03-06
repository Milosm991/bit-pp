"use strict";

function array(a, b) {
    var newArray = [];
    for (var i = 0, j = 0; i < a.length, j < b.length; i++ , j++) {
        newArray.push(a[i]);
        newArray.push(b[j]);
    }
    return newArray

}

var res = array(["a", "b", "c"], [1, 2, 3])
console.log(res)