// Aufgabe 1
// The game mode is REVERSE: You do not have access to the statement. You have to guess what to do by observing the following set of tests:
// 01 Test 1
// Input
// Expected output
// 5 2
// 1 2 4 8 16
// 02 Test 2
// Input
// Expected output
// 3 2
// 1 2 4
// 03 Test 3
// Input
// Expected output
// 6 3
// 1 3 9 27 81 243
// 04 Test 4
// Input
// Expected output
// 3 0
// 1 0 0
// 05 Test 5
// Input
// Expected output
// 7 42
// 1 42 1764 74088 3111696 130691232 5489031744
// 06 Test 6
// Input
// Expected output
// 40 1
// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1

var inputs: string[] = readline().split(" ");
const N: number = parseInt(inputs[0]);
const R: number = parseInt(inputs[1]);
let list = [];

for (let i = 0; i < N; i++) {
  list.push(R ** i);
}

console.log(...list);

//Aufgabe 2

// A contribution by DouglasBolden
//  Approved by Fynjy1313,hbellahcandKarne
//  	Goal
// Water pours down steps, You can watch it pour. For each step, the water travels down 1 more step.
// Input
// A number of steps n for which the water(symbol for water) will pour down.
// NEXT LINE will be the water pouring down the next step.

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n: number = parseInt(readline());
const water: string = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
for (let i = 0; i < n; i++) {
  console.log(" ".repeat(i) + water);
}

// You have a room filled with water, and you need to calculate the quantity of water in cubic feet that the room contains. You are given the dimensions of the room: length, width, and height in feet.

// Takes the room's dimensions as input and calculates the volume of water in the room. If any of the room's dimensions are zero or negative, output Invalid dimension.
// Input
// Three integers separated by spaces, representing the length, width, and height of the room in feet.
// Output
// Either The quantity of water in the room is volume cubic feet., where volume is the volume of water in the room, or Invalid dimension.

const length: number = parseInt(readline());
const width: number = parseInt(readline());
const height: number = parseInt(readline());

let volume = length * width * height;

if (volume >= 0) {
  console.log(
    "The quantity of water in the room is " + volume + " cubic feet."
  );
} else {
  console.log("Invalid dimension.");
}
