//1. Fizzbuzz
//Write a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz”
//instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples
//of both three and five print “FizzBuzz”.

function fizzBuzz() {
    const result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        }
        else {
            result.push(i);
        }
    }
    return result;
}

//2. Reverse a String (“boba" -> "abob”)
function reverseString(str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result = result += str[i]
    }
    return result
    // shorthand return str.split("").reverse().join("");
}

//3. Reverse a Sentence (“bob likes dogs” -> “dogs likes bob”)
function reverseSentence(sentence) {
    const result = []
    sentence = sentence.split(' ')
    for (let i = sentence.length - 1; i >= 0; i--) {
        const word = sentence[i]
        result.push(word)
    }
    return result.join(' ')
    //shorthand return sentence.split(' ').reverse().join(' ')
}

//4. Find the minimum value in an array of numbers [3, 1, 4, 2, 12, 3] -> 1
function findMinValueInArr(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        }
    }
    return min
    //shorthand return Math.min(...arr)
}

//5. Find the maximum value in an array of numbers [3, 1, 4, 2, 12, 3] -> 12
function findMaxValueInArr(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
    //shorthand return Math.max(...arr)
}

//6. Calculate a remainder (given a numerator and denominator)
function calculateRemainder(num, den) {
    return num % den
}

//7. Return distinct values from a list including duplicates (i.e. [1, 3, 5, 3, 7, 3, 1, 1, 5] -> [1, 3, 5, 7])
function findDistinctVals(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
    //shorthand return [...new Set(arr)]
}

//8. Return distinct values and their counts (i.e. [1, 3, 5, 3, 7, 3, 1, 1, 5] -> [[1, 3], [3, 3], [5, 2], [7, 1]])
function findDistinctVals(arr) {
    let result = {}
    for (let i = 0; i < arr.length; i++) {
        if (!result[arr[i]]) {
            result[arr[i]] = 1
        } else {
            result[arr[i]] += 1
        }
    }
    return Object.entries(result)
    //shorthand return [...new Set(arr)].map(val => [val, arr.filter(num => num === val).length])
}

//9. Determine if a number is prime (i.e. divisible only by itself and 1)
function isPrime(n) {
    for (let i = 1; i < n; i++) {
        if (n % 2 === 0) {
            return false
        }
    }
    return true
}

//10. Calculate the sum of digits of a positive integer number example: 1234 = 1 + 2 + 3 + 4 = 10
function calculateSumOfDigits(nums) {
    nums = nums.toString().split('')
    let total = 0
    for (let i = 0; i < nums.length; i++) {
        total = total += parseInt(nums[i])
    }
    return total
    //shorthand return nums.toString().split('').map(Number).reduce((a, b) => a + b, 0)
}
