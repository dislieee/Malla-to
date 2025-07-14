// Datos: semestres con ramos y sus prerequisitos y cursos que desbloquean
const semestres = [
  {
    nombre: "I Semestre",
    ramos: [
      { id: "FundPsicoSociocult", nombre: "Fundamentos Psicológicos y Socioculturales de la Intervención", abre: ["Psicología General y Evolutiva"], requiere: [] },
      { id: "BioCelGen", nombre: "Biología Celular y Genética", abre: ["Bioquímica", "Morfología I: Anatomía, Histología y Embriología", "Fisiología General"], requiere: [] },
      { id: "QuimGenOrg", nombre: "Química General y Orgánica", abre: ["Bioquímica"], requiere: [] },
      { id: "IntroTO", nombre: "Introducción a la Terapia Ocupacional", abre: ["Fundamentos y Epistemología de la Ciencia de la Ocupación"], requiere: [] },
      { id: "ElectivoFG", nombre: "Electivo Formación General", abre: [], requiere: [] },
      { id: "Matematicas", nombre: "Matemáticas", abre: [], requiere: [] },
      { id: "TOEI", nombre: "Terapia Ocupacional y Estrategias de Intervención I", abre: ["Terapia Ocupacional y Estrategias de Intervención II", "Práctica integrada I"], requiere: [] }
    ]
  },
  {
    nombre: "II Semestre",
    ramos: [
      { id: "PsicoGenEvo", nombre: "Psicología General y Evolutiva", abre: ["Antropología"], requiere: ["FundPsicoSociocult"] },
      { id: "Bioquim", nombre: "Bioquímica", abre: ["Farmacología"], requiere: ["BioCelGen", "QuimGenOrg"] },
      { id: "MorfI", nombre: "Morfología I: Anatomía, Histología y Embriología", abre: ["Morfología II: Anatomía, Histología y Embriología"], requiere: ["BioCelGen"] },
      { id: "FundEpistCiencia", nombre: "Fundamentos y Epistemología de la Ciencia de la Ocupación", abre: [], requiere: ["IntroTO"] },
      { id: "TOEII", nombre: "Terapia Ocupacional y Estrategias de Intervención II", abre: ["Terapia Ocupacional y Estrategias de Intervención III"], requiere: ["TOEI"] }
    ]
  },
  {
    nombre: "III Semestre",
    ramos: [
      { id: "PsicoSocialTrabajo", nombre: "Psicología Social y del Trabajo", abre: [], requiere: ["PsicoGenEvo"] },
      { id: "Antropologia", nombre: "Antropología", abre: ["Salud Mental y Psicoeducación"], requiere: ["PsicoGenEvo"] },
      { id: "MorfII", nombre: "Morfología II: Anatomía, Fisiología y Embriología", abre: [], requiere: ["MorfI"] },
      { id: "FisiologiaGen", nombre: "Fisiología General", abre: ["Fisiología de Sistemas"], requiere: ["BioCelGen"] },
      { id: "ModelosPragmaticos", nombre: "Modelos Pragmáticos del Estudio de la Ocupación", abre: ["Modelos Emergentes del Estudio de la Ocupación"], requiere: ["FundEpistCiencia"] },
      { id: "TOEIII", nombre: "Terapia Ocupacional y Estrategias de Intervención III", abre: ["Terapia Ocupacional y Estrategias de Intervención IV"], requiere: ["TOEII"] }
    ]
  },
  {
    nombre: "IV Semestre",
    ramos: [
      { id: "SaludMentalPsicoeduc", nombre: "Salud Mental y Psicoeducación", abre: [], requiere: ["Antropologia"] },
      { id: "FisioSistemas", nombre: "Fisiología de Sistemas", abre: ["Farmacología"], requiere: ["FisiologiaGen"] },
      { id: "ModelosEmergentes", nombre: "Modelos Emergentes del Estudio de la Ocupación", abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional I"], requiere: ["ModelosPragmaticos"] },
      { id: "InvestigCienciasSalud", nombre: "Investigación en Ciencias de la Salud", abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional I"], requiere: [] },
      { id: "TOEIV", nombre: "Terapia Ocupacional y Estrategias de Intervención IV", abre: ["Terapia Ocupacional y Estrategias de Intervención V"], requiere: ["TOEIII"] }
    ]
  },
  {
    nombre: "V Semestre",
    ramos: [
      { id: "Farmacologia", nombre: "Farmacología", abre: ["Fisiopatología"], requiere: ["FisioSistemas"] },
      { id: "Fisiopatologia", nombre: "Fisiopatología", abre: ["Alteraciones Neuromusculoesqueléticas"], requiere: ["Farmacologia"] },
      { id: "AlterNeuromusc", nombre: "Alteraciones Neuromusculoesqueléticas", abre: [], requiere: ["Fisiopatologia"] },
      { id: "InvestigCienciaTOI", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional I", abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional II"], requiere: ["InvestigCienciasSalud", "ModelosEmergentes"] },
      { id: "TOEV", nombre: "Terapia Ocupacional y Estrategias de Intervención V", abre: ["Terapia Ocupacional y Estrategias de Intervención VI"], requiere: ["TOEIV"] }
    ]
  },
  {
    nombre: "VI Semestre",
    ramos: [
      { id: "InvestigCienciaTOII", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional II", abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional III"], requiere: ["InvestigCienciaTOI"] },
      { id: "TOEVI", nombre: "Terapia Ocupacional y Estrategias de Intervención VI", abre: ["Terapia Ocupacional y Estrategias de Intervención VII"], requiere: ["TOEV"] },
      { id: "PractIntI", nombre: "Práctica Integrada I", abre: [], requiere: ["TOEI", "TOEII"] },
      { id: "GestionI", nombre: "Gestión I", abre: ["Gestión en Salud II"], requiere: [] },
      { id: "GestionSaludII", nombre: "Gestión en Salud II", abre: ["Gestión Aplicada a Terapia Ocupacional"], requiere: ["GestionI"] },
      { id: "GestionAplicTO", nombre: "Gestión Aplicada a Terapia Ocupacional", abre: [], requiere: ["GestionSaludII"] }
    ]
  },
  {
    nombre: "VII Semestre",
    ramos: [
      { id: "InvestigCienciaTOIII", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional III", abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional IV"], requiere: ["InvestigCienciaTOII"] },
      { id: "TOEVII", nombre: "Terapia Ocupacional y Estrategias de Intervención VII", abre: ["Terapia Ocupacional y Estrategias de Intervención VIII"], requiere: ["TOEVI"] },
      { id: "PractIntII", nombre: "Práctica Integrada II: En Educación/Trabajo", abre: [], requiere: ["PractIntI"] },
      { id: "OcupacionRedes", nombre: "Ocupación y Redes", abre: [], requiere: [] },
      { id: "OcupacionCultura", nombre: "Ocupación y Cultura", abre: [], requiere: [] },
      { id: "HistoriasPerfiles", nombre: "Historias y Perfiles Ocupacionales", abre: [], requiere: [] }
    ]
  },
  {
    nombre: "VIII Semestre",
    ramos: [
      { id: "InvestigCienciaTOVIII", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional IV", abre: [], requiere: ["InvestigCienciaTOIII"] },
      { id: "TOEVIII", nombre: "Terapia Ocupacional y Estrategias de Intervención VIII", abre: [], requiere: ["TOEVII"] },
      { id: "PractIntIII", nombre: "Práctica Integrada III: En Desarrollo Social/Justicia", abre: ["Práctica Profesional I"], requiere: ["PractIntII"] },
      { id: "AnalisisOcup", nombre: "Análisis Ocupacionales Avanzados", abre: [], requiere: [] },
      { id: "FGGRIPS", nombre: "FG: GRIPS", abre: [], requiere: [] },
      { id: "PractProfI", nombre: "Práctica Profesional I", abre: ["Práctica Profesional II"], requiere: ["PractIntIII"] }
    ]
  },
  {
    nombre: "IX Semestre",
    ramos: [
      { id: "PractProfII", nombre: "Práctica Profesional II", abre: ["Práctica Profesional III"], requiere: ["PractProfI"] },
      { id: "PractProfIII", nombre: "Práctica Profesional III", abre: ["Proyecto de Titulación"], requiere: ["PractProfII"] }
    ]
  },
  {
    nombre: "X Semestre",
    ramos: [
      { id: "ProyectoTitulacion", nombre: "Proyecto de Titulación", abre: [], requiere: ["PractProfIII"] }
    ]
  }
];

