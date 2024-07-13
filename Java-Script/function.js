// Function:-
//     Block of instruction to perform some specific task according to user requirements.

//Syntax:-
    // function function_name(){

    // }

//function call statement:-
       //function_name();

//Types of Functions:-

//1. Named Function.

function sub()
{
    var a = 100;
    var b = 20;
    console.log(a-b);
}
sub();

//-----------------------------------------------------------------------------------------------------------------------------------------------

//2. Parameterized Function.   //--> It Holds an argument.  //-->Argument is data which is passed by function call statement.

function add(a,b)
{
    console.log(a+b);
}
add(100,200);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//3. Anonymous Function.    //-->A Function Without the Function_Name.

var a = function(){
    console.log("Anonymous Function");
}
a();

var b = function(x,y){
    console.log(x*y);
}
b(5,5);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//4. Nested Function.

function parent(){
    let a = 10;
    //console.log(a+b);       //-->closure:- we can't access the child property inside the parent function.
    function child(){
        let b = 20;
        console.log(a+b);
    }
    return child;
}
parent()(); //-->Calling parent function along with the child function.

//-----------------------------------------------------------------------------------------------------------------------------------------------

//5. Function with Expression.  //--> Storing entire anonymous function in a variable.

//-----------------------------------------------------------------------------------------------------------------------------------------------

//6. Arrow Function.
//Syntax:-  var a=()=>{}

var x= ()=>{console.log("This is a Arrow Function");}
x();

//Whenever we have only one statement , we can skip the flower brackets {}, as well as return statement.
var x= ()=>console.log("This is a Arrow Function without {}");
x();

//if we dont have any parameters at that time we can ignore the ().
var x=_=>console.log("This is a Arrow Function without ()");
x();
var x=(a)=>console.log("");
var x=a=>console.log("");

var y=_=>{return "with return keyword & {}"}
console.log(y());

var y=_=> "Without return keyword & {}"
console.log(y());

//-----------------------------------------------------------------------------------------------------------------------------------------------

//7. CallBack Function:- Function passing as an argument.

function display(sub){
    console.log(sub);
    return sub;
}
var a = display(function(){
    return "Call-Back Function";
})
console.log(a());

//-----------------------------------------------------------------------------------------------------------------------------------------------

//8. Generator Function:- is Defined like a normal function, But in a normal function we can use only one return keyword,
                          //But in Generator Function we can return multiple values by muliple return keyword.


function* gen(){
    yield 1;
    yield 2;
    yield 5;
}

let res = gen()
console.log(res.next().value); //1      //instead of doing like this we can use the looping statement to print.
console.log(res.next().value); //2
console.log(res.next().value); //5

// for(var i=1;i<=3;i++){
//     console.log(res.next().value);
// }

//-----------------------------------------------------------------------------------------------------------------------------------------------

//9. Immediate Invoke Function (IIF):- A Function which is called immediately as soon as a function declaration.

//In anonymous function only we can use th IIF.
//using () we can use IIF.

(function(){
    console.log("Immediate Invoke Function");
})
();     //-->IIF Call statement.

//-----------------------------------------------------------------------------------------------------------------------------------------------

function demo(a,b,c){
    console.log(a+b+c);
    console.log(arguments[4]);  //-->the rest of the arguments will be stored on argument object...we can access it by index value.
}
demo(10,20,30,40,50,60);

//Rest Parameterized Function...    //... which is used to store multiple arguments.
function display2(b,...a){
    console.log(b);         //O/P--> 21
    console.log(a);       //it will print all the elements except 21.
    console.log(a[2]);    //index operation.
}
display2(21,22,23,24,25,26);

//-----------------------------------------------------------------------------------------------------------------------------------------------
