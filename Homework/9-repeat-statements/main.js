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

// const rndInt = Math.floor(Math.random() * 100) + 1
//     console.log(rndInt)

// // 0 -> 10
// Math.floor(Math.random() * 11);

// // 1 -> 10
// Math.floor(Math.random() * 10) + 1;

// // 5 -> 20
// Math.floor(Math.random() * 16) + 5;

// // -10 -> (-2)
// Math.floor(Math.random() * 9) - 10;


//// explanation
// function getRandomInteger(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

//fizzBuzz for

for(x=1;x<=100;x++){
    if(x%3==0 && x%5==0){
        console.log('fizzBuzz')
    }else if(x%3==0){
        console.log('fizz')
    }else if(x%5==0){
        console.log('buzz')
    }else{
        console.log(x)
    }
}

//fizzBuzz while with showing the number
// only difference is we need to assign the variable before starting the while loop

let y = 0
while(y<100){
    y++
    if (y%5==0 && y%3==0){
        console.log('fizzBuzz')
    }else if(y%3==0){
        console.log('fizz')
    }else if (y%5==0){
        console.log('buzz')
    }else{
        console.log(y)
    }
}

