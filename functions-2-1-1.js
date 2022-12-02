/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1, num2) => {
  console.log(num1 > num2 ? num1: num2) 
};

maxOfTwoNumbers(112,8);

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (num1, num2, num3) => {
  const array= [num1, num2, num3];
  array.sort(function(a, b){return a-b});
  console.log(array[2]) 
};

maxOfThree(10,8,4);

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

isCharacterAVowel = (char) => {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  char = char.toLowerCase();
  return char === vowel[0] ||
          char === vowel[1] ||
          char === vowel[2] ||
          char === vowel[3] ||
          char === vowel[4]    
};

console.log(isCharacterAVowel('I'));


/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) { 
    sum += arr[i];
  }
  return sum;
};

console.log(sumArray([1,2,3,4]))

multiplyArray = (arr) => {
  let res = 1;
  for (let i = 0; i < arr.length; i++) { 
    res *= arr[i];
  }
  return res;
};

console.log(multiplyArray([1,2,3,4]))


/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
numOfArgs = (...args) => {
  return args.length;
}

console.log(numOfArgs(3, 'w', {'doc': 'name'}))

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

//with built-in methods
reverseString = (str) => {
  return str.split('').reverse().join('')
};
console.log(reverseString('Thank you so much.'))

//use for loop
reverseString = (str) => {
  let res = '';
  for (let i = str.length -1; i >= 0; i--){
    res += str[i];
  }
  return res
};
console.log(reverseString('You are welcome!'))


/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arr) => {
  let lengthArr = [];
  for (i = 0; i < arr.length; i++){
    lengthArr[i] = arr[i].length;
  }
  lengthArr.sort((a, b) => (a - b))
  return lengthArr[arr.length - 1]
};
console.log(findLongestWord(['hello', 'my', 'name', 'is', 'supermom']))


/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (arr, n) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > n){
      res.push(arr[i])
    }
  }
  return res;
};
console.log(filterLongWords(['hello', 'my', 'name', 'is', 'adventurer'], 4))