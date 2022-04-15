// let Age = 24
// let Name = 'Bilgehan Arici'

// console.log(Age)
// console.log(Name)

// function simpleCalculator(n1,n2){
//     const sum = n1+n2
//     const sub = n1-n2
//     const multip = n1*n2
//     const div = n1/n2
//     console.log(sum)
//     console.log(sub)
//     console.log(multip)
//     console.log(div)
// }

// simpleCalculator(6,3)

// console.log(4 + 5);
// console.log("4 + 5");
// console.log("4" + "5");


// const name = prompt('enter your name')
// alert(`hello ${name}`)

// const firstName = prompt('what is your first name')
// const lastName = prompt('what is your last name')
// alert(`hello ${firstName} ${lastName}`)

// 2
// 10
// 102
// 30
// 40
// 10
// 10/4

// let a = 2;
// a -= 1;
// a++;
// let b = 8;
// b += 2;
// const c = a + b * b;
// const d = a * b + b;
// const e = a * (b + b);
// const f = a * b / a;
// const g = b / a * a;
// console.log(a, b, c, d, e, f, g);

// let rawPrice = Number(prompt('give me the RAW price'))

// let finalPrice = (rawPrice*120.6/100)
// alert(finalPrice)

// let celcius = Number(prompt('give me celcius'))

// let fahrenheit = (celcius*9/5)+32

// alert(fahrenheit)

// let number1 = 5;
// let number2 = 3;

// // TODO: type your code here (and nowhere else!)
// let temp 
// temp = number1
// number1 = number2
// number2 = temp



// //////////////////////////////////////

// console.log(number1); // Should show 3
// console.log(number2); // Should show 5
// //This exercise has several valid solutions. You may use more than two variables to solve it.

// const number = Number(prompt('enter a number'))
// if (number>0){Mon
//     alert('number is positive')
// }

// const day = prompt('gimme a day').toLowerCase()
// switch (day) {
//     case 'monday':
//         alert('tuesday')
//         break
//     case 'tuesday':
//         alert('wednesday')
//         break
//     case 'wednesday':
//         alert('thursday')
// }

// if (day == 'thursday'){
//     alert('friday')
// }else if (day == 'friday'){
//     alert('saturday')
// }else if (day== 'saturday'){
//     alert('sunday')
// }

// const firstNum = Number(prompt('give me a number'))
// const secondNum = Number(prompt('give me another number'))

// if(firstNum>secondNum){
//     alert('first num is greater than second num')
// }else if(secondNum>firstNum){
//     alert('second num is greater than first num')
// }else if (firstNum===secondNum){
//     alert('these numbers are the same')
// }else{
//     alert('try again')
// }

// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

// if (nb1 > nb2) {
//   nb1 = nb3 * 2;
// } else {
//   nb1++;
//   if (nb2 > nb3) {
//     nb1 += nb3 * 3;
//     console.log('exec')
//   } else {
//     nb1 = 0;
//     nb3 = nb3 * 2 + nb2;
//   }
// }
//  console.log(nb1, nb2, nb3);

// const month = Number(prompt('gimme a month in numba'))

// if (month == 1|| month ==3){
//     console.log('31')
// }else if (month == 2||month == 42){
//     console.log('30')
// }else {
//     console.log('try again')
// }


// let hour = Number(prompt('gimme an hour'))
// let minute = Number(prompt('gimme a minute'))
// let second = Number(prompt('gimme a second'))
// //working program
// if (second == 59 && minute == 59 && hour ==23){
//     second = 0
//     minute = 0 
//     hour = 0
//     console.log(`${hour}h${minute}m${second}s`)
// }else if (second == 59 && minute == 59){
//     second = 0
//     minute = 0 
//     console.log(`${hour+1}h${minute}m${second}s`)
// }else if (second == 59){
//     second = 0
//     console.log(`${hour}h${minute+1}m${second}s`)
// }else if (second == 59){
//     second = 0
//     console.log(`${hour}h${minute+1}m${second}s`)
// }else {
//     console.log(`${hour}h${minute}m${second+1}s`)
// }

// //another iteration
// if (second==59 && minute !=59 && hour!=59){
//     second = 0
//     console.log(`${hour}h${minute+1}m${second}s`)
// }else if (second==59 && minute ==59 && hour!=59){
//     second = 0
//     minute = 0 
//     console.log(`${hour+1}h${minute}m${second}s`)
// }else if (second==59 && minute ==59 && hour==23){
//     second = 0
//     minute = 0 
//     hour = 0
//     console.log(`${hour}h${minute}m${second}s`)
// }else {
//     console.log(`${hour}h${minute}m${second+1}s`)
// }

// let number = prompt('give me a turn number for your carousel')

// for (i=1;i<=number;i++){
//     console.log(i)
// }

// let i =1
// const number = Number(prompt('give me a turn count'))

// while(i<=number){
//     console.log(i)
//     i++
// }

// for (let i = prompt('give me numba'); i<=10; i++){
//     if (i%2 != 0){
//         console.log(`${i} is odd`)
//     }
// }

// input validation