// Guardar el estado aprobado (localStorage key)
const STORAGE_KEY = "mallaAprobados";

// Estado de aprobados (ids)
let aprobados = new Set();

// Cargar aprobados guardados
function cargarAprobados() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    try {
      const arr = JSON.parse(data);
      aprobados = new Set(arr);
    } catch {
      aprobados = new Set();
    }
  }
}

// Guardar aprobados en localStorage
function guardarAprobados() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(aprobados)));
}

// Verificar si un ramo está desbloqueado (prerrequisitos aprobados)
function estaDesbloqueado(ramo) {
  if (!ramo.requiere || ramo.requiere.length === 0) return true;
  return ramo.requiere.every(prer => aprobados.has(prer));
}

// Crear el DOM de la malla
function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  semestres.forEach(semestre => {
    const divSem = document.createElement("div");
    divSem.className = "semestre";

    const titulo = document.createElement("div");
    titulo.className = "semestre-title";
    titulo.textContent = semestre.nombre;
    divSem.appendChild(titulo);

    semestre.ramos.forEach(ramo => {
      const boton = document.createElement("button");
      boton.className = "ramo";
      boton.textContent = ramo.nombre;

      // id para control
      boton.dataset.id = ramo.id;

      // Estado bloqueado o no
      if (aprobados.has(ramo.id)) {
        boton.classList.add("approved");
      } else if (!estaDesbloqueado(ramo)) {
        boton.classList.add("locked");
        boton.disabled = true;
      }

      // Info pequeña de abre y requiere
      const info = document.createElement("div");
      info.className = "ramo-info";

      // Mostrar qué abre
      if (ramo.abre && ramo.abre.length > 0) {
        info.textContent = "Abre: " + ramo.abre.join(", ");
      }

      boton.appendChild(info);

      // Click para aprobar/desaprobar si está desbloqueado
      boton.addEventListener("click", () => {
        if (boton.disabled) return;
        if (aprobados.has(ramo.id)) {
          aprobados.delete(ramo.id);
        } else {
          aprobados.add(ramo.id);
        }
        guardarAprobados();
        crearMalla(); // refrescar estado
      });

      divSem.appendChild(boton);
    });

    contenedor.appendChild(divSem);
  });
}

// Inicializar
cargarAprobados();
crearMalla();



