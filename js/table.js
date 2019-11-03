  const {document: doc} = window;
  const imprimir = doc.getElementById('imprimir');
  imprimir.addEventListener('click', () =>{
    const result = doc.querySelector('.result');
    const multiplicandoElem = doc.getElementById('n-tabla');
    let multiplicando = parseInt( multiplicandoElem.value);
    let multiplicador = parseInt(doc.getElementById('l-multiplicar').value);
    let n1 = !multiplicando || multiplicando < 1 ? 1 : multiplicando;
    let n2 = !multiplicador || multiplicador < 1 ? 12 : multiplicador;
  
    const table = doc.createElement('div');
    table.classList = 'element';
    doc.addEventListener('click', (e) => {
      const elem = e.target;
      if (elem.classList[0] === 'element'){
        elem.remove();
      }
    });

     doc.getElementById('eliminar')
      .addEventListener('click', (e) => {
        result.innerHTML = '';
        multiplicandoElem.focus();
      });
    
    for(i = 1; i <= n2 ; i++){
     let tabla = `<p>${n1} <span>x</span> ${i} <span> = </span> ${n1 * i}</p>`;
     table.innerHTML += tabla;
     result.append(table);
    }
    multiplicandoElem.value = "";
    multiplicandoElem.focus();
  });