//Event Capturing:-  The Event Travels from the root element of the dom tree down to its target element.

// const parent = document.querySelector("div");
// console.log(parent);

// const child = document.querySelector(".child");
// console.log(child);

// parent.addEventListener("click",function(){
//     alert("Clicked Parent...");
// }true)

// child.addEventListener("click",function(){
//     alert("Clicked Child...");
// })

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Event Bubbling:-  The Event Travels first targeted element then its parent.

const parent = document.querySelector("div");
const child = document.querySelector(".child")

parent.addEventListener("click",function(){
    alert("Clicked Parent...");
})

child.addEventListener("click",function(){
    alert("Clicked Child...");
})

//-----------------------------------------------------------------------------------------------------------------------------------------------

//setInterval:-

// var p = document.getElementById("para");
// setInterval(function(){
//     p.innerHTML += "Good Evening All ";
// },2000)

var x = setInterval(demo,1000);

function demo(){
    const d = new Date();
    document.getElementById("para").innerHTML = d.toLocaleTimeString();
}

//clearInterval

function stop(){
    clearInterval(x);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//setTimeout:-

const st = setTimeout(out,5000);

function out(){
    document.getElementById("head").innerHTML = "Hello Everyone..."
}

function stop2(){
    clearTimeout(st);
}

//-----------------------------------------------------------------------------------------------------------------------------------------------