
function reverseString(s: string): string {
  let reversed = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }

  return reversed;
}

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

function findLargest(nums: number[]): number {
  let largest = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }

  return largest;
}

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

function sumArray(nums: number[]): number {
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  return sum;
}


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


function factorial(n: number): number {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

function getEvenNumbers(nums: number[]): number[] {
  const evens: number[] = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }

  return evens;
}

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

function findMinimum(nums: number[]): number {
  let minimum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < minimum) {
      minimum = nums[i];
    }
  }

  return minimum;
}