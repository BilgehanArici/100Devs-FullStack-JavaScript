// // *Variables*
// // Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let newVar = 'st pattys day'
console.log(newVar.toUpperCase())









// let favHoliday = 'Halloween'
// favHoliday = favHoliday.toUpperCase()
// console.log(favHoliday)

// //Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let newVar2 = 'bilgehan'
alert(newVar2.slice(-3))









// let favPowerRangersSeries = 'Alien Rangers'
// alert(  favPowerRangersSeries.slice(-3)  )

// // *Functions*
// // Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takeFiveNumsSubFromHundred(n1,n2,n3,n4,n5){
    alert(Math.abs(100-n1-n2-n3-n4-n5))
}
takeFiveNumsSubFromHundred(20,20,20,20,30)







 
// function minusFiveAndAbs(n1,n2,n3,n4,n5){
//     let difference = 100 - n1 - n2 - n3 - n4 - n5
//     alert( Math.abs(difference) )
// }
// minusFiveAndAbs(27,83,42,1,5)

// // Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takeThreeNumsLogHighestAndLowest(n1,n2,n3){
    console.log(Math.max(n1,n2,n3))
    console.log(Math.min(n1,n2,n3))
}
takeThreeNumsLogHighestAndLowest(100,1,-40)









// function logHighAndLow(n1,n2,n3){
//     let min = Math.min(n1,n2,n3)
//     let max = Math.max(n1,n2,n3)
//     console.log( `The lowest num is ${min} and the highest num is ${max}`)
// }
// logHighAndLow(100,50,25)

// // *Conditionals*
// //Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails(){
    let result = Math.random()
    if (result < .5){
        return 'heads'
    }else {
        return 'tails'
    }
}
//headsOrTails()

// // function headsOrTails(){
// //     let result = Math.random()
// //     if(result < .5){
// //         return 'heads'
// //     }else{
// //         return 'tails'
// //     }
// // }
// const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails'

// //console.log( headsOrTails() )
// //*Loops*
// //Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function yello(number){
    for(let i =1; i<= number ; i++){
        let result = headsOrTails()
        console.log(result)
    }
}

yello(10)








// function flipFlipFlipadelphia(n){
//     for(let i = 1; i <= n; i++){
//         let result = headsOrTails()
//         console.log(result)
//     }
// }
// flipFlipFlipadelphia(1)