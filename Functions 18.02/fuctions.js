/*1.
function maximum(a, b) {
    if (a < b) {
        res = b;
    } else {
        res = a;
    }
    return res;
}
var res = "";
var c = maximum(15, 11)
console.log(c);
2.
function isOdd(a) {
    if (a % 2 === 1) {
        res = true;
    } else {
        res = false;
    }
    return res;
}
var res = "";
var c = isOdd(14);
console.log(c);
3.
function isThreedigit(a) {
    if (a >= 100 && a < 1000) {
        res = true;
    } else {
        res = false;
    }
    return res;
}

var res = "";
var c = isThreedigit(100);
console.log(c);

4.
function aritmetic(a, b, c, d) {
    return (a + b + c + d) / 4;
}
var res = aritmetic(5, 7, 6, 3)
console.log(res);

function digits(number) {
    for (var i = 0; number > 0; i++) {
        number = (number - (number % 10)) / 10
    } return i;
}
var a = digits(100);
console.log(a);

8.
function appearanceOfNumber(numbers, e) {
    var a = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === e) {
            a++;
        }
    }
    return a;
}

var b = appearanceOfNumber([2, 4, 7, 8, 7, 7, 1], 7);
console.log(b);
9.
function sumOfOdd(a) {
    var zbir = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            zbir += a[i];
        }
    }
    return zbir;
}

var b = sumOfOdd([1, 2, 3, 4, 5])
console.log(b);

function letterA(str) {

    for (var i = 0; i < str.length; i++)
        if (str[i] === letter) {
            res++;
        }
    return res;
}

var letter = "a";
var res = 0;
var c = letterA("abcdAbd");
console.log(c);*/




