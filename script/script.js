// AOS ANIMATION
  AOS.init();

// DIGITACAO EFEITO

const saida = document.querySelector(".saida");

function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 89);
  }
}

digitacao("E eu sou Desenvolvedor Web", 0);


VanillaTilt.init(document.querySelectorAll(".icons"), {
  max: 25,
  speed: 600,
}) 