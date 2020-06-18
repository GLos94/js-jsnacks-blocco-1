var creaBtn = document.getElementById('bottone');
var paragraph = document.getElementById('numero');
var num;

creaBtn.addEventListener("click" , function(){
  var num = Math.floor(Math.random() * (10 -1 +1)) + 1;

  console.log(num)

  paragraph.classList.add("pari", "dispari");

  if (!(num%2)) {
    paragraph.classList.remove("pari");
  } else {
    paragraph.classList.remove("dispari");
  }

  console.log(paragraph);
  paragraph.innerHTML = num;
});
