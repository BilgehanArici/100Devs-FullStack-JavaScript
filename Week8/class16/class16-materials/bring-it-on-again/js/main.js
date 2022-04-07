// *Variables*
// Declare a variable, assign it a value, and alert the value

// Create a variable, divide it by 10, and console log the value

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"
// function dayOfWeek(day){
//     day = day.toLowerCase()
//     if(day=='saturday'||day=='sunday'){
//         alert('weekend')
//     }else if(day=='monday'||day=='tuesday'||day=='wednesday'||day=='thursday'||day=='friday'){
//         alert('week day')
//     }else if(day!='saturday'||day!='sunday'||day!='monday'||day!='tuesday'||day!='wednesday'||day!='thursday'||day!='friday'){
//         alert('try again')
//     }
// }
// dayOfWeek('monday')
// dayOfWeek('MOnday')
// dayOfWeek('sunday')
// dayOfWeek('SAturDAy')
// dayOfWeek('asdas')
// dayOfWeek('123')
//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3
function bigoli(number){
    for(i=0;i<=number;i+=3){
        console.log(i)
    }
}
bigoli(99)