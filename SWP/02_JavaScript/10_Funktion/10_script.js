function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function mulitply(a, b) {
    return a * b;
}
function supercalculation(a, b) {
    return (a + b) / 2 * a;
}

function printEasterDate(year) {
    let N = year - 1900;
    let A = N % 19;
    let B = Math.floor((7 * A + 10) / 19);
    let M = (11 * A + 4 - B) % 29;
    let Q = Math.floor(N / 4);
    let W = (N + Q + 31 - M) % 7;
    let P = 25 - M - W

    if (P > 0) {
        console.log("Ostersonntag ist am " + P + ". April " + year);
    } else {
        console.log("Ostersonntag ist am " + 31 + ". März " + year);
    }
}

printEasterDate(2025);