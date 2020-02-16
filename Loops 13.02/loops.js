/*for (var number = 10; number > 0; number--) {
    console.log("Number", number)
    for (var inner = 0; inner<5; inner++) {
        console.log("Inner number", inner)
    }
}

for(var x=0; x<=10; x++) {
    console.log(x*x);

}

1.

var a = 0;
for (a = 0; a <= 15; a++) {
    if (a % 2 === 0) {
        console.log("Number\t" + a + "\tis even")
    } else {
        console.log("Number\t" + a + "\tis odd")
    }
}


2.
var result = 0;
for (var a = 0; a < 1000; a++) {
    if (a % 3 === 0 && a % 5 === 0) {
        result = result + a;
    }
}
console.log(result);


3.

var a = [4, 6, 7, 10];
var sum = 0;
var product = 1;
for (var index = 0; index < a.length; index++) {
    sum = sum + a[index];
    product = product * a[index];
}
console.log(sum, product);

4.

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined]
var res = "";
for (var i = 0; i < x.length; i++) {
    res = res + x[i];
}
console.log(res)

5.
var res="";
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
for(i=0; i<a.length; i++){
    res =res+a[i];
}
console.log(res);

6.
var sum=0;
for(var a=0; a<=20; a++){
    var b=a*a;
    sum=sum+b;
}
console.log(sum);

7.
var students=[80, 77, 88, 95, 68];
var sum=0;
var avgGrade=1;
for(i=0; i<students.length; i++){
       sum=sum+students[i];
       avgGrade=sum/5;
}
console.log(avgGrade);
if(avgGrade<60){
    console.log("F");
}else if(avgGrade<70){
    console.log("D");
}else if(avgGrade<80){
    console.log("C");
}else if(avgGrade<90){
    console.log("B");
}else{
    console.log("A");
}*/

8.

for(var a=0; a<=100; a++){
    if(a%3===0){
        console.log(a+"Fizz");        
    }else if(a%5===0&&a%3!==0){
        console.log(a+"Buzz"); 
    }    else{
        console.log(a)
    }
    if(a%5===0&&a%3===0){
        console.log(a+"FizzBuzz")
    }
}



