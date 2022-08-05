// AOS ANIMATION
  AOS.init();

// DIGITACAO EFEITO

// const saida = document.querySelector(".saida");

// function digitacao(texto, contador) {
//   if (contador < texto.length) {
//     setTimeout(() => {
//       saida.textContent += texto.charAt(contador);
//       contador++;
//       digitacao(texto, contador);
//     }, 89);
//   }
// }

// digitacao("E eu sou Desenvolvedor Web", 0);

// VANILLA ANIMATION
VanillaTilt.init(document.querySelectorAll(".img-projetos"), {
  max: 15,
  speed: 300,
}) 

VanillaTilt.init(document.querySelectorAll(".icons"), {
  max: 30,
  speed: 600,
}) 
// DIGITACAO EFEITO 2

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  })
}

const titulo = document.querySelector('.apresentacao')
typeWriter(titulo);

typeWriter()