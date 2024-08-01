//C(CREATE) R(READ) U(UPDATE) D(DELETE) 

var app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usar el punto es para llamar a una propidad o una accion del objeto
// Las acciones se distinguen por los parentesis ()
typewriter
  .pauseFor(2500)
  .typeString('Mariana Chávez')
  .pauseFor(300)
  .deleteAll()
  .typeString(' Desarrolladora Frontend JR')
  .pauseFor(1000)
  .start();


  var frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
  loop: true,
  delay: 75,
});

typewriterFrase
  .pauseFor(2500)
  .typeString('"Don’t you ever tell yourself that you’re not enough"')
  .pauseFor(300)
  .deleteAll()
  .typeString('<i>Youtiful</i>- Stray Kids <3')
  .pauseFor(1000)
  .start();

  