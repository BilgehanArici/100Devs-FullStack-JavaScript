// // //Arrays

// // //Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['game of thrones', 'the wire', 'sopranos']
tvShows.forEach(element => console.log(element))



// let tvShows = ['wire', 'sopranos', 'game of thrones']
// tvShows.forEach(element => console.log(element))


// // let powerRangers = ['Mighty Morphin', 'Alien Rangers', 'Zeo']

// // powerRangers.forEach( show => console.log( show ) )

// // //Create and array of numbers
let numbers = [1, 2, 3, 4, 5, 6]



// let nums = [1, 2, 3, 4]


// // let nums = [21, 56, 88, 24, 99,710]
// // //Return a new array of numbers that includes every even number from the previous Arrays
let evenNumbers = array => array.filter(number => number % 2 === 0)
console.log(evenNumbers(numbers))


// this is a function expression. this function takes in an array.
// filter runs through each element and only adds to the variable even Numbers if the 
// condition inside the parantheses are satisfied 



// let onlyEvens = arr => arr.filter(n => n % 2 == 0)

// console.log(onlyEvens(nums))


// // let onlyEvens = arr => arr.filter( n => n % 2 === 0 )

// // console.log( onlyEvens( nums) )


// // //Create a function that takes in an array of numbers
// // //Alert the sum of the second lowest and the second highest number
function numberArray(array) {
    let sortedArray = array.sort((a, b) => a - b)
    alert(sortedArray[1]+sortedArray[sortedArray.length-2])
}
numberArray([1,2,3,4,5,6])



// function numsomania(array) {
//     sortedArray = array.sort((a, b) => a - b)
//     console.log(sortedArray)
//     alert(sortedArray[1] + sortedArray[sortedArray.length - 2])
// }
// numsomania([3, 2, 1, -4, -2, 7, -1, 0])


// // function sumSecondLowAndHigh(arr){
// //     let sorted = arr.sort((a,b)=> a-b)
// //     alert( sorted[1] + sorted[ sorted.length - 2] )
// // }
// // sumSecondLowAndHigh([2,3,1,5,4])