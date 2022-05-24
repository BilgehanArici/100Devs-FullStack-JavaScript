//Create an array of movie titles. Loop through the array and add each element to the h2.

// let movies = ["fight", "win","worldwide"]

// for(let i = 0; i < movies.length;i++){
//     document.querySelector('h2').innerText += movies[i]
// }

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.

let numsFor = [1, 2, 3]
for (i = 0; i <= numsFor.length - 1; i++) {
    numsFor[i] += 3
}
console.log(numsFor)


let numsForEach = [4, 5, 6]
numsForEach.forEach((element, index) => {
    numsForEach[index] = element + 3
})
console.log(numsForEach)

// let nums = [10,20,30]

//  nums.forEach((item, i) => {
//      nums[i] = item + 3
//  })

//  console.log(nums)

//Find the average of all the numbers from question two

let sumFor = 0
let avgFor = 0
for (i = 0; i <= numsFor.length - 1; i++) {
    sumFor += numsFor[i]
    avgFor = sumFor / numsFor.length
}
console.log(avgFor)

let sumForEach = 0
let avgForEach = 0
numsForEach.forEach(element => {
    sumForEach += element
    avgForEach = sumForEach / numsForEach.length
})
console.log(avgForEach)



// let sumFor = 0

// for(let i = 0; i < nums.length; i++){
//     sumFor = sumFor + nums[i]
// }

// console.log( sumFor / nums.length  )