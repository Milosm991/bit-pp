
// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

// function duplicate(arr) {
//     var arr1 = [];
//     for (var i = 0; i < arr.length; i++) {
//         arr1.push(arr[i])
//         arr1.push(arr[i])
//     }
//     return arr1;
// }

// var res = duplicate([2, 4, 7, 11, -2, 1]);
// console.log(res);

/////////////////// 2 ///////////////////
// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 


// function removeElement(arr) {
//     var arr1 = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr1.indexOf(arr[i]) === -1) {
//             arr1[arr1.length] = arr[i];
//         }

//     }
//     return arr1.sort(function (a, b) {
//         return a - b
//     });
// }


// var res = removeElement([8, 13, 8, 9, 12, 8, 1, 1, 4, 13])
// console.log(res);

////////////////  3 ////////////////
// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
// function oddNumber(arr) {
//     return arr.length % 2 !== 0
// }
// var res = oddNumber([1, 2, 9, 2, 1]);
// console.log(res);

///////////// b ///////////////
// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4
// function middleElement(arr) {
//     var count = 0;
//     if (arr.length % 2 === 0) {
//         return "Array has even number of elements"
//     }
//     var middleIndex = parseInt(arr.length / 2);
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < arr[middleIndex]) {
//             count++
//         }
//     }
//     return count

// }
// var res = middleElement([-1, 8.1, 3, 6, 2.3, 44, 2.11]);
// console.log(res);

//////////// 4 ////////////////
// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }


// function smallest(arr) {
//     var sortedArr = arr.slice().sort(function (a, b) { return a - b })
//     var index = arr.lastIndexOf(sortedArr[0]);

//     return {
//         min: sortedArr[0],
//         minIndex: index
//     };
// }

// var res = smallest([1, 4, -2, 11, 8, 1, -2, 3]);
// console.log(res);

////////////  5  ///////////////////
// Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]

// function lessThan(a, b) {
//     var newArr = [];
//     for (var i = 0; i < a.length; i++) {
//         if (a[i] < b) {
//             newArr[newArr.length] = a[i];
//         }

//     }
//     return newArr
// }
// var res = lessThan([2, 3, 8, -2, 11, 4], 6);
// console.log(res);

//////////// 5b   //////////////////

// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

// function pro(arr) {
//     var newArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].slice(0, 3).toLowerCase() === "pro") {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr

// }
// var res = pro(["JavaScript", "Programming", "fun", "product"]);
// console.log(res);

//////////////  6a ///////////

// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]

// function totalPrice(a) {
//     var sum = 0;
//     for (var i = 0; i < a.length; i++) {
//         sum += a[i].price;
//     }
//     return sum;
// }

// var res = totalPrice([
//     { name: "apples", price: 100 },
//     { name: "milk", price: 80 },
//     { name: "bananas", price: 150 }
// ]
// )
// console.log(res);


