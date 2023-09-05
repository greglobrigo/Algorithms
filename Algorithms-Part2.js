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