import { resolve } from "path";
import { createInterface } from "readline";
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);

        });
    });
};

let kontostand = 0
let leave = true

console.log("Wählen Sie Ihre gewünschte Währung aus.");
console.log("1. € - Euro");
console.log("2. $ - Dollar");
console.log("3. CHF - Schweizer Franken");
console.log("4. kr - Kronen");
console.log("5. TL - Türkische Lira");
console.log("6. £ - Pfund");

let währung = await readLineAsync();

switch (währung) {
    case "1":
        währung = "€";
        break;

    case "2":
        währung = "$";
        break;

    case "3":
        währung = "CHF";
        break;

    case "4":
        währung = "kr";
        break;

    case "5":
        währung = "TL";
        break;

    case "6":
        währung = "£";
        break;
}

while (leave == true) {
    console.log("---------------");
    console.log("Bankomat");
    console.log("---------------");
    console.log("1. Einzahlen");
    console.log("2. Abheben");
    console.log("3. Kontostand");
    console.log("4. Ende");
    console.log("---------------");

    let selection = await readLineAsync();

    switch (selection) {
        case "1":
            console.log("Einzahlen - Geben Sie einen Betrag ein:")
            let einzahlung = Number(await readLineAsync())

            if (einzahlung <= 0) {
                console.log("Betrag ungültig!");
            }
            else {
                kontostand += einzahlung;
                console.log(kontostand + währung + " wurden eingezahlt.")
            }
            break;

        case "2":
            console.log("Abheben - Geben Sie einen Betrag ein:")
            let abhebung = Number(await readLineAsync())

            if (abhebung <= 0) {
                console.log("Betrag ungültig!")
            }
            else if (abhebung > kontostand) {
                console.log("Nicht genügend Guthaben!")
            }
            else {
                kontostand -= abhebung
                console.log(kontostand + währung + " wurden abgehoben.")
            }
            break;

        case "3":
            console.log("Ihr Kontostand beträgt: " + kontostand + währung)
            break;

        case "4":
            console.log("Auf Wiedersehen!")
            leave = false
            break;

        default:
            console.log("Ungültige Eingabe")
    }
}

readline.close();