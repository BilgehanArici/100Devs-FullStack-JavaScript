//Create an array of movie titles. Loop through the array and each element to the h2.
let movieTitles = ['movie1','movie2','movie3']

for(let i =0;i<movieTitles.length;i++){
    document.querySelector('h2').innerText += movieTitles[i]
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [10,20,30]

nums.forEach((element, index) => {
    nums[i] = item + 3
}) 

//Find the average of all the numbers from question three
let sum = 0

for(let i =0; i< nums.length; i++){
    sum = sum + nums[i]
}

console.log(sum/nums.length)