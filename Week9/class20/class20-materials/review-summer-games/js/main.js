// //Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function takesArrayOfNumsMultipliesThemFor(array) {
    let multiplication = 1
    for (i = 0; i <= array.length-1; i++) {
        multiplication *= array[i]
    }
    alert(multiplication)
}
takesArrayOfNumsMultipliesThemFor([1, 2, 3, 4, 5])


function takesArrayOfNumsMultipliesThemForEach(array) {
    let multiplication = 1
    array.forEach(element => {
        multiplication *= element
    })
    alert(multiplication)
}
takesArrayOfNumsMultipliesThemForEach([5, 6, 7, 8])






// function multiNumsInArr(arr){
//     let product = 1
//     arr.forEach( num => product *= num )
//     // for(let i = 0; i < arr.length; i++){
//     //     product *= arr[i]
//     // }

//     alert(product)
// }
// multiNumsInArr([10,2,3])