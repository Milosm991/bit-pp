//////////              1       //////////////
// Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

// function skip(a) {
//     var minIndex = 0;
//     var maxIndex = 0;
//     newArray = [];
//     for (i = 0; i < a.length; i++) {
//         if (a[minIndex] > a[i]) {
//             minIndex = i
//         }
//         if (a[maxIndex] < a[i]) {
//             maxIndex = i
//         }
//     }
//     var b = a[minIndex];
//    = a[minIndex]  a[maxIndex];
//     a[maxIndex] = b;
//     return a
// }
// var res = skip([3, 500, 12, 149, 53, 414, 1, 19])
// console.log(res)

//////////////////////    2    //////////////////

// Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
// 
//
// function array(a){
//     var newA=[];
// for(i=0; i<a.length; i++){
//     if((a[i]/2)+5===0){
//         newA[newA.length]=20
//     }
//     newA[newA.length]=(a[i]/2)+5;
    
//     }
// return newA
// }
// var res=array([ 3, 500, -10, 149, 53, 414, 1, 19 ]);
// console.log(res);

//////////////// 3 ///////////////////
// Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.


// function grades(names, points){


// for(i=0;i<points.length; i++){
//     if(points[i]>=51 && points[i]<=60){
//         console.log(names[i] + "acquired" + points[i] + "points and earned 6");
//         }
//     if(points[i]>=61 && points[i]<=70){
//         console.log(names[i] + "acquired" + points[i] + "points and earned 7");
//        }
//     if(points[i]>=71 && points[i]<=80){
//         console.log(names[i] + "acquired" + points[i] + "points and earned 8");
//        }
//     if(points[i]>=81 && points[i]<=90){
//         console.log(names[i] + "acquired" + points[i] + "points and earned 9");
//        }
//     if(points[i]>=91 && points[i]<=100){
//         console.log(names[i] + "acquired" + points[i] + "points and earned 10");
//        }
//     if(points[i]<=50){
//         console.log(names[i] + "acquired" + points[i] + "and failed to complete the exam.");
        
//         }
//     }
//     return 
// }
// var res=grades([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ],[ 50, 39, 63, 72, 99, 51, 83, 59 ])
// console.log(res);

///////////////  6  /////////////////////

// Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000

// var sum=0;
// var subtract=0;
// var sum2=0;
// for(var i=0; i<=1000; i++){
//     if(i%2===0){
//         sum+=i;
//     }
//     if(i<=500 && i%2===1){
//         subtract-=i;
//     }
//     sum2=(sum+subtract)*12.5
//     }
// console.log(sum2);
//
//
/////////////////  7  ////////////////

// Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

//  function twoLett(str){
//     var string="";
//     for(var i=0; i<str.length; i++){
//         if(typeof str[i]==="string" && str[i].length>1){
//             string+=str[i][0]
//             string+=str[i][1]
//         }
//     }
//     return string
// }
// var res= twoLett([ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ])

// console.log(res);
//
//
////////////////////  8  ////////////

// Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

// function reverseStr(str){
//     var newStr="";
//     for(var i=str.length-1; i>=0; i--){
//         newStr+=str[i]
//     }
//     return newStr
// }
// var res=reverseStr("Belgrade Institute of Technology")
// console.log(res);
//
//
///////////  11  ////////////////
// 
// Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

// var string="a nut for a jar of tuna";
// var res=true;
// for(i=0, j=string.length-1; i<string.length, j>0; i++, j--){
//       if(string[i]!==string[j]){
//         res=false;
//     }
// }
// console.log(res);
