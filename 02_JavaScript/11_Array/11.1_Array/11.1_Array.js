let s = "ATGCTTCAGAAAAGGTCAGCG";
let countA = 0;
let countC = 0;
let countG = 0;
let countT = 0;

for (let i = 0; i < s.length; i++) {
    if (s[i] === "A") countA++;
    else if (s[i] === "C") countC++;
    else if (s[i] === "G") countG++;
    else if (s[i] === "T") countT++;
}

console.log(countA, countC, countG, countT);