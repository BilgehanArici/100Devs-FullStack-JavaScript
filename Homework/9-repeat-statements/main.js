// //Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// // ask the user for a number
// let a = prompt()
// // if the number is greater than 100 ask again
// while(a>100){
//     a=prompt()
// }
// //if the number is less than or equal to 100 finish the program
// if (a<=100){
//     console.log('done')
// }

// // for version
// // ask the user for a number
// // if the number is greater than 100 ask again
// //if the number is less than or equal to 100 finish the program

// for (let b=prompt();b>100;b=prompt()){}

//------------------------------------------------

// //When you are done with the above, improve the program so that the terminating number is between 50 and 100.

// // ask the user for a number
// let c = prompt()
// // if the number is greater than 100 ask again
// while(c>=100 || c<=50){
//     c=prompt()
// }
// //if the number is less than or equal to 100 finish the program
// if (c<100 && c>50){
//     console.log('done')
// }

// // for version

// for (let b=prompt();b<=50 || b>=100;b=prompt()){}

//------------------------------------------------

// //multiplication table

// //ask the user for a number
// let number = prompt()
// // show the multiplication table for this number
// for (x=1;x<=10;x++){
//     console.log(`${number*x}`)
// }

// while version

// //ask the user for a number
// let x = prompt()
// let y = 1
// //show the multiplication talbe for this numba
// while(y<=10){
//     console.log(`${x*y}`)
//     y++
// }

// // neither yes nor no

// //ask the user to enter a string 
// let x = prompt()
// // if the string is either yes or no finish the game 
// if (x == 'yes' || x == 'no'){
//     alert('you lost the game')
// }
// // unless, keep asking
// while (x!='yes'||x!='no'){
//     x = prompt()
// }

