// //Write your pseduo code first! 
// //get a temp from the user 
// document.querySelector('#convert').addEventListener('click', convertf)
// // calculate the fahrenheit equal 
// function convertf(){
//     let celcius = document.querySelector('#celcius').value

//     celcius = (celcius * 9/5 + 32 )

//     alert(celcius)
// }

document.querySelector('#convert').addEventListener('click',convert)

function convert(){
    const fahrenheit = document.querySelector('#celcius').value*9/5+32
    alert(fahrenheit)
}

