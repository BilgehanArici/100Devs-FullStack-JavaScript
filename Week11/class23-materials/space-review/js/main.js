// //Arrays

// //Create and array of numbers. Sum all of the numbers. Alert the sum.
let nums = [1,2,3,4,5]
console.log(nums.reduce((acc,c)=> acc+c, 0))




// let nums = [10,20,30,50]

// //alert( nums.reduce( (robot,dino) => robot + dino, 0 ) )


// //Create a function that takes in an array of numbers
// //Return a new array of numbers that is every original number squared
let newArr = nums.map(value => Math.pow(value,2))
console.log(newArr)



// //let newArr = nums => nums.map( num => num**2 )


// //Create a function that takes string
// //Print the reverse of that string to the console
function stringDawg (str) {
    return str.split('').reverse().join('')
}
console.log(stringDawg('bilgehan'))




// let unoReverse = str => str.split('').reverse().join('')

// //Create a function that takes in a string
// //Alert if the string is a palindrome or not
function palindromeChecker(str){
    return str == str.split('').reverse().join('') ? 'it be a palindrome' : 'it do not be a palindrome '
}
console.log(palindromeChecker('abba'))
console.log(palindromeChecker('abo'))





// const palindromeCheck = str => alert( str === unoReverse(str) )

// palindromeCheck('racecar')