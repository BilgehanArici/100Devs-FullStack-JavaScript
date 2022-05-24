// // // *Variables*
// // // Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = 'iskeneder'
console.log(favoriteFood)




// let favoriteFood = 'chicken'
// alert(favoriteFood)









// // let favFood = 'Dominos'
// // favFood = 'Vegan Pho'
// // //alert(favFood)

// // //Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let newVar = 'bigoli'
console.log(newVar[1])
console.log(newVar.charAt(1))




// let strVar = 'bilgehan'
// alert(strVar.charAt(1))
// alert(strVar[1])








// // let str = 'Hello, Twitch!'
// // //alert( str[1] )
// // //alert( str.charAt(1) )

// // // *Functions*
// // // Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function robotBoi(n1, n2, n3) {
    return ((n1 / n2) * n3)
}
console.log(robotBoi(2, 2, 3))




// function takesInThreeNumbersDivFirstTwoNumsMultopliesTheLast(n1, n2, n3) {
//     let prod = (n1 / n2) * n3
//     alert(prod)
// }
// takesInThreeNumbersDivFirstTwoNumsMultopliesTheLast(4, 2, 3)










// // function divideAndMulti(n1,n2,n3){
// //     let prod = (n1/n2) * n3
// //     alert(prod)
// // }

// // //divideAndMulti(12,3,4)


// // // Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function robotHoii(num) {
    return Math.cbrt(num)
}
console.log(robotHoii(27))




// function takeOneNumLogCubeRootOfNum(num) {
//     console.log(Math.cbrt(num).toFixed(4))
// }
// takeOneNumLogCubeRootOfNum(9)









// // function cubeRootIt(robot){
// //     console.log( Math.cbrt(robot).toFixed(4) )
// // }
// // //cubeRootIt(9)

// // // *Conditionals*
// // //Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function haloMalo(month) {
    if (month.toLowerCase() == 'june' || month.toLowerCase() == 'july' || month.toLowerCase() == 'august') {
        return 'YAY'
    } else {
        return 'NAH'
    }
}
console.log(haloMalo("AuguSt"))
console.log(haloMalo("may"))



// function monthChecker(month) {
//     if (month.toLowerCase() == 'june' || month.toLowerCase() == 'july' || month.toLowerCase() == 'august') {
//         alert('yay')
//     } else {
//         alert('boo')
//     }
// }

// monthChecker('August')







// // // function checkForSummer(month){
// // //     let monthLowerCase = month.toLowerCase()
// // //     if(monthLowerCase === 'june' || monthLowerCase === 'july' || monthLowerCase === 'august'){
// // //         alert('Yay')
// // //     }else{
// // //         alert('Boo')
// // //     }
// // // }

// // //*Loops*
// // //Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function checkerMekker(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 5 != 0) {
            console.log(i) 
        }
    }
}
checkerMekker(33)



// function skipFives(number) {
//     for (let i = 1; i <= number; i++) {
//         if (i % 5 !== 0) {
//             console.log(i)
//         }
//     }
// }
// skipFives(10)









// // function skip5s(n){
// //     for(let i = 1; i <= n; i++){
// //         if(i % 5 !== 0 ){
// //             console.log(i)
// //         }
// //     }
// // }
// // skip5s(15)