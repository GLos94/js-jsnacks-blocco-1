var btn = document.getElementById('btn');

btn.addEventListener("click", function (){
  var N = parseInt(document.getElementById('N').value);

  for (var i = 0; i < N ; i++) {
    console.log(Math.pow(N, 3));
  }
})
