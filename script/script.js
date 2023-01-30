// AOS ANIMATION
  AOS.init();

// VANILLA ANIMATION
VanillaTilt.init(document.querySelectorAll(".img-projetos"), {
  max: 15,
  speed: 300,
}) 

// DIGITACAO EFEITO 

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt('.animated', {
    speed: 100,
    loop: true
  })
    .type('Programador ReactJs', {delay: 700})
    .delete(7)
    .type('Typescri', {delay: 1000 })
    .move(-3)
    .pause(500)
    .delete(1)
    .type('S')
    .move(3)
    .type('pt', {delay: 500})
    .move(-6, {delay: 300})
    .delete(4)
    .type('Java', {delay: 300})
    .move(6)
    .delete(21)
  .go()
})