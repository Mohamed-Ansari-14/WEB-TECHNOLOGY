//Array:- 
    //Array is a collection of different elements. Array is a Heterogeneous in nature.
//In JS we can create an array by 3 ways.
//1. By using array literals.
//Syntax:-  var ArrayName = [data1,data2,data3...dataN]

var arr = [14,"Array",null,15.07,true]

for(var i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
}
console.log(arr);
document.write("<br>-----------------------------<br>")

//-----------------------------------------------------------------------------------------------------------------------------------------------

//2. By using new keyword.
//Syntax:-  var ArrayName = new Array()

var arr2 = new Array();
console.log(arr2);
arr2[0] = 1;
arr2[1] = "Data 2"
arr2[2] = "Data 3"
arr2[3] = "Data 4"
arr2[4] = "Data 5"
arr2[5] = "Data 6"

for(var i=0;i<arr2.length;i++){
    document.write(arr2[i]+"<br>");
}
console.log(arr2);
document.write("<br>-----------------------------<br>")

//-----------------------------------------------------------------------------------------------------------------------------------------------

//3. By using Constructor.
//Syntax:-  var ArrayName = new Array(data1,data2,data3...dataN)

var arr3 = new Array("One",2,3,4,"Five",6.0,7,8);

for(var i=0;i<arr3.length;i++){
    document.write(arr3[i]+"<br>");
}
console.log(arr3);
document.write("<br>-----------------------------<br>");

//-----------------------------------------------------------------------------------------------------------------------------------------------

//concat():-  It Returns a new array object that contains two or more merged arrays.

var a = [10,20,30];
var b = ["Java",1995,22];
var c = ["React",123];

console.log(a.concat(b,c));

//-----------------------------------------------------------------------------------------------------------------------------------------------

//push():-  Which is used to add more than one elements at the end of the array.

var x = [1,2,3]
x.push(4,"Java","J2ee");
console.log(x);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//unshift():-   Which is used to add more than one elements at the begining of the given array.

let x2 = [4,5,6,7,8]
x2.unshift(1,2,3);
console.log(x2);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//pop():-  It Removes and returns the last element of an array.

var p = ['js',20,25,true,null,88]
console.log(p);
console.log(p.pop());   //88
console.log(p);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//shift():- It Removes and Returns first element of an array.

var sh = [11,22,33,44,55,66,77]
console.log(sh.shift());    //11
console.log(sh);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//sort():-  It Returns the Element of the given array by in a sorted order.

var so = [10,24,17,9,69];
console.log(so.sort());

var so2 = ["graphes","apple","orange","banana"]
console.log(so2.sort());

//-----------------------------------------------------------------------------------------------------------------------------------------------

//reverse():- 

var rev = [7,6,5,4,3,2,1];
console.log(rev.reverse());

//-----------------------------------------------------------------------------------------------------------------------------------------------

//slice():-  it Returns a new Array Containing the copy of the part of given array.
//slice(Starting point,ending point)

var sl = [10,20,30,40,50,60]
console.log(sl.slice(1,5));     //20,30,40,50
console.log(sl);        //-->It Does not modify the original Array.

//-----------------------------------------------------------------------------------------------------------------------------------------------

//splice():-  It Add/Remove Elements to/from the given array.//It Will Modify the original array.
//splice(starting point,delete count,[add element]);

var sp = [10,25,35,67,99,105,207]
console.log(sp.splice(1,2));
console.log(sp);
// console.log(sp.splice(3,0,70,4,21));
console.log(sp);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//includes():-  
var arr = ["Dhoni",68,"MS"]
console.log(arr.includes("Dhoni"));     //true
console.log(arr.includes(70));          //false

//-----------------------------------------------------------------------------------------------------------------------------------------------

//indexOf():-  It Will Return the index value.

var arr1 = [1,2,3,4,5,6,7,8];
console.log(arr1.indexOf(5));    //4

//-----------------------------------------------------------------------------------------------------------------------------------------------
