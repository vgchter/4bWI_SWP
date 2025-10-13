let rndm = Math.floor(Math.random() * 6 + 5)

switch (rndm) {
    case 10:
        output = "Ten"
        break;
    case 9:
        output = "Nine"
        break;
    case 8:
        output = "Eight"
        break;
    case 7:
        output = "Seven"
        break;
    case 6:
        output = "Six"
        break;
    case 5:
        output = "Five"
        break;
}
console.log(rndm, output)