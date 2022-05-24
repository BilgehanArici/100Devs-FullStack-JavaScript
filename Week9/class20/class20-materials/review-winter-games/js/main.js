// //Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function killWindmill(array) {
    let newArr = []
    array.forEach(element => {
        if (element % 2 == 0){
            newArr.push(element)
        }
    })
    return newArr
}
console.log(killWindmill([1,2,3,4,5]))







// function onlyEvens(nums) {
//     let evens = []
//     nums.forEach(element => {
//         if (element % 2 == 0){
//             evens.push(element)
//         }
//     })
//     return evens
// }
// console.log(onlyEvens([1,2,3,4,5,6]))










// function onlyEvens(nums){
//     let evens = []

//     nums.forEach( n => {
//         if(n % 2 === 0){
//             evens.push(n)
//         }
//     })

//     return evens
// }

// console.log( onlyEvens([1,2,3,4,5,6]) )