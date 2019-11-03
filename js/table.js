  //Imprimir
  let imprimir = document.getElementById('imprimir')
  .addEventListener('click', () =>{
    let result = document.querySelector('.result');
    let multiplicando = document.getElementById('n-tabla');
    let multiplicador = document.getElementById('l-multiplicar');
    
    //validacion de campos vacios
      if(multiplicando.value == ''){
        multiplicando.value = 1;
      }
      if(multiplicador.value == ''){
        multiplicador.value = 12;
      }
    //validacion de campos vacios
  
    let n1 = parseInt(multiplicando.value);
    let n2 = parseInt(multiplicador.value);

    //vaidacion de valor menor que 1 y que sean numeros
      
      if(n1 < 1){
        n1 = 1;
      }
      if(n2 < 1){
        n2 = 12;
      }
      
      if(multiplicando.value != Number || multiplicador.value !=Number){
        multiplicando.value = 1;
        multiplicador.value = 12;
      }
    //vaidacion de valor menor que 1
    
    //eliminar una tabla
    const table = document.createElement('div');
    table.classList = 'element';
    document.addEventListener('click', (e) => {
      const elem = e.target;
      if (elem.classList[0] === 'element'){
        elem.remove();
      }
    });
    //eliminar una tabla

    //eliminar todas las tablas
      eliminar = document.getElementById('eliminar')
      .addEventListener('click', (e) => {
        result.innerHTML = '';
        multiplicando.focus();
      });
    //eliminar todas las tablas
    
    for(i = 1; i <= n2 ; i++){
     let tabla = `
     <p>${n1} <span>x</span> ${i} <span> = </span> ${n1 * i}</p>`
     table.innerHTML += tabla;
     result.append(table);
    }
    multiplicando.value = "";
    multiplicando.focus();
  });