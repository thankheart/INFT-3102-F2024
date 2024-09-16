console.log('I am running!')


// Variables & Data Types
// var -similar to let(previously global scope)
// let -generic declaration of a variable
// const - constant i.e immutable i.e. cannot change the value of the variable after declaration

//  const myCar ={
//     color: 'red',
//     type: 'ferrari',
//     year: '2025'
//  }

 //Object.freeze(myCar)

// myCar.type = "plane"
// console.log(myCar)

//==============================================================================
// Arrays

// let arr = [1,2,3,4,5]
// console.log(arr[2])  // element at index 2 = 3
// arr.push(7)  // Appends to the end of an array
// arr.pop(7)  // Remove an item from the end of the array
// //arr.shift() and arr.unshift()   removes/adds  from beginning an array
// console.log(arr)

// // Objects

// var myCar ={
//     color: 'red',
//     type: 'ferrari',
//     year: '2025'
// }

// //Object.freeze(myCar)
// myCar.type = "plane"
// console.log(myCar)
// console.log([1,2,3])

// // Conditions  & Loops
// let weather = 'rain'
// let outfit

// if (weather == 'rain'){
//     outfit = 'raincoat'
// } else {
//     outfit= 'no raincoat'
// }

// const numberOne = prompt("Please pick the first number")
// const operator = prompt("Choose an operator from the following: + - / * ")
// const numberTwo = prompt(" Pleas pick the second number")

// const numberOne = parseFloat(prompt("Please pick the first number"));
// const operator = prompt("Choose an operator from the following: + - / * ");
// const numberTwo = parseFloat(prompt("Please pick the second number"));

// let result;

// if (operator == '+') {
//     result = numberOne + numberTwo;
// } else if (operator == '-') {
//     result = numberOne - numberTwo;
// } else if (operator == '/') {
//     result = numberOne / numberTwo;
// } else if (operator == '*') {
//     result = numberOne * numberTwo;
// } else {
//     console.log('Invalid operator');
// }

// console.log(`Your result is: ${result}`);

//============================================================================
// Functions/Scope/Callback
// console.log(sum(5,10))

// Function Declarations --> Are HOISTED --> they have global scope
// function sum(a,b){
//     return a + b
// }

// Function Expressions
// const sum function (a,b){
//     return a + b
// }        // it will not working 

// // Arrow Functions
// //const sum = (a,b) => a + b

// function outerFn(){
//     let num1 = 5
//     function innerFn(){
//         let num2 = 10
//         console.log(num1)
//     }
//     console.log(num2)
// }
// outerFn()

// CallBack Functions

let arr = [1,2,3,4,5,6,7,8]

// for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] + 5
// }

// arr.forEach(num => num + 5)
// arr.forEach(function(num)  {
//     return num + 5
// })

// arr.forEach(num => num + 5)
// arr.forEach(function(num)  {
//     return num + 5
// })
// console.log(arr)


let forArray = arr.forEach(num => num + 5)
let newArray = arr.map(function(num)  {
    return num + 5
})
console.log(forArray)

console.log(newArray)


// Classes / Inheritance

// class Car {
//     constructor(type){
//         this.type = type;
//         this.engineIsOn = false
//     }

//     turnEngineOn(){
//         this.engineIsOn = true
//         console.log("Engine has been trurned on!")
//     }
// }


function Car(type){
    this.type = type
    this.turnEngineOn = function(){
        this.engineIsOn = true
        console.log("Engine has been trurned on!")
    }
}
let myCar = new Car("Ferrari")
myCar.turnEngineOn()

let car = {
    type: "ferrari",
    price: "$999999",
    client: "person",
    color: 'red',
    turnEngineOn: function() {

    }
}


// Asynchronous/Promises / Fetch /Async Await JavaScript

let snow 

//






