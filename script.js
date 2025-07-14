// Aquí va toda la malla curricular, cada curso con ID único, prerrequisitos y abre
const cursos = [
  // Primer Año
  { id: 'fund_psico', nombre: 'Fundamentos Psicológicos y Socioculturales de la Intervención', abre: ['psic_gen'], prereq: [] },
  { id: 'bio_cel_gen', nombre: 'Biología Celular y Genética', abre: ['bioquim', 'morfo1', 'fisiol_gen'], prereq: [] },
  { id: 'quim_gen_org', nombre: 'Química General y Orgánica', abre: ['bioquim'], prereq: [] },
  { id: 'intro_to', nombre: 'Introducción a la Terapia Ocupacional', abre: ['fund_epist'], prereq: [] },
  { id: 'electivo_fg', nombre: 'Electivo Formación General', abre: [], prereq: [] },
  { id: 'matematicas', nombre: 'Matemáticas', abre: [], prereq: [] },
  { id: 'to_estrat_i', nombre: 'Terapia Ocupacional y Estrategias de Intervención I', abre: ['to_estrat_ii', 'pract_int_i'], prereq: [] },

  { id: 'psic_gen', nombre: 'Psicología General y Evolutiva', abre: ['antropologia'], prereq: ['fund_psico'] },
  { id: 'bioquim', nombre: 'Bioquímica', abre: ['farmacologia'], prereq: ['bio_cel_gen', 'quim_gen_org'] },
  { id: 'morfo1', nombre: 'Morfología I: Anatomía, Histología y Embriología', abre: ['morfo2'], prereq: ['bio_cel_gen'] },
  { id: 'fund_epist', nombre: 'Fundamentos y Epistemología de la Ciencia de la Ocupación', abre: [], prereq: ['intro_to'] },
  { id: 'to_estrat_ii', nombre: 'Terapia Ocupacional y Estrategias de Intervención II', abre: ['to_estrat_iii'], prereq: ['to_estrat_i'] },

  // Segundo Año
  { id: 'psic_social', nombre: 'Psicología Social y del Trabajo', abre: [], prereq: ['psic_gen'] },
  { id: 'antropologia', nombre: 'Antropología', abre: ['salud_mental'], prereq: ['psic_gen'] },
  { id: 'morfo2', nombre: 'Morfología II: Anatomía, Fisiología y Embriología', abre: [], prereq: ['morfo1'] },
  { id: 'fisiol_gen', nombre: 'Fisiología General', abre: ['fisiol_sis'], prereq: ['bio_cel_gen'] },
  { id: 'modelos_prag', nombre: 'Modelos Pragmáticos del Estudio de la Ocupación', abre: ['modelos_emergentes'], prereq: ['fund_epist'] },
  { id: 'to_estrat_iii', nombre: 'Terapia Ocupacional y Estrategias de Intervención III', abre: ['to_estrat_iv'], prereq: ['to_estrat_ii'] },

  // Tercer Año
  { id: 'farmacologia', nombre: 'Farmacología', abre: ['fisiopatologia'], prereq: ['fisiol_sis'] },
  { id: 'fisiopatologia', nombre: 'Fisiopatología', abre: ['alteraciones_neuromusculoesquel'], prereq: ['farmacologia'] },
  { id: 'alteraciones_neuromusculoesquel', nombre: 'Alteraciones Neuromusculoesqueléticas', abre: [], prereq: ['fisiopatologia'] },
  { id: 'invest_ciencia_to_i', nombre: 'Investigación en Ciencia de la Ocupación y Terapia Ocupacional I', abre: ['invest_ciencia_to_ii'], prereq: ['invest_ciencias_salud', 'modelos_emergentes'] },
  { id: 'to_estrat_v', nombre: 'Terapia Ocupacional y Estrategias de Intervención V', abre: ['to_estrat_vi'], prereq: ['to_estrat_iv'] },

  // Agrego más cursos, para que quede funcional (puedes completar el listado)
  { id: 'salud_mental', nombre: 'Salud Mental y Psicoeducación', abre: [], prereq: ['antropologia'] },
  { id: 'fisiol_sis', nombre: 'Fisiología de Sistemas', abre: ['farmacologia'], prereq: ['fisiol_gen'] },
  { id: 'modelos_emergentes', nombre: 'Modelos Emergentes del Estudio de la Ocupación', abre: ['invest_ciencia_to_i', 'to_i'], prereq: ['modelos_prag'] },
  { id: 'invest_ciencias_salud', nombre: 'Investigación en Ciencias de la Salud', abre: ['invest_ciencia_to_i'], prereq: [] },
  { id: 'to_estrat_iv', nombre: 'Terapia Ocupacional y Estrategias de Intervención IV', abre: ['to_estrat_v'], prereq: ['to_estrat_iii'] },

  // Continuar agregando según la lista completa que tienes...
];

