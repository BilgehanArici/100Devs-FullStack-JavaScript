//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
function issaFunction(){
    for(x=1;x<=21;x++){
        document.querySelector('#savageSays').innerText += ' 21'
    }
}

issaFunction()