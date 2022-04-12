//--- Easy
//create a variable and assign it a number
let bigo = 4
//minus 10 from that number
bigo -= 10
//print that number to the console
console.log(bigo)
//--- Medium
//create a variable that holds a value from the input
let numba = Number(document.querySelector('input').value)
//add 25 to that number
numba += 25
//alert that number
alert(numba)
//--- Hard
//create a variable that holds the h1
let hello = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
hello.addEventListener('click', run)

function run(){
    console.log(bigo + numba)
}