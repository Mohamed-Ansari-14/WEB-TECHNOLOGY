//Object:- 
    // In JavaScript Object is an Entity Having State(Properties) & Behaviour(Methods).
    // Object is used to store the data in the form of key & value pairs.

// In Js we can create a Object in 3 ways:- 

//1. By using object literals.

var emp = {
    eid:24,
    eName:"Gopi",
    eSal:15000
}

console.log(emp);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//2. By using new keyword.

var student = new Object();
console.log(student);
student.id=10;
student.name="Deepan"
console.log(student);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//3. By using Constructor Function.

function emp1(id,name,sal){
    this.id = id;
    this.name = name;
    this.sal = sal;
}

var emp2 = new emp1(69,"Ragul",20000);
console.log(emp2.id);
console.log(emp2.name);
console.log(emp2.sal);

//-----------------------------------------------------------------------------------------------------------------------------------------------

var obj = {
    id:12,
    name:"abc",
    sal:100
}

var obj2 = {
    eId:8,
    eName:"pqr",
    eSal:200
}

console.log(obj);

//Object
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(Object.assign(obj,obj2));       //-->assign will merge the objects...

// //dot notation:-
// console.log(obj.id);
// // [] Bracket notation:-
// console.log(obj['name']);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Is It Possible to iterate the object by using for Loop or not.
//It is Possible to iterate using "keys".

let x = {
    name:'abc',
    age:21,
    add:"zzz"
}

console.log(x);

for(let z in x){                //for in loop:-     iterate based on keys         
    console.log(z+":"+x[z]);
}

let k = Object.keys(x);
console.log(k);
for(let i=0;i<k.length;i++){
    var z = k[i];
    console.log(z+" : "+x[z]);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//for of loop:-     //iterate based on values

let person = {
    name:"Mark",
    sal:20000,
    company:"Zoho"
}

console.log(person);

for(let x of Object.values(person)){
    console.log(x);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//for each loop:-

const arr = [1,2,3,"zoho",true]

arr.forEach(ele =>{
    console.log(ele);
})

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Date & Time Object:-

const d = new Date();
console.log(d);

//new Date(date String)
let dt = new Date("march 10,2000 7:20:21")
console.log(dt);

//new Date(year,month)
var s = new Date(2000,5)
console.log(s);

//new Date(year,month,day)
let xd = new Date(2002,1,10)    //in Js the month start from 0 to 11.
console.log(xd);

// new Date(year,month,day,hours)
// new Date(year,month,day,hours,min)
// new Date(year,month,day,hours,min,sec)
// new Date(year,month,day,hours,min,sec,ms)

//-----------------------------------------------------------------------------------------------------------------------------------------------

//filter():-

var arr3 = [1,2,3,4,5]
let res = arr3.filter(x=>x%2==0)
console.log(res);

//-----------------------------------------------------------------------------------------------------------------------------------------------

//reduce():-

let n = [21,31,41,51,61,71]
console.log(n);
let r = n.reduce((pre,ele,index,n)=>{
    console.log(pre,ele,index,n);
    return pre+ele;
},0)

console.log(r);