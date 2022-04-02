// *Variables*
// Create a variable and console log the value
let bigo = 13
console.log(bigo)
// Create a variable, add 10 to it, and alert the value
let aysen = 10
aysen += 10
alert(aysen)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(num1,num2,num3,num4){
    const sub = num1-num2-num3-num4
    alert(sub)
}
subtractFourNumbers(1,2,3,4)
// Create a function that divides one number by another and returns the remainder
function remainder(num1,num2){
    const remainder = num1%num2
    return remainder
}
alert(remainder(4,3))
console.log(remainder(4,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(num1,num2){
    const sum = num1+num2 
    if (sum>50){
        alert('jumanji')
    }
}

jumanji(25,26)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyTrio(num1,num2,num3){
    const multp = num1*num2*num3
    if(multp%3==0){
        alert('zebra')
    } 
}

multiplyTrio(1,2,3)