// function FizzBuzz() {
//     for (let i = 1; i <= 50; i++) {

//         if ( i % 3 === 0){
//             console.log('Fizz');
//         } else if ( i % 5 === 0) {
//             console.log('Buzz');
//         } else console.log(i);
//     }
// }

// function transformArry(arr){
//     return arr.map( x => {
//         if (x % 2 === 0) return x ** 2;
//         else return x ** 3;
//     })
// }

//console.log(transformArry([1,2,3,4,5]));

// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 17 },
//     { name: "Charlie", age: 19 }
// ];

// function getAdults(peopleArray) {
//     return peopleArray.filter( x => x.age > 18).map(x => x.name);
// }

//console.log(getAdults(people)); // ["Alice", "Charlie"]

// function removeDuplicates(arr) {
//     // Your code here
//     const newArr = [];
//     arr.forEach(element => {
//         if (!newArr.includes(element)) newArr.push(element);
//     });
//     return newArr;

// }

//console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]


// function longestWord(sentence) {
//     // Your code here
//     const arr = sentence.split(' ');
//     let word = '';
//     arr.forEach((e, index) => {
//         if (word.length < e.length) word = e;
//     });
//     return word;
// }

//console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "jumps"

// function longestWord(sentence) {
//     let words = sentence.split(' ');
//     return words.reduce((longest, current) => current.length > longest.length ? current : longest,'');
// }

// console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "jumps"

// function sumDigits(num) {
//     // Your code here
//     const numArr = num.toString().split('').map(Number);
//     return numArr.reduce((acc, current) => acc + current,0);

// }

// console.log(sumDigits(1234)); // 10

// function isPalindrome(str) {
//     // Your code here
//     const strArr = str.split('');
//     if (strArr.length % 2 === 0) {
//         const half1 = strArr.slice(0, strArr.length/2).toString();
//         const half2 = strArr.slice(strArr.length/2).reverse().toString();
//         console.log(half1);
//         console.log(half2);
//         if (half1 === half2) return true;
//     } else {
//         const half1 = strArr.slice(0, strArr.length/2).toString();
//         const half2 = strArr.slice(strArr.length/2+1).reverse().toString();
//         if (half1 === half2) return true;
//     }
//     return false;

// }
// console.log(isPalindrome('abba'));
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false

// function isPalindrome(str) {
//     let reversed = str.split("").reverse().join("");
//     console.log(reversed);
//     return str === reversed;
// }

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false

// function countOccurrences(str, char) {
//     const newRe = str.split(char);
//     console.log(newRe);
//     return newRe;
// }

// // Test
// console.log(countOccurrences("hello world", "o")); // Expected output: 2

// function factorial(n) {
//     // Your code here
//     if (n === 0) return 1;
//     return n * factorial(n-1);
// }

// // Test
// console.log(factorial(5)); // Expected output: 120

// function fibonacci(n) {
//     // Your code here
//     if(n === 0) return 0;
//     if(n === 1) return 1;
//     if(n === 2) return 1;
//     if (n > 2) return fibonacci(n-1) + fibonacci(n-2);
// }

// // Test
// console.log(fibonacci(1)); // Expected output: 8

// function capitalizeWords(str) {
//     // Your code here
//     const strArr = str.split(' ');
//     const newStr = strArr.map(element => element.charAt(0).toUpperCase() + element.slice(1)).join(' ');
//     return newStr;
// }

// // Test
// console.log(capitalizeWords("hello world")); // Expected output: "Hello World"

// function secondLargest(arr) {
//     // Your code here
//     // const max_number = Math.max(...arr);
//     // const newArray = arr.filter(x => x !== max_number);
//     // return newArray.reduce((acc, curr) => curr < acc ? acc : curr, newArray[0]);

//     const sortedArr = [...new Set(arr)].sort((a,b) => b - a);
//     return sortedArr.length > 1 ? sortedArr[1] : null;
// }

// // Test
// console.log(secondLargest([10, 20, 4, 45, 99])); // Expected output: 45

function flattenArray(arr) {
    // Your code here
    return arr.flat(Infinity);
}

// Test
console.log(flattenArray([1, [2, 3, [4, 5]]])); // Expected output: [1, 2, 3, 4, 5]

