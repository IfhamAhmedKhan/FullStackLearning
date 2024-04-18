// Q1 - Create a variable of type string and try to add a number to it
let myName = "Ifham Khan"
let myNumber = 13
console.log(myName+myNumber)

// Q2 - Use typeof operator to find the datatype of the string in last question
console.log(typeof myName)

// Q3 - Create a const object in javascript can you change it to hold a number later?
const item = {
    yourName: "Afnan",
    IsStudent: true
}
//item = 123 (No it cannot)

// Q4 - Try to add a new key to the const object in problem 3 were you able to do it?
item['Age'] = 17
// (Yes it will run without any error since you can change the value of const objects inside it)

// Q5 - Write a js program to create a word meaning dictionary of 3 words
let dict = {
    dead: "the person who is not alive",
    party: "event to celebrate something",
    anger: "state of human emotion or feeling making them aggressive"
}
