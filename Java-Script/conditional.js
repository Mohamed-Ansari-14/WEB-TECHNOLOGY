//if Statement

if(100==100){
    console.log("Equal");
}

//if-else statement

var a = 100;
var b = 500;

if(a==b){
    console.log("Equal");
}else{
    console.log("Not Equal");
}

//else-if statement

// const age = prompt("Enter the age");
// if(age<18){
//     console.log("under 18 years old");
// }else if(age<21){
//     console.log("under 21 years old");
// }else if(age>25 && age<35){
//     console.log("age is between 25 to 35");
// }else{
//     console.log("age is above 35");
// }

//switch case

var days = prompt("Enter the Number 1-7");

switch(days){
    case "1":
        console.log("Sunday");
        break;
    case "2":
        console.log("Monday");
        break;
    case "3":
        console.log("Tuesday");
        break;
    case "4":
        console.log("Wednesday");
        break;
    case "5":
        console.log("Thurday");
        break;
    case "6":
        console.log("Friday");
        break;
    case "7":
        console.log("Saturday");
        break;
    default:
        console.log("Please Enter Between 1-7");
}