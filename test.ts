import ts from "typescript";

declare const require: (id: string) => any;
declare const __dirname: string;

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const filePath = path.join(__dirname, "solution.ts");
const source = fs.readFileSync(filePath, "utf-8");

// Transpile TypeScript to plain JavaScript
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.None,
    target: ts.ScriptTarget.ES2020
  }
});

// Run the compiled code in global context
vm.runInThisContext(compiled.outputText);

// Tell TypeScript these functions now exist after runtime loading
declare function reverseString(s: string): string;
declare function fizzBuzz(n: number): string[];
declare function findLargest(nums: number[]): number;
declare function isPalindrome(s: string): boolean;
declare function sumArray(nums: number[]): number;
declare function countVowels(s: string): number;
declare function factorial(n: number): number;
declare function getEvenNumbers(nums: number[]): number[];
declare function fibonacci(n: number): number[];
declare function findMinimum(nums: number[]): number;

function arraysEqual(a: number[] | string[], b: number[] | string[]): boolean {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function testFunction(functionName: string, results: boolean[]): void {
  const passedAll = results.every((x) => x);

  if (passedAll) {
    console.log(`${functionName}: PASS`);
  } else {
    console.log(`${functionName}: FAIL`);
  }
}

testFunction("reverseString", [
  reverseString("hello") === "olleh",
  reverseString("a") === "a",
  reverseString("") === ""
]);

testFunction("fizzBuzz", [
  arraysEqual(fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]),
  arraysEqual(fizzBuzz(1), ["1"]),
  arraysEqual(fizzBuzz(15), [
    "1", "2", "Fizz", "4", "Buzz",
    "Fizz", "7", "8", "Fizz", "Buzz",
    "11", "Fizz", "13", "14", "FizzBuzz"
  ])
]);

testFunction("findLargest", [
  findLargest([1, 5, 3]) === 5,
  findLargest([-10, -2, -30]) === -2,
  findLargest([7]) === 7
]);

testFunction("isPalindrome", [
  isPalindrome("racecar") === true,
  isPalindrome("hello") === false,
  isPalindrome("Madam") === true
]);

testFunction("sumArray", [
  sumArray([1, 2, 3, 4]) === 10,
  sumArray([]) === 0,
  sumArray([-1, 5, -4]) === 0
]);

testFunction("countVowels", [
  countVowels("hello") === 2,
  countVowels("sky") === 0,
  countVowels("AEIOU") === 5
]);

testFunction("factorial", [
  factorial(5) === 120,
  factorial(0) === 1,
  factorial(1) === 1
]);

testFunction("getEvenNumbers", [
  arraysEqual(getEvenNumbers([1, 2, 3, 4, 5, 6]), [2, 4, 6]),
  arraysEqual(getEvenNumbers([1, 3, 5]), []),
  arraysEqual(getEvenNumbers([8, 10, 12]), [8, 10, 12])
]);

testFunction("fibonacci", [
  arraysEqual(fibonacci(1), [0]),
  arraysEqual(fibonacci(2), [0, 1]),
  arraysEqual(fibonacci(6), [0, 1, 1, 2, 3, 5])
]);

testFunction("findMinimum", [
  findMinimum([5, 2, 8, 1]) === 1,
  findMinimum([-3, -7, -1]) === -7,
  findMinimum([4]) === 4
]);
