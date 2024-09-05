// Print all even numbers from 0 – 10
function Even_Number_Generator(){
    for (let i= 0;i<=10;i++){
        if(i%2==0){
            console.log(`${i}`);
        }
        else{
            continue;
        }
    }
}

//Print a table containing multiplication tables
function Table_Printer(TableNum){
    let tableNumber = TableNum;

    for (let i=1;i<=10;i++){
        sum = tableNumber * i;
        console.log(`${tableNumber} X ${i} = ${sum}`);
    }
}

// Create a length converter function
function Kilo_Converter(KiloValue){
    let miles = 1.609;
    let converter = KiloValue/miles;
    console.log(converter)
} 

// Calculate the sum of numbers within an array
function Array_Sum(Arr){
    let answer= 0;
    for (let i=0;i<Arr.length;i++){
        answer = Arr[i]+answer;
    }
    console.log(answer);
}

// Create a function that reverses an array
function Reverse_Array(Arr){
    let RevArray = [];
    let j = 0;
    for (let i = Arr.length-1;i>=0 ;i-- ){
        RevArray[j] = Arr[i];
        j++;
    }
    console.log(RevArray)
}

// Sort an array from lowest to highest
function Sorting_Array(Arr){
    for (let i = 0; i<Arr.length-1;i++){
        for (let j = 0;j<Arr.length-i-1;j++){
            if(Arr[j]>Arr[j+1]){
                let temp = Arr[j];
                Arr[j] = Arr[j+1];
                Arr[j+1] = temp;
            }
        }
    }
    return Arr;
}

// Create a function that filters out negative numbers
function Negative_Filter(Arr){
    for (let i = 0; i <= Arr.length; i++){
        if(Arr[i]<0){
            Arr[i]=0
        }
    }
    console.log(Arr)
}

// Remove the spaces found in a string
function removeSpaces(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            result += str[i];
        }
    }
    
    return result;
}


// Return a Boolean if a number is divisible by 10
function isDivisibleBy10(num) {
    return num % 10 === 0;
}

// Return the number of vowels in a string
function VowelCounter(vowelWord) {
    let vowelArray = ["a", "e", "i", "o", "u"];
    let counter = 0;
    
    for (let i = 0; i < vowelWord.length; i++) {
        let isVowel = false;
        
        // Check manually if vowelWord[i] is in vowelArray
        for (let j = 0; j < vowelArray.length; j++) {
            if (vowelWord[i].toLowerCase() === vowelArray[j]) {
                isVowel = true;
                break;
            }
        }
        
        if (isVowel) {
            counter++;
        }
    }
    
    return counter;
}

// Create a function that finds the maximum number in an array
function MaxFinder(Arr){
    let max = Arr[0];
    for (let i = 1; i < Arr.length ; i++){
        if(max<Arr[i]){
            max = Arr[i];
        }
    }
    console.log(max)
}

// Check if a string is a palindrome
function palindromeChecker(word){
    let wordsArr = [];
    let reverseWord = "";
    for (let i = 0;i < word.length;i++){
        wordsArr[i]=word[i];
    }
    for (let j = wordsArr.length-1;j >= 0;j--){
        reverseWord = reverseWord+wordsArr[j];
    }
    if(word === reverseWord){
        console.log("It is palindrome");
    }
    else{
        console.log("It's not palindrome")
    }
}

// Running output:
Even_Number_Generator();
console.log("--------------------------");
Table_Printer(2);
console.log("--------------------------");
Kilo_Converter(1);
console.log("--------------------------");
let Array = [5,4,3,2,1];
Array_Sum(Array);
console.log("--------------------------");
Reverse_Array(Array);
console.log("--------------------------");
console.log(Sorting_Array(Array));
console.log("--------------------------");
let negArray = [20,-20,5,-3,12]
Negative_Filter(negArray);
console.log("--------------------------");
palindromeChecker("refer");
console.log("--------------------------");
ArrayInput = [6,2,1,5]
MaxFinder(ArrayInput);
console.log("--------------------------");

