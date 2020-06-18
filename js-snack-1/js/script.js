// l'utente inserisce il primo numero
var primoNumero = prompt("Inserisci il primo numero");

console.log(primoNumero);

// l'utente inserisce il secondo numero
var secondoNumero = prompt("Inserisci il secondo numero");

console.log(secondoNumero);

// output per l'utente
var numeroMaggiore;

if (primoNumero > secondoNumero) {
  numeroMaggiore = primoNumero
} else {
  numeroMaggiore = secondoNumero
}

console.log(numeroMaggiore);

document.getElementById('title').innerHTML = numeroMaggiore;
