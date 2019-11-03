// Imprimir
const { document: doc } = window;
const imprimir = doc.getElementById('imprimir');
const eliminar = doc.getElementById('eliminar');
let count = 0;
imprimir.addEventListener('click', () => {
  const result = doc.querySelector('.result');
  const multiplicandoElem = doc.getElementById('n-tabla');
  let multiplicando = parseInt(multiplicandoElem.value);
  const multiplicador = parseInt(doc.getElementById('l-multiplicar').value);
  const n1 = !multiplicando || multiplicando < 1 ? count += 1 : multiplicando;
  const n2 = !multiplicador || multiplicador < 1 ? 12 : multiplicador;
      
  // eliminar una tabla
  const table = doc.createElement('div');
  table.classList.add('element');
  doc.addEventListener('click', e =>
    e.target.classList[0] === 'element' && e.target.remove());

  // eliminar todas las tablas
  eliminar.addEventListener('click', (e) => {
    result.innerHTML = '';
    multiplicandoElem.focus();
  });

  for (i = 1; i <= n2 ; i++) {
    let tabla = `<p>${n1} <span>x</span> ${i} <span> = </span> ${n1 * i}</p>`;
    table.innerHTML += tabla;
    result.append(table);
  }
  multiplicando = '';
  multiplicandoElem.focus();
});