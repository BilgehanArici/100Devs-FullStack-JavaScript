//---Easy
//create a function that subtracts two numbers and alerts the difference
function subsTwoNumbers(num1,num2){
    const sub = num1 - num2
    alert(sub)
}
//subsTwoNumbers(1,2)

//create a function that divides three numbers and console logs the quotient
function dividesThreeNumbers(num1,num2,num3){
    const div = num1/num2/num3
    console.log(div)
}
//dividesThreeNumbers(6,3,2)

//create a function that multiplys three numbers and returns the product
function multipliesThreeNumbers(num1,num2,num3){
    const multp = num1*num2*num3
    return(multp)
}
let prod = multipliesThreeNumbers(1,2,3)
//alert(prod)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function f1ThreeNumbers(num1,num2,num3){
    const f1 = (num1+num2)%num3
    return(f1)
}
let prod2 = f1ThreeNumbers(4,3,2)
alert(prod2)
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
// function f1ThreeNumbers(num1,num2,num3,num4){
//     const f2 = (num1*num2)
//     if(f2>100){
//         const f21 = num3+num4
//         console.log(f21)
//     }else if (f2<100){
//         const f22 = num3-num4
//         console.log(f22)
//     }else if (f2 = 100){
//         const f23 = (num1*num2*num3)%num4
//         console.log(f23)
//     }
//     return(f2)
// }