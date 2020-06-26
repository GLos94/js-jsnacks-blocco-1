var num1 = parseInt(prompt("Inserisci un numero"));
var num2 = parseInt(prompt("Inserisci un numero"));
var num3 = parseInt(prompt("Inserisci un numero"));
var num4 = parseInt(prompt("Inserisci un numero"));
var num5 = parseInt(prompt("Inserisci un numero"));
var somma = 0;

var numeri = [num1, num2, num3, num4, num5];
console.log(numeri);

for (var i = 0; i < numeri.length; i++) {
  somma += numeri[i];
}
console.log(somma);
