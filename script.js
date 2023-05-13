var indiceAtual = 0;
var imagemLinks = document.querySelectorAll("#carrossel .imagemLink");

function mudaImagem() {
  imagemLinks[indiceAtual].style.display = "none";
  indiceAtual = (indiceAtual + 1) % imagemLinks.length;
  imagemLinks[indiceAtual].style.display = "block";
}

setInterval(mudaImagem, 2500);

document.getElementById("data").textContent = new Date().toLocaleDateString();

function validar() {
  var nome = document.getElementById("nome");
  var telefone = document.getElementById("telefone");
  var email = document.getElementById("email");

  if (nome.value == "" || telefone.value == "" || email.value == "") {
    alert("Preencha todos os campos para proseguir");
  } else {
    alert("Sua mensagem foi enviada!");
  }
}


document.getElementById("dark-theme").addEventListener("click", function () {
  document.body.classList.add("dark-mode");
  document.querySelector("nav").classList.add("dark-mode");
  document.querySelector(".bemVindo").classList.add("dark-mode");
  document.querySelector("footer").classList.add("dark-mode");
});

document.getElementById("light-theme").addEventListener("click", function () {
  document.body.classList.remove("dark-mode");
  document.querySelector("nav").classList.remove("dark-mode");
  document.querySelector(".bemVindo").classList.remove("dark-mode");
  document.querySelector("footer").classList.remove("dark-mode");
});
