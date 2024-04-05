//onclick Event:-

function demo(){
    document.getElementById("para").innerHTML = "Hello Everyone..."
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//click Event:-

var btn = document.getElementById("btn");
btn.addEventListener('click',function(){
    document.write("Hello World")
})

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Double Click:-

function display(){
    alert("Button Pressed !!!")
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//On Mouse Over:-

var div = document.getElementById("div");
div.onmouseover = function(){
    div.style.backgroundColor = "hotpink";
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//On Mouse Up:-

var button = document.getElementById("btn2");
button.onmouseup = function(){
    alert("This is a Mouse-Up")
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//On Key Press:-

function keypress(){
    alert("onKeyPress");
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Disable Context Menu:-

let context = document.getElementById("div2");
context.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
})

//-----------------------------------------------------------------------------------------------------------------------------------------------

//onsubmit:- 

function submitform(){
    alert("Form Submitted Successfully !!!")
}

//-----------------------------------------------------------------------------------------------------------------------------------------------