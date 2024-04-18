// Q1 - Write a program to print the marks of a student in an object using for loop
let marks = {
    Ifham: 90,
    Afnan: 83,
    Aayan: 85,
    Asad: 70
}

for (let index = 0; index < Object.keys(marks).length; index++) {
    console.log("The marks of " + Object.keys(marks)[index] + " is: "+ marks[Object.keys(marks)[index]])
}

// Q2 - write the program of Q1 using for in loop
for (let i in marks) {
    console.log("The marks of "+ i +"is: " + marks[i])
}

// Q3 - Write a program to print "try again" until the user enters the correct number 
userNumber = 10
myNumber = 13


// Q4 - Write a function to find mean of 5 numbers 
const mean = (...numbers) => {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}

console.log(mean(5, 5, 5, 5, 5));
