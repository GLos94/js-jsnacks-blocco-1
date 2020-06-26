var somma = 0;
for (var i = 0; i < 10; i++) {
  var numero = prompt("Inserisci un numero");
  somma += parseInt(numero);
  media = somma / 10;
}
console.log(somma);
console.log(media);