// kullanici bir sayi belirlesin
// eger bu sayi 100 den kucuk ya da 100 e esit degilse
// kullanicidan tekrar sayi istensin
// oyle ise programi durdur

// let number = prompt('give me a number less than or equal to 100')

// while (number>=100 || number<=50){
//     number = prompt('give me a number less than or equal to 100')
// }

// Multiplication table
// Write a program that 
//asks the user for a number, 

//then shows the multiplication table for this number.
// let i = 1
// for (let number = prompt('give me a numba');i<=10;i++){
//     console.log(`${number}*${i}=${number*i}`)
// }

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

// //asks the user for a number, 
// let i = 1
// let number = prompt('give me numba')
// //then shows the multiplication table for this number if numbers between 2 and 9 
// if (number < 9 && number > 2) {
//     for (number; i <= 10; i++) {
//         console.log(`${number}*${i}=${number * i}`)
//     }
// } else if (number > 9 || number < 2) {
//     alert('thats not between 2 and 9 ')
// }
// // if not keeps asking (question)

// Neither yes nor no
// Write a program that plays 
// //"neither yes, nor no" with the user. Specifically, 
// the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
// let answer = prompt('give an answer')
// while (answer!= 'no' && answer!= 'yes'){
//     answer = prompt('give an answer')
// }
//ask the user for an answer

// if the answer is yes or no finish the program

// if not keep asking

//FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

// for (i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log(`${i} FizzBuzz`)
//     }else if (i%3==0){
//         console.log(`${i} Fizz`) 
//     }else if (i%5==0){
//         console.log(`${i} Buzz`)
//     }else{
//         console.log(i)
//     }
// }

// function squareRoot(n){
//     const returnValue = n*n
//     return returnValue
//     console.log('hi')
// }

// const result = squareRoot(2)
// console.log(result)

// function presentation(name, age) {
//     console.log(`Your name is ${name} and you're ${age} years old`);
//   }

//   presentation("Garance"); // "Your name is Garance and you're 9 years old"
//   presentation(5, "Prosper"); // "Your name is 5 and you're Prosper years old"

//   const hello = function(name) {
//     const message = `Hello, ${name}!`;
//     return message;
//   };

//   console.log(hello("Richard")); // "Hello, Richard!"

// const hello = (name) => {
//     console.log(`hello ${name}`)
// }

// hello ('bigo')

// Improved hello
// Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.

// // Say hello to the user
// function sayHello(firstName, lastName) {
//     const message = `Hello, ${firstName} ${lastName}!`;
//     return message;
//   }
  
//   firstName = prompt('first name')
//   lastName = prompt('last name')
//   alert(sayHello(firstName,lastName))


  
// // Square the given number x
// function square1(x) {
//   return total = x*x
// }

// // Square the given number x
// const square2 = x => {
//     return total = x*x
// }

// console.log(square1(0)); // Must show 0
// console.log(square1(2)); // Must show 4
// console.log(square1(5)); // Must show 25

// console.log(square2(0)); // Must show 0
// console.log(square2(2)); // Must show 4
// console.log(square2(5)); // Must show 25

// When it's done, update the program so that it shows the square of every number between 0 and 10.

// function square(x) {
//   return total = x*x
// }

// for(i=1;i<=10;i++){
//     console.log(`${i} square = ${square(i)}`)
// }

// Writing 10 dumb calls to square() is forbidden! You know how to repeat statements, don't you? ;)

// Minimum of two numbers
// Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// // TODO: write the min() function

// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9));  // Must show 9
// console.log(min(1, 1));   // Must show 1

// Minimum of two numbers
// Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.

// function min(n1,n2){
//     if(n1>n2){
//         return(n2)
//     }else if (n1<n2){
//         return(n1)
//     }else{
//         return(n1)
//     }
// } 

// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9));  // Must show 9
// console.log(min(1, 1));   // Must show 1

// Calculator
// Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.

// // TODO: complete program
// function add(n1,n2){
//     total = n1+n2
//     return total
// }
// function subtract(n1,n2){
//     total = n1-n2
//     return total
// }
// const multiply = function(n1,n2){
//     total = n1*n2
//     return total
// }
// const divide = (n1,n2) => {
//     total = n1/n2
//     return total
// }

// console.log(add(4, 6));  // Must show 10
// console.log(subtract(4, 6));  // Must show -2
// console.log(multiply(2, 0));  // Must show 0
// console.log(divide(12, 0)); // Must show Infinity


// Circumference and area of a circle
// Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

// Here are some tips for solving this exercise:

// Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
// The value of number π (Pi) is obtained with Math.PI in JavaScript.
// You might want to use the exponentiation operator ** to perform computations.
// console.log(2 ** 3); // 8: 2 * 2 * 2
// console.log(3 ** 2); // 9: 3 * 3

//circumfence of a circle 2pi r 
function circumfenceOfCircle(r){
    const circumfenceOfCircle = 2*Math.PI*r
    console.log(circumfenceOfCircle)
}
circumfenceOfCircle(4)

//area of a circle pi r square
const areaOfCircle = r => Math.PI*r**2

console.log(areaOfCircle(4))