//1. Find the longest common substring between two strings. (“bob likes dogs” and “cats like dogs” -> “dogs”)
function longestSubstring(str1, str2) {
    let longest = ''
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            let substring = ''
            while (str1[i] === str2[j]) {
                substring += str1[i]
                i++
                j++
            }
            if (substring.length > longest.length) {
                longest = substring
            }
        }
    }
    return longest
}

//2. Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1. ex: "leetcode" -> 0, "loveleetcode" -> 2
function firstNonRepeating(str) {
    for(let i = 0; i < str.length; i++) {
        let curr = str[i]
        if(str.indexOf(curr) === str.lastIndexOf(curr)) {
            return i
        }
    }
    return -1
}
//Time complexity: O(n^2)

function firstNonRepeating(str) {
    let hash = {}
    for(let i = 0; i < str.length; i++) {
        let curr = str[i]
        if(hash[curr]) {
            hash[curr]++
        } else {
            hash[curr] = 1
        }
    }
    for(let i = 0; i < str.length; i++) {
        let curr = str[i]
        if(hash[curr] === 1) {
            return i
        }
    }
    return -1
}
//Time complexity: O(n)

//3. Given a string, find the length of the longest substring without repeating characters. ex: "abcabcbb" -> 3, "bbbbb" -> 1, "pwwkew" -> 3
function longestSubstring(str) {
    let longest = ''
    for(let i = 0; i < str.length; i++) {
        let substring = ''
        for(let j = i; j < str.length; j++) {
            if(substring.includes(str[j])) {
                break
            } else {
                substring += str[j]
            }
        }
        if(substring.length > longest.length) {
            longest = substring
        }
    }
    return longest.length
}
//Time complexity: O(n^2)

//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
//Follow up: The overall run time complexity should be O(log (m+n)).

function findMedianSortedArrays(nums1, nums2) {
    let arr = nums1.concat(nums2)
    arr.sort((a,b) => a - b)
    let mid = Math.floor(arr.length / 2)
    if(arr.length % 2 === 0) {
        return (arr[mid] + arr[mid - 1]) / 2
    } else {
        return arr[mid]
    }
}

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.
function twoSum(nums, target) {
    let hash = {}
    for(let i = 0; i < nums.length; i++) {
        let curr = nums[i]
        let diff = target - curr
        if(hash[curr] !== undefined) {
            return [hash[curr], i]
        } else {
            hash[diff] = i
        }
    }
}

//Given a positive integral number n, return a strictly increasing sequence (list/array/string depending on the language) of numbers, so that the sum of the squares is equal to n².

function decompose(n) {
    let result = []
    let sum = 0
    for(let i = n - 1; i > 0; i--) {
        if(sum + i * i <= n * n) {
            result.push(i)
            sum += i * i
        }
    }
    return result.reverse()
}

//Solve Fibonacci sequence recursively
function fib(n) {
    if(n <= 1) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}