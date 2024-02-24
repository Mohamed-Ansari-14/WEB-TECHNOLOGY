//Arithmetic Operator:-

var a = 10;
var b = 20;

console.log(a+b);   //30
console.log(a-b);   //-10
console.log(a*b);   //200
console.log(a/b);   //0.5
console.log(a%b);   //10

console.log(a);     //10
console.log(a++);   //10
console.log(a);     //11
console.log(++a);   //12

console.log(b);     //20
console.log(b--);   //20
console.log(b);     //19
console.log(--b);   //18

//Logical operator:-
var c = 30;
var d = 40;

console.log(c==30 && d==10);    //false
console.log(c==30 || d==10);    //true

console.log(! false);  //true   

//Relational or Comparison Operator:- 

var x1 = 50;
var x2 = 100;

console.log(x1<x2);  //true
console.log(x1>x2);  //false
console.log(x1<=x2); //true
console.log(x1>=x2);  //false
console.log(x1==x2);  //false
console.log(x1!=x2);  //true
console.log(x1===x2); //false

//Assignment Operator:-

var x = 20;

console.log(x+=10);     //30
console.log(x-=10);     //20
console.log(x*=10);     //200
console.log(x/=10);     //20
console.log(x%=10);     //0
console.log(x=10);      //10

//Ternary Operator:-

var z1 = 10;
var z2 = 20;

console.log((z1<z2) ? z1 : z2); //10
