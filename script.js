const semestres = [
  {
    nombre: "I Semestre",
    ramos: [
      { nombre: "Fundamentos Psicológicos y Socioculturales de la Intervención", abre: ["Psicología General y Evolutiva"], requiere: [] },
      { nombre: "Biología Celular y Genética", abre: ["Bioquímica", "Morfología I: Anatomía, Histología y Embriología", "Fisiología General"], requiere: [] },
      { nombre: "Química General y Orgánica", abre: ["Bioquímica"], requiere: [] },
      { nombre: "Introducción a la Terapia Ocupacional", abre: ["Fundamentos y Epistemología de la Ciencia de la Ocupación"], requiere: [] },
      { nombre: "Electivo Formación General", abre: [], requiere: [] },
      { nombre: "Matemáticas", abre: [], requiere: [] },
      { nombre: "Terapia Ocupacional y Estrategias de Intervención I", abre: ["Terapia Ocupacional y Estrategias de Intervención II", "Practica integrada I"], requiere: [] }
    ]
  },
  {
    nombre: "II Semestre",
    ramos: [
      { nombre: "Psicología General y Evolutiva", abre: ["Antropología"], requiere: [] },
      { nombre: "Bioquímica", abre: ["Farmacología"], requiere: ["Biología Celular y Genética"] },
      { nombre: "Morfología I: Anatomía, Histología y Embriología", abre: ["Morfología II: Anatomía, Histología y Embriología"], requiere: [] },
      { nombre: "Fundamentos y Epistemología de la Ciencia de la Ocupación", abre: [], requiere: [] },
      { nombre: "Terapia Ocupacional y Estrategias de Intervención II", abre: ["Terapia Ocupacional y Estrategias de Intervención III"], requiere: ["Terapia Ocupacional y Estrategias de Intervención I"] }
    ]
  },
  {
    nombre: "III Semestre",
    ramos: [
      { nombre: "Psicología Social y del Trabajo", abre: [], requiere: ["Psicología General y Evolutiva"] },
      { nombre: "Antropología", abre: ["Salud Mental y Psicoeducación"], requiere: [] },
      { nombre: "Morfología II: Anatomía, Fisiología y Embriología", abre: [], requiere: ["Morfología I: Anatomía, Histología y Embriología"] },
      { nombre: "Fisiología General", abre: ["Fisiología de Sistemas"], requiere: ["Biología Celular y Genética"] },
      { nombre: "Modelos Pragmáticos del Estudio de la Ocupación", abre: ["Modelos Emergentes del Estudio de la Ocupación"], requiere: ["Fundamentos y Epistemología de la Ciencia de la Ocupación"] },
      { nombre: "Terapia Ocupacional y Estrategias de Intervención III", abre: ["Terapia Ocupacional y Estrategias de Intervención IV"], requiere: ["Terapia Ocupacional y Estrategias de Intervención II"] }
    ]
  },
  {
    nombre: "IV Semestre",
    ramos: [
      { nombre: "Salud Mental y Psicoeducación", abre: [], requiere: ["Antropología"] },
      { nombre: "Fisiología de Sistemas", abre: ["Farmacología"], requiere: ["Fisiología General"] },
      { nombre: "Modelos Emergentes del Estudio de la Ocupación", abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional I"], requiere: ["Modelos Pragmáticos del Estudio de la Ocupación"] },
      { nombre: "Investigación en Ciencias de la Salud", abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional I"], requiere: [] },
      { nombre: "Terapia Ocupacional y Estrategias de Intervención IV", abre: ["Terapia Ocupacional y Estrategias de Intervención V"], requiere: ["Terapia Ocupacional y Estrategias de Intervención III"] }
    ]
  },
  {
    nombre: "V Semestre",
    ramos: [
      { nombre: "Farmacología", abre: ["Fisiopatología"], requiere: ["Fisiología de Sistemas"] },
      { nombre: "Fisiopatología", abre: ["Alteraciones Neuromusculoesqueléticas"], requiere: ["Farmacología"] },
      { nombre: "Alteraciones Neuromusculoesqueléticas", abre: [], requiere: ["Fisiopatología"] },
      { nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional I", abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional II"], requiere: ["Investigación en Ciencias de la Salud", "Modelos Emergentes del Estudio de la Ocupación"] },
      { nombre: "Terapia Ocupacional y Estrategias de Intervención V", abre: ["Terapia Ocupacional y Estrategias de Intervención VI"], requiere: ["Terapia Ocupacional y Estrategias de Intervención IV"] }
    ]
  },
  {
    nombre: "VI Semestre",
    ramos: [
      { nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional II", abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional III"], requiere: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional I"] },
      { nombre: "Terapia Ocupacional y Estrategias de Intervención VI", abre: ["Terapia Ocupacional y Estrategias de Intervención VII"], requiere: ["Terapia Ocupacional y Estrategias de Intervención V"] },
      { nombre: "Práctica Integrada I", abre: [], requiere: ["Terapia Ocupacional y Estrategias de Intervención I", "Terapia Ocupacional y Estrategias de Intervención II"] },
      { nombre: "Gestión I", abre: [], requiere: [] },
      { nombre: "Gestión en Salud II", abre: ["Gestión Aplicada a Terapia Ocupacional"], requiere: ["Gestión I"] },
      { nombre: "Gestión Aplicada a Terapia Ocupacional", abre: [], requiere: ["Gestión en Salud II"] }
    ]
  },
  {
    nombre: "VII Semestre",
    ramos: [
      { nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional III", abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional IV"], requiere: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional II"] },
      { nombre: "Terapia Ocupacional y Estrategias de Intervención VII", abre: ["Terapia Ocupacional y Estrategias de Intervención VIII"], requiere: ["Terapia Ocupacional y Estrategias de Intervención VI"] },
      { nombre: "Práctica Integrada II", abre: [], requiere: ["Práctica Integrada I"] }
    ]
  },
  {
    nombre: "VIII Semestre",
    ramos: [
      { nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional IV", abre: ["Memoria de Titulación"], requiere: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional III"] },
      { nombre: "Terapia Ocupacional y Estrategias de Intervención VIII", abre: [], requiere: ["Terapia Ocupacional y Estrategias de Intervención VII"] },
      { nombre: "Memoria de Titulación", abre: [], requiere: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional IV"] }
    ]
  },
  {
    nombre: "IX Semestre",
    ramos: [
      { nombre: "Práctica Profesional I", abre: [], requiere: ["Práctica Integrada II"] }
    ]
  },
  {
    nombre: "X Semestre",
    ramos: [
      { nombre: "Práctica Profesional II", abre: [], requiere: ["Práctica Profesional I"] }
    ]
  }
];

// Estado inicial: ningún ramo aprobado
const aprobados = new Set();

// Referencia al contenedor
const mallaDiv = document.getElementById("malla");

// Función para verificar si un ramo está desbloqueado
function estaDesbloqueado(ramo) {
  if (!ramo.requiere || ramo.requiere.length === 0) return true;
  return ramo.requiere.every(req => aprobados.has(req));
}

// Renderizar la malla
function renderizarMalla() {
  mallaDiv.innerHTML = ""; // limpiar

  semestres.forEach(semestre => {
    const semestreDiv = document.createElement("div");
    semestreDiv.classList.add("semestre");

    // Título semestre
    const titulo = document.createElement("div");
    titulo.classList.add("semestre-title");
    titulo.textContent = semestre.nombre;
    semestreDiv.appendChild(titulo);

    // Ramos dentro semestre
    semestre.ramos.forEach(ramo => {
      const ramoDiv = document.createElement("div");
      ramoDiv.classList.add("ramo");

      // Estados visuales
      if (aprobados.has(ramo.nombre)) {
        ramoDiv.classList.add("approved");
      } else if (!estaDesbloqueado(ramo)) {
        ramoDiv.classList.add("locked");
      }

      // Nombre del ramo
      const nombreDiv = document.createElement("div");
      nombreDiv.classList.add("ramo-title");
      nombreDiv.textContent = ramo.nombre;
      ramoDiv.appendChild(nombreDiv);

      // Abreviaturas
      if (ramo.abre && ramo.abre.length > 0) {
        const abreDiv = document.createElement("div");
        abreDiv.classList.add("ramo-info");
        abreDiv.textContent = "Abre: " + ramo.abre.join(", ");
        ramoDiv.appendChild(abreDiv);
      }

      // Requisitos
      if (ramo.requiere && ramo.requiere.length > 0) {
        const reqDiv = document.createElement("div");
        reqDiv.classList.add("ramo-info");
        reqDiv.textContent = "Requiere: " + ramo.requiere.join(", ");
        ramoDiv.appendChild(reqDiv);
      }

      // Evento click para aprobar/desaprobar
      ramoDiv.addEventListener("click", () => {
        if (ramoDiv.classList.contains("locked")) return; // bloqueado no se puede clickear

        if (aprobados.has(ramo.nombre)) {
          aprobados.delete(ramo.nombre);
        } else {
          aprobados.add(ramo.nombre);
        }
        renderizarMalla();
      });

      semestreDiv.appendChild(ramoDiv);
    });

    mallaDiv.appendChild(semestreDiv);
  });
}

// Inicializar
renderizarMalla();


