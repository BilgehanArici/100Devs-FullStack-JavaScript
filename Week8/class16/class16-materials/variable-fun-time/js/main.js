//--- Easy
//create a variable and assign it a number
let x = 2
//minus 10 from that number
x = x-10
//print that number to the console
console.log(x)
//--- Medium
//create a variable that holds a value from the input
let bigo = Number(document.querySelector('#danceDanceRevolution').value)
//add 25 to that number
bigo =+ 25
//alert that number
alert(bigo)
//--- Hard
//create a variable that holds the h1
const click = document.querySelector('h1')
//add an event listener to that element that console logs the sum of the two previous variables
click.addEventListener('click', func)

function func(){
    console.log(x+bigo)
}
