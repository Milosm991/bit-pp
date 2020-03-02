"use strict";
//////// 2 ///////
// function array(a, b) {
    
//     var newArray = [];
//     for (var i = 0, j = 0; i < a.length, j < b.length; i++ , j++) {
//         newArray.push(a[i]);
//         newArray.push(b[j]);
//     }
//     return newArray

// }

// var res = array(["a", "b", "c"], [1, 2, 3])
// console.log(res)
 
///// 3 //////
// function rotateEle(arr, k){
//     var a = arr.slice(k, arr.length+1);
//     for(var i=0; i<k; i++){
//         a.push(arr[i])
//     }
//     return a
   
    
// }
// var res= rotateEle([1,2,3,4,5,6], 3)
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

