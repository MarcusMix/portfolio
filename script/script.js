// AOS ANIMATION
  AOS.init();

// VANILLA ANIMATION
VanillaTilt.init(document.querySelectorAll(".img-projetos"), {
  max: 15,
  speed: 300,
}) 

// VanillaTilt.init(document.querySelectorAll(".icons"), {
//   max: 30,
//   speed: 600,
// }) 

// DIGITACAO EFEITO 

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