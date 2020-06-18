var creaBtn = document.getElementById('lanciaMoneta');
var numeroCasuale;

creaBtn.addEventListener("click" , function (){
 var numeroCasuale = Math.floor(Math.random() * 10);

 console.log(numeroCasuale)



 var selezione = document.getElementById('selezione')

 selezione.classList.add("testa", "croce");

 if (!(numeroCasuale%2)) {
   selezione.classList.remove("croce");
 } else {
   selezione.classList.remove("testa");
 }


 console.log(selezione);

});
