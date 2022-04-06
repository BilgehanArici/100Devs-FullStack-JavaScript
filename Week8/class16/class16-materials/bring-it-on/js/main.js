// *Variables*
// Create a variable and console log the value
// let x = 1
// console.log(x)

// // Create a variable, add 10 to it, and alert the value
// let y = 1
// sum = y+10
// alert(sum)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
// function subsFourNums(n1,n2,n3,n4){
//     let sub = n1-n2-n3-n4
//     alert(sub)
// }
// subsFourNums(4,3,2,1)

// Create a function that divides one number by another and returns the remainder
function divsReturns(n1,n2){
     let div = n1%n2
     return div
}
console.log(divsReturns(12,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoAlertJumanji(n1,n2){
    sum = n1+n2
    if (n1+n2>50){
        alert('jumanji')
    }
}
addTwoAlertJumanji(25,26)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThreeCheckDivByThreeAlertZEBRA(n1,n2,n3){
    if((n1*n2*n3)%3 == 0 ) {
        alert('ZEBRA')
    }
}
multiplyThreeCheckDivByThreeAlertZEBRA(1,1,3)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function takeWordAndNum(word,num){
    for(i=1;i<=num;i++){
        console.log(word)
    }
}
takeWordAndNum(21,21)












