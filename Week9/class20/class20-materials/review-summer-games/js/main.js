// // // //Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function bored(array){
    let total = 1
    array.forEach(element=>{
        total*=element
    })
    return total
}
console.log(bored([1,2,3,4,5]))

function boredFor(array){
    let total =1 
    for(i=1;i<=array.length-1;i++){
        total*=array[i]
    }
    return total
}

console.log(boredFor([1,2,3,4,5]))





// function optimusCrimeFor(array) {
//     let multiplication = 1
//     for (i = 0; i <= array.length - 1; i++) {
//         multiplication *= array[i]
//     }
//     return multiplication
// }
// console.log(optimusCrimeFor([2,2,2,2]))


// function optimusCrimeForEach(array) {
//     let multiplication = 1
//     array.forEach(element => {
//         multiplication *= element
//     })
//     return multiplication
// }
// console.log(optimusCrimeForEach([2, 2, 2]))







// function takesArrayOfNumsMultipliesThemFor(array) {
//     let multiplication = 1
//     for (i = 0; i <= array.length-1; i++) {
//         multiplication *= array[i]
//     }
//     alert(multiplication)
// }
// takesArrayOfNumsMultipliesThemFor([1, 2, 3, 4, 5])


// function takesArrayOfNumsMultipliesThemForEach(array) {
//     let multiplication = 1
//     array.forEach(element => {
//         multiplication *= element
//     })
//     alert(multiplication)
// }
// takesArrayOfNumsMultipliesThemForEach([5, 6, 7, 8])






// // function multiNumsInArr(arr){
// //     let product = 1
// //     arr.forEach( num => product *= num )
// //     // for(let i = 0; i < arr.length; i++){
// //     //     product *= arr[i]
// //     // }

// //     alert(product)
// // }
// // multiNumsInArr([10,2,3])