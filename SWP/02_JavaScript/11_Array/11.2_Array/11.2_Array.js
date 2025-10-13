let s = "00011100010101010101010100110100011101001011010101011011111000000011010100"
let r = ""

for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") r += "1"
    else if (s[i] === "1") r += "0"
}
console.log(s)
console.log("Inventiert:")
console.log(r)