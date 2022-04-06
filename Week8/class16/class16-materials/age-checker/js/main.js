//Create a conditonal that checks their age
document.querySelector('h1').addEventListener('click', run)

function run(){
    let age = document.querySelector('#danceDanceRevolution').value
}
//If under 16, tell them they can not drive
function run(){
    let age = document.querySelector('#danceDanceRevolution').value
    // let txt = document.querySelector('p').innerText 
    if(age < 16){
        document.querySelector('p').innerText = ('you cannot drive')
    }else if (age<18){
        alert('you cant hate from outside the club you aint even a part of it')
    }else if (age<21){
        alert('you cannot drink')
    }else if(age<25){
        alert('no renting affordably')
    }else if (age<30){
        alert('no renting fancy cars affordably')
    }else if (age >= 30 ){
        alert('there is nothing to look forward to')
    }
}

//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink

//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
