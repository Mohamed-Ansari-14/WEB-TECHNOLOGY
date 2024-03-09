//Scope:-
    //Which Describes the Boundary or Visibility.
    
//Three types of Scope :-

//1.Global Scope:-       outside the function block

x1 = 10;
var x2 = 100;
let x3 = 1000;
const x4 = 10000;

function demo(){
    console.log(x1);
    console.log(x2);
    console.log(x3);
    console.log(x4);
}
demo();

//2.Local Scope:-       within the function block

function demo2(){
    y1 = 1;
    var y2 = 2;
    let y3 = 3;
    const y4 = 4;
}
demo2();
console.log(y1);     //1

//var, let, const are not possible to access in outside...
// console.log(y2);
// console.log(y3);
// console.log(y4);

//3.Block Level Scope:-    A variable which is declared inside the conditional statements and looping statements.

if(10===10){
    z1 = 111;
    var z2 = 222;
    let z3 = 333;
    const z4 = 444;
}
console.log(z1);    //111
console.log(z2);    //222       //In Block Level Variable We can access the "var" in Outside of the Block...

//let, const are not possible to access in outside...
// console.log(z3);
// console.log(z4);
