//Write your pseduo code first! 

// have the user write a fahrenheit value into an input box
// add a button that says convert and add an event listener to the button
// when the button is clicked, run a function that take the value in the input box, does the calculations and writes the celcuis degree in the DOM


document.querySelector('#convert').addEventListener('click', convertf)

function convertf() {
    //need the value that is in celcius
    let temp = document.querySelector('#celcius').value
    // convert from celcius to fahrenheit
    temp = (temp + 32)
    // show it  
    document.querySelector('#placeForFahrenheit').innerText = `${temp}`
}