// 1. Reverse a String
// Task: Write a function that takes a string and returns it reversed.
// Input: string s
// Output: string
// Constraints: s.length <= 1000.
// Edge Case: Single character strings or empty strings.
function reverseString(s: string): string {
  let reversed = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }

  return reversed;
}

// 2. FizzBuzz
// Task: Print numbers from 1 to n. For multiples of 3, print "Fizz";
// for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz".
// Input: integer n
// Output: Printed lines or a list of strings.
// Constraints: 1 <= n <= 100.
// Edge Case: n = 1.
function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

// 3. Find the Largest Number in an Array
// Task: Given an array of integers, return the largest value.
// Input: int[] nums
// Output: integer
// Constraints: Array will have at least one element.
// Edge Case: Array with all negative numbers.
function findLargest(nums: number[]): number {
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  return largest;
}

// 4. Check for Palindrome
// Task: Determine if a word reads the same forward and backward.
// Input: string s
// Output: boolean
// Constraints: Case-insensitive
// Edge Case: "racecar" (true) vs "hello" (false).
function isPalindrome(s: string): boolean {
  const lower = s.toLowerCase();
  let left = 0;
  let right = lower.length - 1;

  while (left < right) {
    if (lower[left] !== lower[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// 5. Sum of Array Elements
// Task: Calculate the total sum of all numbers in an array.
// Input: int[] nums
// Output: integer
// Constraints: nums.length <= 500.
// Edge Case: Empty array (should return 0).
function sumArray(nums: number[]): number {
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  return sum;
}

// 6. Count Vowels
// Task: Count how many vowels (a, e, i, o, u) are in a given string.
// Input: string s
// Output: integer
// Constraints: s contains English letters and spaces.
// Edge Case: String with no vowels.
function countVowels(s: string): number {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (const ch of s) {
    if (vowels.includes(ch)) {
      count++;
    }
  }

  return count;
}

// 7. Factorial Calculation
// Task: Find the factorial of a non-negative integer n.
// Input: integer n
// Output: integer
// Constraints: 0 <= n <= 12.
// Edge Case: n = 0 (Factorial of 0 is 1).
function factorial(n: number): number {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// 8. Even or Odd List
// Task: Given an array of numbers, return a new array containing only the even numbers.
// Input: int[] nums
// Output: int[]
// Constraints: nums.length <= 100.
// Edge Case: Array with no even numbers.
function getEvenNumbers(nums: number[]): number[] {
  const evens: number[] = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }

  return evens;
}

// 9. Fibonacci Sequence
// Task: Generate the first n numbers of the Fibonacci sequence.
// Input: integer n
// Output: int[]
// Constraints: n >= 1.
// Edge Case: n = 1.
function fibonacci(n: number): number[] {
  const result: number[] = [];

  if (n >= 1) {
    result.push(0);
  }
  if (n >= 2) {
    result.push(1);
  }

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

// 10. Find the Minimum in an Array
// Task: Given an array of integers, return the smallest value.
// Input: int[] nums
// Output: integer
// Constraints: Array will not be empty.
// Edge Case: Multiple elements with the same minimum value.
function findMinimum(nums: number[]): number {
  let minimum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minimum) {
      minimum = nums[i];
    }
  }

  return minimum;
}