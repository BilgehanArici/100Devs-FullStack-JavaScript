//const contestants = document.querySelectorAll('.contestant')

// create a variable called constestants which contain every element with the class of contestant


const contestants = document.querySelectorAll('.contestant')

//Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

//for each element in the variable contestants, assign them an event listener for click and running a function called checkForRose
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))



// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 		document.querySelector('#nikki').classList.toggle('hidden')
// 	}else{
// 		alert("Wrong!");
// 	}
// }


// checkForRose function should check t see if the clicked element has a class of rose if it has, show the picture of the girl if it doesnt have the class of rose it should alert wrong


function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert('wrong')
	}
}