// Estados iniciales: aprobado o no
// Los cursos sin prerequisitos empiezan desbloqueados (disponibles), otros bloqueados
let estadoCursos = {};

// Inicializa el estado: desbloqueados si no tienen prerequisitos, bloqueados si sí tienen
function inicializarEstados() {
  cursos.forEach(curso => {
    if (curso.prereq.length === 0) {
      estadoCursos[curso.id] = 'disponible';
    } else {
      estadoCursos[curso.id] = 'bloqueado';
    }
  });
}

// Función para actualizar la visualización de cursos
function renderizarCursos() {
  const mallaDiv = document.getElementById('malla');
  mallaDiv.innerHTML = '';

  cursos.forEach(curso => {
    const div = document.createElement('div');
    div.classList.add('curso');
    div.id = curso.id;

    div.classList.add(estadoCursos[curso.id]);

    div.innerHTML = `<div class="titulo">${curso.nombre}</div>`;

    if (curso.prereq.length > 0) {
      div.innerHTML += `<div class="prerrequisitos"><strong>Requiere:</strong> ${curso.prereq.map(id => getCursoNombre(id)).join(', ')}</div>`;
    } else {
      div.innerHTML += `<div class="prerrequisitos"><strong>Requiere:</strong> Ninguno</div>`;
    }

    if (curso.abre.length > 0) {
      div.innerHTML += `<div class="abre"><strong>Abre:</strong> ${curso.abre.map(id => getCursoNombre(id)).join(', ')}</div>`;
    }

    div.addEventListener('click', () => {
      toggleCurso(curso.id);
    });

    mallaDiv.appendChild(div);
  });
}

function getCursoNombre(id) {
  const c = cursos.find(c => c.id === id);
  return c ? c.nombre : id;
}

// Cambiar estado de un curso (aprobado <-> disponible)
function toggleCurso(id) {
  if (estadoCursos[id] === 'bloqueado') return; // no puede aprobar curso bloqueado

  if (estadoCursos[id] === 'disponible') {
    // aprobar
    estadoCursos[id] = 'aprobado';
  } else if (estadoCursos[id] === 'aprobado') {
    // desaprobar, poner disponible
    estadoCursos[id] = 'disponible';
  }

  actualizarEstados();
  renderizarCursos();
}

// Recalcula qué cursos se desbloquean en función de aprobados
function actualizarEstados() {
  // Para cada curso bloqueado, revisar si ahora todos sus prerequisitos están aprobados
  cursos.forEach(curso => {
    if (estadoCursos[curso.id] === 'bloqueado') {
      const prereqsAprobados = curso.prereq.every(pr => estadoCursos[pr] === 'aprobado');
      if (prereqsAprobados) {
        estadoCursos[curso.id] = 'disponible';
      }
    }
    // También si se desaprueba un curso, se deben bloquear los que dependen de él
    if (estadoCursos[curso.id] === 'aprobado') {
      // verificar si alguno de los cursos que depende de este debería bloquearse
      const cursosDependientes = cursos.filter(c => c.prereq.includes(curso.id));
      cursosDependientes.forEach(dep => {
        const prereqsAprobados = dep.prereq.every(pr => estadoCursos[pr] === 'aprobado');
        if (!prereqsAprobados && estadoCursos[dep.id] !== 'bloqueado') {
          estadoCursos[dep.id] = 'bloqueado';
          // Si dependiente estaba aprobado, desapruebo
          if (estadoCursos[dep.id] === 'aprobado') {
            estadoCursos[dep.id] = 'bloqueado';
          }
          // También se debe aplicar recursivamente para los que dependen de este curso bloqueado
          bloquearRecursivo(dep.id);
        }
      });
    }
  });
}

// Bloqueo recursivo para todos los cursos que dependen directa o indirectamente de un curso bloqueado
function bloquearRecursivo(id) {
  const cursosDependientes = cursos.filter(c => c.prereq.includes(id));
  cursosDependientes.forEach(dep => {
    if (estadoCursos[dep.id] !== 'bloqueado') {
      estadoCursos[dep.id] = 'bloqueado';
      bloquearRecursivo(dep.id);
    }
  });
}

// Inicialización
inicializarEstados();
renderizarCursos();


