document.querySelectorAll('.ramo').forEach(ramo => {
  const id = ramo.dataset.id;
  const aprobado = localStorage.getItem(`ramo-${id}`) === 'true';

  if (aprobado) {
    ramo.classList.add('aprobado');
    ramo.classList.remove('bloqueado');
  } else {
    ramo.classList.add('bloqueado');
  }

  ramo.addEventListener('click', () => {
    const aprobado = ramo.classList.toggle('aprobado');
    ramo.classList.toggle('bloqueado', !aprobado);
    localStorage.setItem(`ramo-${id}`, aprobado);
  });
});


