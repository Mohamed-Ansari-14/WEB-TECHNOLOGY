//Dom:-(Documemt Object Model)
    //We can create element by using dom.
    //we can give style for any html elements by using dom.
    //It is possible to create attribute.
    //we can replace the attribute.
    //we can able to remove element or attribute.

//getElementById():-

// var p = document.getElementById("para");
// console.log(p);

// p.style.backgroundColor = "red"
// p.style.fontSize = "30px"

//-----------------------------------------------------------------------------------------------------------------------------------------------

//getElementsByClassName():-

var div = document.getElementsByClassName("div");
console.log(div);

div[1].style.backgroundColor = "purple"
div[2].style.backgroundColor = "yellow"

//-----------------------------------------------------------------------------------------------------------------------------------------------

//getElementsByTagName():-

var h = document.getElementsByTagName("h3")
console.log(h);

h[1].style.backgroundColor = "aqua"

//-----------------------------------------------------------------------------------------------------------------------------------------------

//querySelector():-     Target the First Element only.

// var q = document.querySelector("p");
// console.log(q);
// q.style.backgroundColor = "green"

var qs = document.querySelectorAll(".para")
console.log(qs);

for(var i=0;i<qs.length;i++){
    qs[i].style.backgroundColor="pink";
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//innerHTML:-

var heading = document.getElementById("head");
console.log(heading);
heading.innerHTML = "This is Heading"

//-----------------------------------------------------------------------------------------------------------------------------------------------

//createElement:-

let p = document.createElement("p")
// document.write(p)
console.log(p);
var z = p.innerHTML = "This is Para"
document.write(z)
console.log(p.style.backgroundColor = "hotpink");

//-----------------------------------------------------------------------------------------------------------------------------------------------
