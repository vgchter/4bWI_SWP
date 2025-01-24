let array = [4, 1, 2, 3];
array.push(17, 199);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum);

let average = sum / array.length;
console.log(average);

console.log("Aufgabe 2 ------------")

let friends = ["Susi", "Paula", "Hans"];
friends.push("Sepp");
console.log("Meine Freunde sind " + friends[0] + ", " + friends[1] + ", " + friends[2] + " und " + friends[3]);
