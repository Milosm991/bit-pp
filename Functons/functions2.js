// function isInputAString(a) {

//     if (typeof a === "string") {
//         res = true;
//     }
//     return res;
// }
// var res = false;
// var c = isInputAString("string")
// console.log(res);

//***************2***************
// function isBlank(input) {
//     if (typeof input !== "string") {
//         return false;
//     }
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] !== " ") {
//             return false;
//         }
//     }
    
 //     return true;
 // }
    
// var result = isBlank(12);
// console.log(result);
    
//*************3************
    
// function concatStr(str, n) {
//     var newStr = "";
//     for (var i = 0; i < n; i++) {
//         newStr = newStr + str;
//     }
//     return newStr;
// }
    
// var result = concatStr("ha", 5);
// console.log(result);
    
//*************4***********
    
// function countStr(str, letter) {
//     var a = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             a++;
//         }
    
//     }
//     return a;
// }
    
    
// var result = countStr("Nikolaaoooaa", "o");
// console.log(result);
    
//**************5************
    
// function firstPosition(str, n) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === n) {
//             return i+1;
//         }
//     }
//     return -1;
// }
    
// var result = firstPosition("nikolka", "k");
// console.log(result);
    
//*********6***************
    
// function lastPosition(str, n) {
//     for (var i = str.length - 1; i >= 0; i--) {
//         if (str[i] === n) {
//             return i+1;
//         }
//     }
//     return -1;
// }
    
    
// var result = lastPosition("nikolakok", "k");
// console.log(result);

// **************7**************

// function stringToArray(string){
//     var niz=[];
// for(i=0; i<string.length; i++){
//     if(string[i]===" "){
//         niz[niz.length]=null;
//     }else
//     niz[niz.length]=string[i];
//     } 
//     return niz;
// }
// var c=stringToArray("random string");
// console.log(c);
//
//***************8**************

 /*function isPrimeNumber(numb){
     var res="";
     if(numb>1 && numb%1===0 && numb%numb===0){
        res=true;
     }else{
         res=false;
    }
     return res;
 }
 var c=isPrimeNumber(4)
console.log(c);*/

// function isPrime(numb) {
//    for (var i = 2; i < numb; i++) {
//             if (numb % i === 0) {
//                  return false;
//         }
//        }
  
//       return true;
//     }
//      var result = isPrime(12);
//      console.log(result);
//**************9***************

// function separator(strin, b){
//     var a="";
//     for(i=0; i<strin.length; i++){
//         if(strin[i]===" "){
//             a+=b;
//         }else{
//             a+=strin[i]
//         }
//     }
//     return a
// }
// var c=separator("My random string", "_")
// console.log(c);
//
//****************10*********************
// function firstNChar(a, n){
//     var b="";
//     var c="...";
//     for(i=0; i<n; i++){
//         b+=a[i]
//     }
//     b+=c;
//     return b
// }
// var res=firstNChar("stringsdgf", 4)
// console.log(res);
//***************11******************

/*var a=["1", "21", undefined, "42", "1e+3", Infinity];
var niz=[];
for(i=0; i<a.length; i++){
        parseInt(a[i])
        if(a[i]==="number"){
        niz[niz.length]=a[i];
      }
  }

console.log(niz);*/

//***************12**************
// function retairment(yearOfBirth, age){
//     var year=2020;
//     var a;
//     var b;
//     var c="";
//     a=year-yearOfBirth;
//     b=age-a;
//     if(b<0){
//         c="You are retired!"
//     }else{
//         c=b;
//     }
// return c;

// }
// var res=retairment(1991, 65)
// console.log(res);
