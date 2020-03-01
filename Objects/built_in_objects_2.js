//////// 1 //////////
// Write a JavaScript function that reverses a number. typeof result of the function should be “number”.

// 	12345 -> 54321

// // function reverseNum(num){
//     var a= num.toString().split("").sort(function(a, b){return b-a});
//     var b= a.join("");
//     return parseInt(b)
    
    
// }
// var res = reverseNum(12345);
// console.log(res);

///////// 2 ////////////
// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.

// “Webmaster” -> “abeemrstw”

// function stringOrder(str){
//     return str.toLowerCase().split("").sort().join("");
    

// }
// var res= stringOrder("Webmaster")
// console.log(res);
//////// 3 ///////
// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
	
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

// function alphabetize(str){
//     var a = str.split(" ")
//     var b="";
//     b= a[0].split("").sort().join("")+ " " + a[1].split("").sort().join("") + " " + a[2].split("").sort().join("");
//     return b
    
// }
// var res= alphabetize("Republic Of Serbia")
// console.log(res);
//////////// 4 //////////
// Write a function to split a string and convert it into an array of words.

// 	"John Snow" -> [ 'John', 'Snow' ]

// function converString(str){
//     var a = str.split(" ")
//     return a
// }
// var res = converString("John Snow");
// console.log(res);
/////// 5 /////////
// Write a function to convert a string to its abbreviated form. 

// 	"John Snow" -> 	"John S."

// function abbreviate(str){
//     var a = str.split(" ");
//     a[a.length-1]=a[a.length-1][0]+".";
//     return a.join(" ")
    

// }
// var res=abbreviate("John Snow")
// console.log(res);
////// 6 ///////

// Write a function that adds string to the left or right of string, by replacing it’s characters.

// 	'0000', ‘123’, 'l' -> 0123 
// '00000000', ‘123’, 'r' -> 12300000

// function addElem(str, n)

/////// 7 //////////
// Write a function to capitalize the first letter of a string and returns modified string.

// "js string exercises" -> "Js string exercises"

// function capitalLett(str){
//     var a = str[0].toUpperCase();
//     var b = a + str.slice(1, str.length+1);
//     return b
    
// }
// var res= capitalLett("js string exercises");
// console.log(res);

////////// 9 ///////////

// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
     
// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

// function caps(str){
//     var newStr="";
//     for(var i=0; i<str.length; i++){
//         if(str[i]===str[i].toUpperCase()){
//             newStr+=str[i].toLowerCase();
//         }
//         if(str[i]===str[i].toLowerCase()){
//             newStr+=str[i].toUpperCase();
//         }
       
//     }
//     return newStr
// }

// var res=caps("The Quick Brown Fox");
// console.log(res);

/////// 8 ///////
// Write a function to hide email addresses to protect them from unauthorized users.

// 	"somerandomaddress@example.com" -> "somerand...@example.com"
function hideEmail(str){
    var newStr="";
    newStr=str.slice(0, str.indexOf("@")/2)+"..."+ str.slice(str.indexOf("@"),str.length+1);
    return newStr
    
}
var res= hideEmail("somerandomaddress@example.com");
console.log(res);

