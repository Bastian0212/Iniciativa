var contador = 0;
function upvote() {
  contador = contador + 1;
  document.getElementById("votos").innerHTML =
  contador + " votos";
}
