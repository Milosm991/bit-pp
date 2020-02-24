/*1. ///////////////
function position(str, a, n) {
    var res = " ";
    for (i = 0; i < str.length; i++) {
        if (i === n) {
            res += a + " ";
        }
        res += str[i];

    }
    return res;
}
var c = position("My random string", "JS", 10)
console.log(c);

2.///////////////////
function joinelements(a) {
    var str = "";
    for (i = 0; i < a.length; i++) {
        if (typeof a[i] !== undefined && isFinite(a[i]) && a[i] !== null && !isNaN(a[i])) {
            str += a[i] + " ";
        }
    }
    return str
}
var a = joinelements([NaN, 0, 15, false, -22, '', undefined, 47, null])

console.log(a);*/

3.///////////////////

// function filter(a) {
//     var arr = [];
//     for (var i = 0; i < a.length; i++) {
//         if (a[i]) {
//             arr[arr.length] = a[i];
//         }
//     }
//     return arr;
// }

// var b = filter([NaN, 0, 15, false, -22, '', undefined, 47, null]);
// console.log(b);

4// ///////////////////
// function reverseNumber(a) {
//     var numericString = "" + a;

//     var reverseNumericString = "";
//     for (var i = numericString.length - 1; i >= 0; i--) {
//         reverseNumericString += numericString[i];
//     }

//     return parseInt(reverseNumericString);
// }
// var res = reverseNumber(12345);

// console.log(res);

5.///////////////////////

// function passingLast(a, n) {

//     if (n === undefined) {
//         return a[a.length - 1];
//     }
//     var newArray = [];
//     for (var i = a.length - n; i < a.length; i++) {

//         newArray[newArray.length] = a[i];
//     }
//     return newArray;

// }


// var c = passingLast([7, 9, 0, -2], 2);
// console.log(c);

6///////////////////

// function array(a, b) {
//     var newArray = [];
//     for (var i = 0; i < a; i++) {
//         if (b === undefined) {
//             newArray[newArray.length] = null;
//         } else {
//             newArray[newArray.length] = b;
//         }
//     }
//     return newArray
// }
// var res = array(2)
// console.log(res);

7/////////////

// function perfectNumber(numb) {
//     var sum = 0;
//     var string = false;
//     for (var i = 0; i < numb; i++) {
//         if (numb % i === 0) {
//             sum += i;
//         }
//         if (sum === numb) {
//             string = true
//         }
//     }
//     return string
// }
// var res = perfectNumber(450);
// console.log(res);

8////////////////////

// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// '	a, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"



// function findAWord(a, b) {
//     for (var i = 0; i < a.length; i++)

// }
// var res = findAWord('The quick brown fox', 'fox')


////////////          9           //////////
// Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"



