const exercise = (a) => {
    console.log(`Number ${a} \n`)
}


exercise(1)
// ✅ 1) Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
const sum = (a, b) => {
    const sum = a === b ? (a+b)*3 : a+b
    console.log(sum)
    return sum
}
sum(4,4)
sum(2,3)


exercise(2)
// ✅ 2) Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
const checkNumbers = (a,b) => {
    if(a === 50 || b===50 || a+b===50){
        let result = true
        return result
    } else {
        let result = false
        return result
    }
}

console.log(checkNumbers(3,3))
console.log(checkNumbers(10,40))


exercise(3)
// ✅ 3) Create a function to remove a character at the specified position of a given string and return the new string.
const remove = (str, i) => {
    const newString = str.replace(str.charAt(i), '')
    return newString
}

console.log(remove('lia', 2))


exercise(4)
//✅ 4) Create a function to find the largest of three given integers. 
//✨ implement not integers to integers ✨
const findTheLargest = (a,b,c) => {
    if(a>b && a>c){
        return a
    } else if(b>a && b>c){
        return b
    } else {
        return c
    }
}

//works too with Math.max 🏳‍🌈
// const largest = (a, b, c) => {
//     return Math.max(a, b, c)
// }

console.log(findTheLargest(1,2,5))


exercise(5)
// ✅ 5) Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
const checkTheRange = (a,b) => {
    if(
        (a <= 40 && a<= 60 || a <= 70 && a<= 100) && 
        (b <= 40 && b<= 60 || b <= 70 && b<= 100)
    ){
        return true
    } else {
        return false
    }
}

console.log(checkTheRange(39, 100))


exercise(6)
// ✅ 6) Create a function to create a new string of specified copies (positive number) of a given string.
const copyString = (str, a) => {
    
    return str.repeat(a) //add if 0 false
}

console.log(copyString('lia', 3))


exercise(7)
//✨ implement uppercase/ lowercase✨
// 7) Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
// const displayCity = (city) => {
//     if(city.includes('Los') || city.includes('New')){
//         return city
//     }
// }

const displayCity = (city) => {
    let firstThree = city.slice(0, 3)
    if (firstThree === 'Los' || firstThree === 'New'){
        return city
    } else {
        return 'Blank'
    }
}

console.log(displayCity('Los angeles'))
console.log(displayCity('Tokyo'))


exercise(9)
// ✅ 8) Create a function to calculate the sum of three elements of a given array of integers of length 3.
const sumArray = function(arr){
    let sum = 0
    for(let element of arr){
        sum += element
    }
    return sum
}

console.log(sumArray([2,3,4]))

exercise(9)
// 9) ✅ Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
const checkArray = (arr) => {
    if(arr.includes(1) || arr.includes(3)) {
        console.log('Hooray array')
        return true
    } else {
        console.log('No way array')
        return false
    }
}

console.log(checkArray([15,8]))
console.log(checkArray([1,3]))


exercise(10)
// 10) ✅ Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
const checkArrayTheRevenge = (arr) => {
    if (!arr.includes(1) || !arr.includes(3)) {
        console.log('Hooray array')
        return true;
      } else {
        console.log('No way array')
        return false;
      }
}

console.log(checkArrayTheRevenge([15,8]))
console.log(checkArrayTheRevenge([1,3]))



exercise(11)
// 11) ✅ Create a function to find the longest string from a given array of strings.
//compare arr.length 
const findTheLongest = (arr) => {
    let longest = arr[0]
    for(let element of arr){
       if(element.length > longest.length){
           longest = element
       } 
    }
    console.log(longest)
    return longest
}

const arrayTest = ['long', 'longer', 'longest', 'lo']
findTheLongest(arrayTest)


exercise(12)
/* 12) ✅ Create a function to find the types of a given angle.
//✨ there's something wrong with the switch case syntax ✨

* Types of angles:
*   Acute angle: An angle between 0 and 90 degrees.
*   Right angle: A 90 degree angle.
*   Obtuse angle: An angle between 90 and 180 degrees.
*   Straight angle: A 180 degree angle.
*/
// const findTheAngle = (a) => {
//     let angle
//     switch(angle) {
//         case (a >= 0 && a < 90): angle = 'Acute'; break
//         case (a === 90): angle = 'Right'; break
//         case (a >= 90 && a < 180): angle = 'Obtuse'; break
//         case (a === 180): angle = 'Straight'
//     }
//     console.log(angle)
//     return angle 
// }

const findTheAngle = (a) => {
    let angle
    if(a >= 0 && a < 90){
        angle = 'Acute'
    } else if(a === 90){
        angle = 'Right'
    } else if(a >= 90 && a < 180){
        angle = 'Obtuse'
    } else if(a === 180){
        angle = 'Straight'
    }
    return angle
}

console.log(findTheAngle(65))


exercise(13)
//✅ 13) Create a function to find the index of the greatest element of a given array of integers.
const findTheGreatest = (arr) => {
    let greatest = 0
    for(let element of arr){
        if(element > greatest){
            greatest = element
        }
    }
    return greatest
}

console.log(findTheGreatest([1,4,6,3]))


exercise(14)
// ✅ 14) Create a function to get the largest even number from an array of integers.
const findTheLargestEven = (arr) => {
    let greater = 0
    for(let element of arr){
        if(element > greater && element % 2 === 0){
            greater = element
        }
    }
    return greater
}

console.log(findTheLargestEven([1, 20, 40, 61]))


exercise(15)
// ✅ 16) Create a function to check from two given integers, whether one is positive and another one is negative.
const checkIntegers = function(a, b){
    if(Math.sign(a) === -1 || Math.sign(b) === -1) {
        return true
    }
}

console.log(checkIntegers(1, -1))

exercise(17)
/* 17) Create a function to create new string with first 3 characters are in lower case and the others in upper case.
* If the string length is less than 3 convert all the characters in upper case. */
// const lowerUpper = (str) => {
//     if(str.length >= 3){
//         let firstThree = str.slice(0,3)
//         firstThree.toLowerCase()
//         let rest = firstThree + str.slice(3).toUppperCase()
//         return rest
//     } else {
//         return str.toUpperCase()
//     }
// }

// console.log('forthekingfortheland')
// console.log('forthemountains')
// console.log('li')



exercise(18)
// 18) Create a function to calculate the sum of the two given integers. If the sum is in the range 50..80 return 65 other wise return 80.




exercise(19)
/* 19) Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

* If the number has 3 as a factor, output 'Diego'.
* If the number has 5 as a factor, output 'Riccardo'.
* If the number has 7 as a factor, output 'Stefano'.
* If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
* Examples
* 28's factors are 1, 2, 4, 7, 14, 28.
* this would be a simple "Stefano".
* 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
* this would be a "DiegoRiccardo".
* 34 has four factors: 1, 2, 17, and 34.
* this would be "34".
*/




exercise(20)
// 20) Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

// divide with split every word of the string, and thake every first letter of every word 