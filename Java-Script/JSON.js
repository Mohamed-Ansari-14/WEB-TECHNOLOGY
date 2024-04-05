// JSON:- JavaScript Object Notification.

var person = {
    name:"Gopi",
    sal:"10 Lpa",
    hobbies:["Game","Music","Cooking","Criket","Coding"],
    add:{
        area:"XYZ Area",
        city:"ABC"
    }
}

console.log(person);

var res = JSON.stringify(person);   //converts a JavaScript value to a JSON string.
console.log(res);

console.log(JSON.parse(res));       //Converts a Json Object to JavaScript Object.

//-----------------------------------------------------------------------------------------------------------------------------------------------

//Promise Object:-  There is 3 State-->(1.Fulfilled State, 2.Rejected State, 3.Pending state)

let p = new Promise((resolve,reject)=>{
    let data = true;
    if(data){
        resolve("Data Success");
    }
    else{
        reject("Error");
    }
});

console.log(p);

p.then(function(data){      //then will work only if the promise is in fulfilled state.
    console.log(data);
})

p.catch(function(data){     //catch will work only if the promise is in rejected state.
    console.log(data);
})

p.finally(function(data){      //finally will work in both the fulfilled and rejected state.
    console.log(data);
})

//-----------------------------------------------------------------------------------------------------------------------------------------------