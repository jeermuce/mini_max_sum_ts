"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
  // Write your code here
  arr.sort();
  let minSum: number = 0;
  let maxSum: number = 0;
  for (let i = 0, arrLenMinusOne = arr.length - 1; i < arrLenMinusOne; i++) {
    minSum += arr[i];
  }
  for (let i = 1, arrLen = arr.length; i < arrLen; i++) {
    maxSum += arr[i];
  }
  console.log(minSum + " " + maxSum);
}

function main() {
  const arr: number[] = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
