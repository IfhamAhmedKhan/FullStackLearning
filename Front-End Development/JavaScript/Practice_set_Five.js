// delete keyword delete the element value not it's space instead of that element now its 1 empty item

let num = [1,2,3,4,5]
delete num[0]
console.log(num)

// sort keyword sort the items in array alphabetically 

let sort_Array = [55,2,33,111,101,567]
sort_Array.sort()
console.log(sort_Array)

// Ascending order sorting for reverse we will do (return b - a)
let compare = (a, b) => {
    return a - b
}
sort_Array.sort(compare)
console.log("Ascending sort: "+ sort_Array)

// splice

sort_Array.splice(3,3,22,11,1)
console.log("Splice: "+ sort_Array)

// map (return new array)
let age_array = [14,51,65,22]
let a = age_array.map((value, index)=> {
    console.log(value, index)
})

// filter 


// reduce 

