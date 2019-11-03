//limpiar input {
  const clean = document.getElementById('clean')
  .addEventListener('click', limpiarInput = () => {
    document.getElementById("input").reset();
    // historial.innerHTML = "";
  });
// }

let primerOperando = 0;
let seguntoOperando = 0;
let operacion = 0;

// let historial = document.getElementById('historial');
let display = document.getElementById('display');

//agregar un numero
let addNumber = (id, valor) => {
  document.getElementById(id)
  .addEventListener('click', dnumero = () => {
    if(display.value == 0){
      display.value = valor;
    }
    else{
      display.value += valor;
    }
  });
}

let sumar = document.getElementById('sumar')
.addEventListener('click', addOperacion = () => {
  operaciones('+');
  
});

let restar = document.getElementById('restar')
.addEventListener('click', addOperacion = () => {
  operaciones('-');
  
});

let multiplicar = document.getElementById('multiplicar')
.addEventListener('click', addOperacion = () => {
  operaciones('x');
  
});

let dividir = document.getElementById('division')
.addEventListener('click', addOperacion = () => {
  operaciones('/');
  
});

let porciento = document.getElementById('porciento')
.addEventListener('click', addOperacion = () => {
  operaciones('%');
  
});

//sumar


//calcular
let calcular = document.getElementById('calcular')
.addEventListener('click', calcularResultado = () =>{
  if(display.value != 0){

    let resultado;
    seguntoOperando = Number(display.value);
    display.value = 0;
   
    if(operacion == '+'){
      resultado = primerOperando + seguntoOperando;
    }
    if(operacion == '-'){
      resultado = primerOperando - seguntoOperando;
    }
    if(operacion == 'x'){
      resultado = primerOperando * seguntoOperando;
    }
    if(operacion == '/'){
      resultado = primerOperando / seguntoOperando;
    }
    if(operacion == '%'){
      resultado = (primerOperando * 0.1);
    }
    
    display.value = resultado;
  }
  else return false;
  
})


function operaciones (signo){
  operacion = signo;
  primerOperando = Number(display.value);
  // historial.innerHTML = `${primerOperando} ${signo} ${seguntoOperando}`;
  display.value = 0;
  
}

//numeros
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