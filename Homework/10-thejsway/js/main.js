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
//"neither yes, nor no" with the user. Specifically, 
//the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

//ask the user for an answer

// if the answer is yes or no finish the program

// if not keep asking

