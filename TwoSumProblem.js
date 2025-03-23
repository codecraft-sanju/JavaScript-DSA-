//Q.   Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//Input: nums = [2, 7, 11, 15], target = 9
//Output: [0, 1]  //
//  nums[0] + nums[1] = 2 + 7 = 9


let nums = [2, 5, 7, 15];
let target = 20;

for (let i = 0; i < nums.length; i++) {//2    
  for (let j = i + 1; j < nums.length; j++) {//5,7,15
    if (nums[i] + nums[j] === target) {//2+5=7 false 2+7 =9 false 2+15=17 false 
      console.log([i, j]);                
    }                                
  }
}

