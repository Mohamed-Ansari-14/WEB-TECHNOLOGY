//1.Write a JS Program to Display Biggest Element in the Array.

var arr1 = [10,40,25,99,23,79]
document.write("--------------------------------------------------------"+"<br>")

document.write("Largest Element in an Array: "+"<br>")
document.write(arr1.sort().pop()+"<br>");

document.write("--------------------------------------------------------"+"<br>")

//-----------------------------------------------------------------------------------------------------------------------------------------------

//2.Write a JS Program to Display Smallest Element in the Array.

var arr2 = [40,25,99,23,79,10]
document.write("--------------------------------------------------------"+"<br>")

document.write("Smallest Element in an Array: "+"<br>")
document.write(arr2.sort().shift()+"<br>");

document.write("--------------------------------------------------------"+"<br>")

//-----------------------------------------------------------------------------------------------------------------------------------------------

//3.Write a JS Program to Display Element in Decending Order.

var arr3 = [40,46,90,25,99,23,11,79,69,10]
document.write("--------------------------------------------------------"+"<br>")

document.write("Array Elements in Decending Order: "+"<br>")
document.write(arr3.sort().reverse()+"<br>");

document.write("--------------------------------------------------------"+"<br>")

//-----------------------------------------------------------------------------------------------------------------------------------------------

//4.Write a JS Program to Display Biggest Element in the Array without modifying existing array.

var arr4 = [40,25,99,79,69,10]
document.write("--------------------------------------------------------"+"<br>")

document.write("Largest Element in an Array without Modifying Original Array: "+"<br>")
document.write(arr4.sort().slice(arr4.length-1,arr4.length)+"<br>");

document.write("--------------------------------------------------------"+"<br>")

//-----------------------------------------------------------------------------------------------------------------------------------------------

//5.Write a JS Program to Display Smallest Element in the Array without modifying existing array.

var arr5 = [40,25,99,79,69,10]
document.write("--------------------------------------------------------"+"<br>")

document.write("Smallest Element in an Array without Modifying Original Array: "+"<br>")
document.write(arr5.sort().slice(0,1)+"<br>");

document.write("--------------------------------------------------------"+"<br>")

//-----------------------------------------------------------------------------------------------------------------------------------------------