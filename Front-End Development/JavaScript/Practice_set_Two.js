// Q1 - Use logical operators to find whether the age of a person lies between 10 and 20
let age = 25
if(age >= 10 & age<21){
    console.log("Yes your age lies between 10 to 20")
}
else{
    console.log("No your age don't lies between 10 to 20")
}

// Q2 - Demonstrate the use of switch case statement in javascript
let day = "Monday"
switch(day){
    case "Monday":
        console.log("day is monday")
        break
    case "Tuesday":
        console.log("day is tuesday")
        break
    case "Wednesday":
        console.log("day is wednesday")
        break
    case "Thursday":
        console.log("day is thursday")
        break
    case "Friday":
        console.log("day is friday")
        break
}

// Q3 - Write a js program to find whether a number is divisible by 2 and 3
myNumber = 18
if(myNumber%2==0) {
    if (myNumber%3==0) {
        console.log("Your number is divisible by 2 and 3")
    }
}
else{
    console.log("No it's not divisible by 2 and 3")
}


// Q4 - Write a js program to find whether a number is divisible by either 2 or 3
yourNumber = 1
if(yourNumber%2==0) {
    console.log("Your number is divisible by 2")
}
else if (yourNumber%3==0) {
    console.log("Your number is divisible by 3")
}
else{
    console.log("No it's not divisible by 2 or 3")
}

// Q5 - Print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator
let myAge = 20
let AgeCondition = myAge>18? "you can drive": "you cannot drive"
console.log(AgeCondition)
