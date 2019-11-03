let Scroll = (clase, duraction, origin, distance, delay) =>{
  window.sr = ScrollReveal();
  sr.reveal(clase, {
    duration: duraction,
    origin: origin,
    distance: distance,
    delay: delay
  });
}

//tabla
Scroll('.title', 2000, 'top', '50px', 0);
Scroll('.datos', 2000, 'left', '300px', 500);
Scroll('.botones-tabla', 2000, 'top', 0, 2000);
// Scroll('.element', 2000, 'top', 0, 0);

//calculadora
Scroll('.container', 2000, 'bottom', 0, 0);


// //scroll
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();

//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });