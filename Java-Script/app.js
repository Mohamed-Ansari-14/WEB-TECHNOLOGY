document.write("Hello Everyone...")
console.log("Console Message...")

var a = 10;
let b = 20;
const c = 30;

document.write(a)
console.log(a);

document.write(b)
console.log(b);

document.write(c);
console.log(c);

// We can't declare seperately and initialize seperately using "const"


//Re-initialization.
var a = 100;        //-->Possible to Re-initialization
console.log(a);

//let b = 200;        //-->IM-Possible to Re-initialization
// const c = 100;     //-->IM-Possible to Re-initialization


//Re-Declaration.
var x = 10;
var x = 100;
console.log(x);

//In "let" and "const" Im-possible to Re-Declaration.


//Moving the declaration part at the top of the original code.
console.log(myvar1);
var myvar1=14;

// console.log(myvar2);
// let myvar2 = 29;

console.log(myvar3);
const myvar3 = 4;

