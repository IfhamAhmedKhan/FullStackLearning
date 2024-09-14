let name = "John";      // String
let age = 25;           // number
let isStudent = true;   // boolean
let grades = [90, 85, 88]; // Array
let address = { city: "New York", zip: "10001" }; // Object
//let result = null;      // nothing is assign
let x;                  // just a variable decleared with default string type

let score = 75;
score = 85;
console.log(score);

function checkNumber(num) {
    if (num>0){
        console.log("Positive");
    }
    else if (num<0){
        console.log("Negative");
    }
    else{
        console.log("Zero");
    }
}

checkNumber(0);

for (let i = 1; i <=10 ; i++){
    console.log(i);
}

let j = 10;
while(j>=1){
    console.log(j);
    j--;
}

function DayGuess(numValue){
    switch(numValue){
        case 1:
            console.log("Sunday");
            break;
            
        case 2:
            console.log("Monday");
            break;
            
        case 3:
            console.log("Tuesday");
            break;
            
        case 4:
            console.log("Wednesday");
            break;
            
        case 5:
            console.log("Thursday");
            break;
            
        case 6:
            console.log("Friday");
            break;
            
        case 7:
            console.log("Saturday");
            break;
            
        default:
            console.log("Not a day");
            break;
    }
}

DayGuess(2);

function sum(numOne, numTwo){
    return numOne+numTwo;
}

console.log(sum(2,3));

function multiply(a, b) {
    return a * b;
}
let result = multiply(3, 4);
console.log(result);
// Output: 12

function findMax(arr) {
    let greater = arr[0];
    for (let k = 0; k<arr.length ; k++){
        if (greater<arr[k]){
            greater = arr[k]
        }
    }
    return greater
}

let Arr = [1,2,4,3];
console.log(findMax(Arr));

let fruits = ["apple", "banana", "orange"];
fruits.push("grapes")
fruits.splice(0,1)
console.log(fruits)
console.log(fruits.length)

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

car.color = "blue"
console.log(car.color)

car.year = 2021;
console.log(car.year) 

// document.getElementById("myElement").innerHTML = "Hello, World!";
// The code above will get the id of element "myElement" and change the value of its text to "Hello World!" for example if myElement id was assign to a h1 tag then in the html page Hello World! will display its called dom manipulation when we change the value of html tag using js.

let container = document.getElementById("container");
container.style.backgroundColor = "blue";