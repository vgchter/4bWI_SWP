let banana = "Banana";
let apple = "Apple";
let BananaPricePerKilo = 2.14;
let ApplePricePerKilo = 3.43;

let AvgAppleWeight = 0.34;
let AvgBananaWeight = 0.22;

console.log("Anzahl der Bananen pro Kilo: " + 1 / AvgBananaWeight);
console.log("Anzahl der Äpfel pro Kilo: " + 1 / AvgAppleWeight);
console.log("Preis pro Banane: " + BananaPricePerKilo / (1 / AvgBananaWeight));
console.log("Preis pro Apfel: " + ApplePricePerKilo / (1 / AvgAppleWeight));

// Preis 8 Äpfel
console.log("Preis von 8 Äpfeln: " + 8 * ApplePricePerKilo);

// Preis 17 Bananen
console.log("Preis von 17 Bananen: " + 17 * BananaPricePerKilo);

// Preis 1 Tonne Äpfel
console.log(
    "Preis von 1 Tonne Äpfel: " + AvgAppleWeight * 1000 * ApplePricePerKilo
);

// Preis 1 Tonne Bananen
console.log(
    "Preis von 1 Tonne Bananen: " + AvgBananaWeight * 1000 * BananaPricePerKilo
);