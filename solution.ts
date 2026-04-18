
function reverseString(s: string): string 

{
  let rev = "";
  let i;
  let length=s.length;

  for (i = length - 1; i >= 0; i--)
    
    
    {
    rev += s[i];
  }

  return rev;
}

function fizzBuzz(n: number): string[] 


{
  let i;
  const result: string[] = [];

  for (i = 1; i <= n; i++) 
    
    
    {
    if (i % 3 === 0 && i % 5 === 0)
      
      {
      result.push("FizzBuzz");
    } 
    
    else if (i % 3 === 0) 
      
      {
      result.push("Fizz");
    } 
    else if (i % 5 === 0) 
      
      {
      result.push("Buzz");
    } 
    
    else 
      
      
      {
      result.push(i.toString());
    }
  }

  return result;
}



function findLargest(nums: number[]): number

{
  let max = nums[0];

  let i;

  for (i = 1; i < nums.length; i++) 
    
    
    {
    if (nums[i] > max)
      
      
      {
      max = nums[i];
    }
  }

  return max;
}




function isPalindrome(s: string): boolean



{
  const lower = s.toLowerCase();

  let right = lower.length - 1;
  let left = 0;
  

  while (left < right)
    
    {
    if (lower[left] !== lower[right]) 
      
      
      {
      return false;
    }
    left++;
    right--;
  }

  return true;
}




function sumArray(nums: number[]): number 


{
  let sum = 0;

  for (const num of nums)
    
    
    {
    sum = num+sum;
  }

  return sum;
}


function countVowels(s: string): number 



{
  let count = 0;

  const vowels = "aeiouAEIOU";

  for (const cha of s) 
    
    
    
    {
    if (vowels.includes(cha))
      
      
      {
      count++;
    }
  }

  return count;
}


function factorial(n: number): number 


{
  let fact = 1;

  for (let i = 1; i <= n; i++)
    
    
    {
    fact = i*fact;
  }


  return fact;
}




function getEvenNumbers(nums: number[]): number[] 



{
  const evens: number[] = [];

  for (const num of nums) 
    
    
    
    {
    if (num % 2 === 0) 
      
      
      
      {
      evens.push(num);
    }
  }


  return evens;
}




function fibonacci(n: number): number[] 


{
  const result: number[] = [];
let i;
  if (n >= 1) 
    
    
    {
    result.push(0);
  }
  if (n >= 2) 
    
    
    {
    result.push(1);
  }

  for (i = 2; i < n; i++) 
    
    
    {


    result.push(result[i - 1] + result[i - 2]);
  }



  return result;
}




function findMinimum(nums: number[]): number 



{
  let i;
  let minimum = nums[0];

  for (i = 1; i < nums.length; i++) 
    
    
    {
    if (nums[i] < minimum) 
      
      
      
      {
      minimum = nums[i];
    }
  }

  

  return minimum;
}