let rndm = Math.floor(Math.random() * 6 + 5)

let a = 7
let b = 7

for (let i = 0; i < b; i++) {
    if (i % 2 == 0) {
        console.log("X ".repeat(a))
    }
    else {
        console.log("O ".repeat(a))
    }
}
console.log("-----------------")
console.log("Aufgabe 2:")

let sum = 0
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum += i
    }
}
console.log(sum)