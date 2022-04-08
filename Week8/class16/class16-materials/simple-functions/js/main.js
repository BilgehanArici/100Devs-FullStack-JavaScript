// //---Easy
// //create a function that subtracts two numbers and alerts the difference
// function subTwoNumsAlertDiff(n1,n2){
//     const sub = n1-n2
//     alert(sub)
// }
// subTwoNumsAlertDiff(1,2)

// function subTwoNumsAndAlert(n1,n2){
//     alert( n1 - n2)
// }
// // subTwoNumsAndAlert(50,30)
// // subTwoNumsAndAlert(100,33)

// // //create a function that divides three numbers and console logs the quotient
// function divThreeNumsLogsQuotient(n1,n2,n3){
//     quotient = n1/n2/n3
//     console.log(quotient)
// }
// divThreeNumsLogsQuotient(6,2,2)


// function dividesThreeNumsAndLogs(zebra,forest,unicorn){
//     console.log( zebra / forest / unicorn )
// }
// // dividesThreeNumsAndLogs(12,4,3)

// //create a function that multiplys three numbers and returns the product

// function multiplyThreeNumReturnProduct(n1,n2,n3){
//     const prod = n1*n2*n3
//     return(prod)
// }
// alert(multiplyThreeNumReturnProduct(1,2,3))

// function multiplyThreeNumsAndReturn(num1,num2,num3){
//     return num1 * num2 * num3
// }
// function turnIntoMoney(){
//     let product = multiplyThreeNumsAndReturn(5,10,2)
//     alert( '$' + product)
// }

// // turnIntoMoney()


// //---Medium
// // //create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
// function addsFirstTwoNumsDivsByThird(n1,n2,n3){
//     const prod = (n1+n2)%n3
//     return(prod)
// }
// alert(addsFirstTwoNumsDivsByThird(1,2,3))
// whenever you see remainder you must use modulus


// function addTwoAndDivide(n1,n2,n3){
//     return (n1 + n2) % n3
// }
// console.log(addTwoAndDivide(3,3,2))

// //---Hard
// //create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function jumanji(n1,n2,n3,n4){
    const st1 = n1*n2
    if(st1>100){
        console.log(n3+n4)
    }else if(st1<100){
        console.log(n3-n4)
    }else{
        alert((n1*n2*n3)%n4)
    }
}

jumanji(2,50,3,4)






