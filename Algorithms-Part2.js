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