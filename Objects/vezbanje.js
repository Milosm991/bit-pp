"use strict";
<<<<<<< HEAD

function array(a, b) {
    var newArray = [];
    for (var i = 0, j = 0; i < a.length, j < b.length; i++ , j++) {
        newArray.push(a[i]);
        newArray.push(b[j]);
    }
    return newArray
=======
//////// 2 ///////
// function array(a, b) {

//     var newArray = [];
//     for (var i = 0, j = 0; i < a.length, j < b.length; i++ , j++) {
//         newArray.push(a[i]);
//         newArray.push(b[j]);
//     }
//     return newArray

// }
>>>>>>> b597e576a1d56a3acda927f35b9bb77ed033ee97

// var res = array(["a", "b", "c"], [1, 2, 3])
// console.log(res)

///// 3 //////
// function rotateEle(arr, k) {
//     var a = arr.slice(k, arr.length + 1);
//     for (var i = 0; i < k; i++) {
//         a.push(arr[i])
//     }
//     return a


// }
// var res = rotateEle([12, 24, 35, 4, 54, 65], 2)
// console.log(res);

////// 4 /////

// function numbToArr(number){
//     var a = number.toString();
//     return a.split("");

// }
// var res = numbToArr(12345);
// console.log(res);
//////// 5 ///////////

// function multipTable(n){
//     var result = '\n';
// for (var i = 1; i < n+1; i++) {
//     for (var j = 1; j < n+1; j++) {
//         result += (i*j) + ' ';
//     }
//     result += '\n'
//     }
//     return result
// }
// var res = multipTable(12);
// console.log(res);
///////// 7 ////////

// function maxNumber(arr){
//     var newArr=[];
//     for(var i=0; i<arr.length; i++){
//         if(!isNaN(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
//     return Math.max(...newArr)

// }
// var res = maxNumber([1, 14, 54, 100, "sad"]);
// console.log(res);
///// 8 /////
// Write a function to find the maximum and minimum elements. Function returns an array.

// var minMax = (function (arr) {
//     var a = arr.sort(function (a, b) { return a - b });
//     var min = a[0];
//     var max = a[a.length - 1];
//     return [min, max]

// })([4, 8, 10, 2, 45, 11]);
// console.log(minMax);
///// 9 /////

// Write a function to find the median element of array.

// var medNumb = (function (arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     var median = sum / arr.length;
//     return Math.ceil(median);
// })([4, 8, 10, 2, 45, 11]);
// console.log(medNumb);
///// 10 ////
// Write a function to find the element that occurs most frequently.

// var occurOfEle = (function (arr) {
//     var mostFreqEl = arr[0];
//     var numbOfOcc = 1;
//     for (var i = 0; i < arr.length; i++) {
//         var counter = 0;
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 counter++
//             }
//         }
//         if (counter > numbOfOcc) {
//             numbOfOcc = counter;
//             mostFreqEl = arr[i];
//         }
//     }
//     return mostFreqEl;
// })([4, 8, 11, 10, 2, 2, 2, 2, 2, 11, 45, 11]);
// console.log(occurOfEle);
