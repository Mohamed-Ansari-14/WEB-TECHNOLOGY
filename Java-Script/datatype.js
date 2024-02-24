//Primitive DataTypes.......

//String is a collection of characters.

//There 3 Ways to represents the String...
//1. "" using double quotes.
//2. '' using single quotes.
//3. `` using backticks.

var names = "Mohamed Ansari"
console.log(names);
console.log("What type of Data-->"+typeof(names));

let x = 'Jerry'
console.log(x);
console.log("What type of Data-->"+typeof(x));

const y = `Deepan`
console.log(y);
console.log("What type of Data-->"+typeof(y));

//Number:- is a primitive datatype used to store the number kind of data
var xn = 10;
console.log(xn);
console.log("What type of Data-->"+typeof(xn));

//Bigint
var bigint = 12345678910n;
console.log(bigint);
console.log("What type of Data-->"+typeof(bigint));

//Symbol
let s = Symbol;
console.log(s);         //-->Empty Function
console.log(typeof(s)); //-->Function

//Boolean
let boo = true;
console.log(boo);
console.log(typeof(boo));

//UnDefined:- Declaring a variable without assigning the value.
let u;
console.log(u);             //undefined
console.log(typeof(u));     //undefined

//null:- Whenever we want to make a any container as a empty container we can use null datatype.
var n = 1234;
console.log(n);

n = null;
console.log(n);
console.log(typeof(n));