// // delete keyword delete the element value not it's space instead of that element now its 1 empty item

// let num = [1,2,3,4,5]
// delete num[0]
// console.log(num)

// // sort keyword sort the items in array alphabetically 

// let sort_Array = [55,2,33,111,101,567]
// sort_Array.sort()
// console.log(sort_Array)

// // Ascending order sorting for reverse we will do (return b - a)
// let compare = (a, b) => {
//     return a - b
// }
// sort_Array.sort(compare)
// console.log("Ascending sort: "+ sort_Array)

// // splice

// sort_Array.splice(3,3,22,11,1)
// console.log("Splice: "+ sort_Array)

// // map (return new array)
// let age_array = [14,51,65,22]
// let a = age_array.map((value, index)=> {
//     console.log(value, index)
// })

// // filter 
// let arr2 = [5,4,32,14,5]
// let a2 = arr2.filter((a)=> {
//     return a<5
// })
// console.log(a2)

// // reduce 
// let arr3 = [4,2,1,4,2,5]
// let a3 = arr3.reduce((I, J)=> {
//     return I + J
// })

// console.log(a3)

// --------------------------------------------------------

// Q1 - create an array of numbers and take input from the user to add numbers to this array


// Q2 - Keep adding numbers to the array in 1 until 0 is added to the array


// Q3 - filter for numbers divisible by 10 from a given array


// Q4 - create an array of square of given numbers 


// Q5 - Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated)
let fact_arr = []
let UserN = prompt("Enter number: ")
let IntN = parseInt(UserN)
for (let i = 0;i<IntN;i++){
    fact_arr[i] = i
}
let fact = fact_arr.reduce((a,b)=>{
    return a+b
})

console.log(fact)
