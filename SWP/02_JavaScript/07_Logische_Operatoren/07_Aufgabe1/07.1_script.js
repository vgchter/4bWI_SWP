let eingabe = "1 2 3 4 5 6 7 8"
let list = eingabe.split(" ")

let output = 0

for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 == 0) {
        output += parseInt(list[i])
    }
}
console.log(output)