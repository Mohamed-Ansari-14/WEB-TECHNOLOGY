function remove(){
    var x = document.getElementById("unorder");
    x.removeChild(x.firstElementChild)
}

function display(){
    let l = document.createElement("li")
    const msg = document.createTextNode("Springs")
    l.appendChild(msg)
    document.getElementById("demo").appendChild(l)
}

function add(){
    var main = document.getElementById("main");
    let arr = [document.createElement("h2"),document.createElement("h3"),document.createElement("h4"),document.createElement("h5"),document.createElement("h6")]
    arr[0].textContent = "Heading-2";
    arr[1].textContent = "Heading-3";
    arr[2].textContent = "Heading-4";
    arr[3].textContent = "Heading-5";
    arr[4].textContent = "Heading-6";

    arr.forEach(function(ele){
        main.appendChild(ele)
    })
}