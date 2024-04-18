// Q1 - What will be the following print in javascript? console.log("har\"".length")
console.log("har\"".length)

// Q2 - Explore the includes, start with & ends with functions of a string
let sentence = "I love my cat, my cat name is kako"
let myPet = "KAKO"
console.log(sentence.includes(myPet))
console.log(sentence.startsWith("I"))
console.log(sentence.endsWith(myPet))

// Q3 - Write a program to convert a given string to lowercase
console.log(myPet.toLowerCase())

// Q4 - Extract the amount out of this string "PLease give Rs 1000"
let line = "PLease give Rs 1000"
let amount = line.slice(15,19)
console.log(amount)

// Q5 - Try to change 4th character of a given string where you able to do it?
let myName = "Ifham"
console.log(myName[0]+myName[1]+myName[2]+"A"+myName[4] )
