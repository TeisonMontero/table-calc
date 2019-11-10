const {document: doc} = window;
//input clean {
doc.getElementById('clean').addEventListener('click', limpiarInput = () => {
  doc.getElementById("input").reset();
});
// }

let primerOperando = 0;
let seguntoOperando = 0;
let operacion = 0;

let operaciones = (id, signo) => {
doc.getElementById(id).addEventListener('click', addOperacion = () => {
  operacion = signo;
  primerOperando = Number(display.value);
  display.value = 0;
});
}

operaciones('sumar', '+');
operaciones('restar', '-');
operaciones('multiplicar', 'x');
operaciones('division', '/');
operaciones('porciento', '%');

doc.getElementById('calcular')
.addEventListener('click', calcularResultado = () =>{
  if(display.value != 0){
    let resultado;
    seguntoOperando = Number(display.value);
    display.value = 0;
   
    if (operacion == '+') resultado = primerOperando + seguntoOperando;
    if (operacion == '-') resultado = primerOperando - seguntoOperando;
    if (operacion == 'x') resultado = primerOperando * seguntoOperando;
    if (operacion == '/') resultado = primerOperando / seguntoOperando;
    
    display.value = resultado;
  }
  else return false;
});

//add number
let addNumber = (id, valor) => {
  doc.getElementById(id)
  .addEventListener('click', dnumero = () => {
    display.value == 0 ? display.value = valor : display.value += valor;
  });
}

addNumber('n-1', 1);
addNumber('n-2', 2);
addNumber('n-3', 3);
addNumber('n-4', 4);
addNumber('n-5', 5);
addNumber('n-6', 6);
addNumber('n-7', 7);
addNumber('n-8', 8);
addNumber('n-9', 9);
addNumber('n-0', 0);