// Asegúrate de que este archivo tenga todos los ramos agregados
// Los ramos están definidos en ramos.js o script.js (ver documento actual)
function generarMalla() {
  const malla = document.getElementById('malla');
  const semestres = {};

  ramos.forEach(ramo => {
    const key = `${ramo.anio} - ${ramo.semestre}`;
    if (!semestres[key]) {
      semestres[key] = [];
    }
    semestres[key].push(ramo);
  });

  for (const key in semestres) {
    const div = document.createElement('div');
    div.className = 'semestre';
    const h2 = document.createElement('h2');
    h2.textContent = key;
    div.appendChild(h2);

    semestres[key].forEach(ramo => {
      const divRamo = document.createElement('div');
      divRamo.className = 'ramo';
      divRamo.id = ramo.codigo;
      divRamo.textContent = ramo.nombre;
      divRamo.onclick = () => aprobarRamo(ramo.codigo);
      if (ramo.prereqs && ramo.prereqs.length > 0) {
        divRamo.style.opacity = 0.5;
        divRamo.classList.add('bloqueado');
      }
      div.appendChild(divRamo);
    });

    malla.appendChild(div);
  }
}

function aprobarRamo(codigo) {
  const div = document.getElementById(codigo);
  if (div.classList.contains('aprobado')) return;
  div.classList.add('aprobado');
  desbloquearRamo(codigo);
}

function desbloquearRamo(codigoAprobado) {
  ramos.forEach(ramo => {
    if (ramo.prereqs && ramo.prereqs.includes(codigoAprobado)) {
      const todosAprobados = ramo.prereqs.every(req => {
        const div = document.getElementById(req);
        return div && div.classList.contains('aprobado');
      });
      if (todosAprobados) {
        const divRamo = document.getElementById(ramo.codigo);
        if (divRamo) {
          divRamo.style.opacity = 1;
          divRamo.classList.remove('bloqueado');
        }
      }
    }
  });
}

window.onload = generarMalla;



