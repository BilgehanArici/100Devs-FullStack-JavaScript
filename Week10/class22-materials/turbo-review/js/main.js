// // // *Variables*
// // // Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = '  ice tea  '
console.log(favDrink.trim())





// let favDrink
// favDrink = '   russian mule   '
// console.log(favDrink.trim())






// // let favDrink = ' Diet Vanilla Coke From Friendlys '
// // favDrink = favDrink.trim()
// // console.log(favDrink)

// // //Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let newVar = 'peaches orange strawberry melon apple'
console.log(newVar.includes('apple'))





// let newVar = 'melon peach strawberry blueberry pear apple gojiberry'
// console.log(newVar.includes('apple'))



// // let str = "Bob Duck apple dog"
// // if( str.search('apple') !== -1 ){
// //     console.log('yes')
// // }else{
// //     console.log('no')
// // }

// // // *Functions*
// // // Create a function that returns rock, paper, or scissors as randomly as possible
function rockPaperScissors() {
    let rand = Math.random()
    if (rand < .33) {
        return 'rock'
    } else if (rand < .66) {
        return 'paper'
    } else {
        return 'scissors'
    }
}




// function rockPaperScissors(){
//     let rnd = Math.random()
//     if(rnd<0.33){
//         return 'rock'
//     }else if(rnd<0.66){
//         return 'paper'
//     }else{
//         return 'scissors'
//     }
// }




// // function rockPaperScissors(){
// //     let random = Math.random()
// //     if( random < .33 ){
// //         return 'rock'
// //     }else if( random < .66 ){
// //         return 'paper'
// //     }else{
// //         return 'scissors'
// //     }
// // }
// // // *Conditionals*
// // //Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function rockPaperScissorsGame(choice) {
    let random = rockPaperScissors()
    let rules = { rock: 'paper', paper: 'scissors', scissors: 'rock' }
    if (choice == random) {
        return 'its a draw'
    } else if (rules[choice] == random) {
        return 'you won'
    } else {
        return 'you lost'
    }
}

for (i = 1; i <= 10; i++) {
    console.log(rockPaperScissorsGame('paper'))
}

// function rockPaperScissorsGame(choice){
//     let random = rockPaperScissors()
//     let rules = {rock:'scissors',paper:'rock',scissors:'paper'}
//     if (random == choice){ 
//         return 'its a draw'
//     }else if(rules[choice]==random){
//         return 'you won'
//     }else{
//         return 'you lost'
//     }
// }

// for(let i=1;i<=10;i++){
//     console.log(rockPaperScissorsGame('rock'))
// }






// // function checkWin(playerChoice){
// //     let botChoice = rockPaperScissors()
// //     if( (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper') ){
// //         console.log('You Win')
// //     }else if( playerChoice === botChoice ){
// //         console.log('You Tied')
// //     }else{
// //         console.log('You Lose')
// //     }
// // }
// // //checkWin('rock')

// // //*Loops*
// // //Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function gamerz(array) {
    let choices = array.length
    for (let i = 1; i <= array.length; i++) {
        return 'played'
    }
}
console.log(gamerz([1,2,3,4,5]))





// function playGameXTimes(arr){
//     arr.forEach(element=>rockPaperScissorsGame(element))
// }
// playGameXTimes(['rock','paper','scissors'])






// // function playGameXTimes(arr){
// //     arr.forEach( choice => checkWin(choice) )
// // }

// // playGameXTimes( ['rock','paper','scissors'] )