document.querySelector('h1').addEventListener('click',checkAge)

function checkAge(){
    const age = Number(document.querySelector('input').value)
    const par = document.querySelector('p')
    if(age<16){
        par.innerHTML = 'you cannot drive'
    }
    else if(age<18){
        par.innerHTML = 'you cannot get into the club'
    }
    else if(age<21){
        par.innerHTML = 'you cannot drink alcohol'
    }
    else if(age<25){
        par.innerHTML = 'you cannot afford cars'
    }else{
        par.innerHTML = 'life is done bruh'
    }
}

//Create a conditonal that checks their age

//If under 16, tell them they can not drive


//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
