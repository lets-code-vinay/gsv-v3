function findLongestGoodSubstring(encodedMessage) {
    let maxLength = 0;
    let currentLength = 1;
    let startIndex = 0;
    let longestSubstringStartIndex = 0;

    for (let i = 1; i < encodedMessage.length; i++) {
        if (encodedMessage[i] === encodedMessage[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                longestSubstringStartIndex = startIndex;
            }
            currentLength = 1;
            startIndex = i;
        }
    }

    // Check if the last substring is the longest
    if (currentLength > maxLength) {
        maxLength = currentLength;
        longestSubstringStartIndex = startIndex;
    }

    return encodedMessage.substr(longestSubstringStartIndex, maxLength);
}

// Example usage:
const encodedMessage = "ddaddssssdsdddd";
const longestGoodSubstring = findLongestGoodSubstring(encodedMessage);
console.log("Longest Good Substring:", longestGoodSubstring);
