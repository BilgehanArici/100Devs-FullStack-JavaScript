//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5]
console.log(nums.reduce((a,b)=>a+b))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function arrayOfNums(arr){
    return arr.map((element)=>Math.pow(element,2))
}
console.log(arrayOfNums([1,2,3,4,5]))

//Create a function that takes string
//Print the reverse of that string to the console
function stringReverser(str){
    return str.split('').reverse().join('')
}
console.log(stringReverser('bilgehan'))


//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindromeBot(str){
    return str == str.split('').reverse().join('')? 'palindrome': 'not palindrome'
}
console.log(palindromeBot('madam'))
console.log(palindromeBot('nursesrun'))
console.log(palindromeBot('bilgehan'))




