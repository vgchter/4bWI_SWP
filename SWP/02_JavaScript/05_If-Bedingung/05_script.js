// erstelle eine Variable number
let num1 = 40
let output1 = ""

// Aufgabe 1
// Wenn die Zahl kleiner ist als 20  gib aus "Mini"
// Wenn die Zahl zw. 20 und 50 ist gib aus "Medium"
// Wenn die Zahl größer als 50 ist gib aus "Large"

if (num1 < 20) {
    output1 = "Mini"
}
else if (20 <= num1 && num1 <= 50) {
    output1 = "Medium"
}
else if (num1 > 50) {
    output1 = "Large"
}

console.log("Num1: ", num1, "=", output1)

// Aufgabe 2
// Wenn die Zahl kleiner gleich 7 ist gib aus "Mini"
// Wenn die Zahl zwischen 7 und 90 ist gib  aus "Medium"
// Wenn die Zahl größer als 90 ist gib aus "Large"

let num2 = 100
let output2 = ""

if (num2 < 7) {
    output2 = "Mini"
}
else if (7 <= num2 && num2 <= 90) {
    output2 = "Medium"
}
else if (num2 > 90) {
    output2 = "Large"
}

console.log("Num2: ", num2, "=", output2)