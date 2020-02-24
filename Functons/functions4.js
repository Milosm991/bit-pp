/////////////             1           ////////////

// Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

// function broj(a, e) {
//     res = false
//     for (i = 0; i < a.length; i++) {
//         if (a[i] === e) {
//             res = true;
//         }
//     } return res
// }
// var c = broj([5, -4.2, 3, 7], 10)
// console.log(c)

//////////////////         2      ////////////
// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

// function multiple(array) {
//     newArray = [];
//     for (i = 0; i < array.length; i++) {
//         if (array[i] > 0) {
//             newArray[newArray.length] = array[i] * 2
//         } else {
//             newArray[newArray.length] = array[i];
//         }
//     }
//     return newArray
// }

// var res = multiple([-3, 11, 5, 3.4, -8])
// console.log(res);

///////////////           3          //////////////

// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

// function broj(a) {
//     min = a[0]
//     index = 0;
//     for (i = 0; i < a.length; i++) {
//         if (min > a[i]) {
//             min = a[i]
//             index = i
//         }
//     } return min
// }
// var res = broj([4, 2, 2, -1, 6])
// console.log(res, index)

/////////////// 4 /////////////////

// Write a program that finds the second smallest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

// var array = [4, 2, 2, -1, 6];
// var min = array[0]
// var prevMin = min;
// for (i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//         prevMin = min;
//         min = array[i];
//     }

// }
// console.log(prevMin);

//////////////////               5             /////////////////


// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

// function array(a) {
//     res = 0;
//     for (i = 0; i < a.length; i++) {
//         if (a[i] > 0) {
//             res += a[i]
//         }
//     } return res
// }
// var sum = array([3, 11, -5, -3, 2])

// console.log(sum)

////////////////          6            ///////////////

// Write a program that checks if a given array is symmetric.An array is symmetric if it can be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// function symetric(array) {
//     var res = true;
//     for (i = 0, j = array.length - 1; i < array.length; i++ , j--) {

//         if (array[i] !== array[j]) {
//             res = false;
//         }

//     }
//     return res
// }
// var c = symetric([2, 4, -2, 7, -2, 4, 2]);

// console.log(c);

////////////////////// 7 /////////////////

// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

// function name(a, b) {
//     newArray = [];
//     for (i = 0, j = 0; i < a.length, j < b.length; i++ , j++) {
//         newArray[newArray.length] = a[i];
//         newArray[newArray.length] = b[j];
//     } return newArray
// }
// var res = name([4, 5, 6, 2], [3, 8, 11, 9])
// console.log(res)

/////////////            8        ////////////

// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

// function concatenateArr(a, b) {
//     var newArray = [];
//     for (i = 0; i < a.length; i++) {
//         newArray[newArray.length] = a[i];
//     }
//     for (j = 0; j < b.length; j++) {
//         newArray[newArray.length] = b[j];
//     }
//     return newArray
// }
// var res = concatenateArr([4, 5, 6, 2], [3, 8, 11, 9])
// console.log(res);

///////////////         9        /////////////

// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

// function name(a, e) {
//     var newArray = [];
//     for (i = 0; i < a.length; i++) {
//         if (e !== a[i]) {
//             newArray[newArray.length] = a[i];
//         }
//     }
//     return newArray
// }
// var res = name([4, 6, 2, 8, 2, 8], 2)
// console.log(res)

////////////// 10 ////////////////

// Write a program that inserts a given element e on the given position p in the array a.
//If the value of the position is greater than the array length, print the error message.
//     Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

// function insertElement(array, p, e) {
//     newArray = [];
//     for (i = 0; i < array.length; i++) {
//         if (i === p) {
//             newArray[newArray.length] = e;
//         }
//         newArray[newArray.length] = array[i]

//     }
//     return newArray

// }

// var res = insertElement([2, -2, 33, 12, 5, 8], 3, 78)
// console.log(res);
