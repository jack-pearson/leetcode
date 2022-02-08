/*
 * @Author: jack-pearson
 * @Date: 2022-02-07 19:07:21
 * @LastEditTime: 2022-02-08 10:40:07
 * @LastEditors: jack-pearson
 * @Description: 第一题
 * @FilePath: /leetcode/1-100/1.ts
 */

/**
 * 两数之和,给定一个整数数组和一个目标值，找出数组中和为目标值的两个数的下标。
 * @param {number[]} nums 数组
 * @param {number} target 目标值
 * @return {number[]} 下标数组
 */

const twoSum = (nums: number[], target: number) => {
  let result: number[] = [];
  let map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    let index = map.get(temp);
    if (index !== undefined) {
      result.push(index, i);
      break;
    }
    map.set(nums[i], i);
  }
  return result;
};

console.log(twoSum([2, 11, 15, 7], 9));
console.log(twoSum([20, 55, 34, 69, 81, 92, 18], 38));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
