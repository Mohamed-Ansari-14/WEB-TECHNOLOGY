//! ES6 Features

// 1. Arrow Function / Fat Arrow Function:-

// var arrowFun = () => {
//     console.log("Arrow Function");
// }

// arrowFun(); //Function Call

// Explicit return
// var sum = () => {
//     let a = 10
//     let b = 20
//     return a+b
// }

// console.log(sum());

//implicit return
// var c = 60;
// var d = 20;
// const add = ()=> c+d    //without return + {} 
// console.log(add());

// 2. Rest Parameter:-(...identifier)   
//-->It is a Parameter, We can Handle infinite number of arguments.
//-->It always return an Array.

// let numbers = (...a)=>{             //parameter
//     console.log(a);
// }

// numbers(10,20,30,40,50,60,70,80,90,100) //argument

// const students = (x,y,...z)=>{
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// students("a","b","c","d","e","f","g","h")

// const rest = (...a)=>{
//     console.log(a);
// }

// rest()

// 3.Spread Operator:- (...identifier)  --> Here identifier will be array or object.
//->spread/separate.
//-->Separating into individual value.

// let names = ["Jhon","Wick","Cena"]

// var spread = (a,b,c) => {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// spread(...names)        //-->Spread Operator

// 4. Destructuring:-
//-->Unpacking/seperating the values from an array or the properties from the object.

//----->>>>Array Destructuring
// let num = [100,300,500,700,900]

// let [a,b,c,d,e] = num

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let studentNames = ["Starc","Berlin","Wick","Jhon","Jessi","France"]

//1-->> Destructure the each values from an array.

// let [s1,s2,s3,s4,s5,s6] = studentNames;

// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4);
// console.log(s5);
// console.log(s6);

//2-->> Destructure only first and last values from the studentNames[] Array.

// let [a1,,,,,a2] = studentNames
// console.log(a1);
// console.log(a2);

//3-->> Destructure first and second values then display from the Third value to End of an Remaining values in the
//form of an Array.

// let [b1,b2,...b3] = studentNames;
// console.log(b1);
// console.log(b2);
// console.log(b3);

//----->>>> Object Destructuring

// let employees = {
//     empName : "Jhon",
//     empSal : 25000
// }

// let {empName,empSal} = employees
// console.log(empName);
// console.log(empSal);

//->Nested Object

let student = {
    studentName : "Hari",
    studentId : 10,
    subject : {
        sub1 : "Tamil",
        sub2 : "English"
    }
}

// 1-->> Destructure all the values in an Object.

let {studentName,studentId, subject:{sub1,sub2} } = student
console.log(studentName);
console.log(studentId);
console.log(sub1);
console.log(sub2);