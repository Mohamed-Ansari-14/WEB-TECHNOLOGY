//length
let x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(x.length);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//slice():- used to extract some part of the given String & It Returns the extracted part in the New String.
//slice(start,end) -->Syntax
let str = "Apple, Banana, Kiwi";
console.log(str.slice(7,13));

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Negative Value "slice()"
let str1 = "Apple, Banana, Graphes, Kiwi";
console.log(str1.slice(-13,-6));

//-----------------------------------------------------------------------------------------------------------------------------------------------

//substring():- It not Allow the negative value.

let str3 = "Apple,Banana";
console.log(str3.substring(0,5));

//-----------------------------------------------------------------------------------------------------------------------------------------------

//substr():- It specify the second parameter as length of specific string.

let str4 = "Orange,Apple";      //orange as 6 length.
console.log(str4.substr(0,6));

//-----------------------------------------------------------------------------------------------------------------------------------------------

//replace():-   First Matching Word Will Be Replaced...

var txt = "I am Java Developer";
console.log(txt);
console.log(txt.replace("Java","Full Stack"));

//replace():- Used To Replace All.

//-----------------------------------------------------------------------------------------------------------------------------------------------

//trim():- Remove WhiteSpaces from both the sides.

let t = "            Java                ";
console.log(t.length);
console.log(t.trim().length);

//trimStart     -->Removes Spaces only In Start
//trimEnd       -->Removes Spaces only In End

//-----------------------------------------------------------------------------------------------------------------------------------------------

//indexOf():- 

let i = "Developes Full Stack Developer";
console.log(i.indexOf("Stack"));    //5
console.log(i.indexOf("Java"));     //-1

console.log(i.lastIndexOf("Developer"));    //--> lastIndexOf

//-----------------------------------------------------------------------------------------------------------------------------------------------

//includes():- 

let msg = "hello everyone";
console.log(msg.includes("hello"));     //true
console.log(msg.includes("hi"));        //false

//-----------------------------------------------------------------------------------------------------------------------------------------------

//repeat():-

var x1 = "Developer "
let x2 = x1.repeat(20);
console.log(x2);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//charAt():-

var c = "Hi Guys"
console.log(c.charAt(3));

//-----------------------------------------------------------------------------------------------------------------------------------------------

//charCodeAt():-        Used to Find ASCII Value

let y = "Java Developer"
console.log(y.charCodeAt(1));       //97

//-----------------------------------------------------------------------------------------------------------------------------------------------

//toUpperCase():- 
//toLowerCase():-
//concat():-  

//-----------------------------------------------------------------------------------------------------------------------------------------------

//padStart() , padEnd():- 

var p = "i";
console.log(p.padStart(5,"h"));

var p2 = "h";
console.log(p2.padEnd(10,"i"));

//-----------------------------------------------------------------------------------------------------------------------------------------------

//split():-     Converting String To an Array.

let message = "Hello Everyone"
console.log(message.split(" "));

//-----------------------------------------------------------------------------------------------------------------------------------------------

//join():-      Converting Array To the String.

var array = ["Apple","Banana","Graphes"];
console.log(array.join());

//-----------------------------------------------------------------------------------------------------------------------------------------------