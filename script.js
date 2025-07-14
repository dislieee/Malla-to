const data = [
  {
    ano: "Primer Año",
    semestres: [
      {
        nombre: "I Semestre",
        ramos: [
          {
            nombre: "Fundamentos Psicológicos y Socioculturales de la Intervención",
            abre: ["Psicología General y Evolutiva"],
            requiere: []
          },
          {
            nombre: "Biología Celular y Genética",
            abre: ["Bioquímica", "Morfología I: Anatomía, Histología y Embriología", "Fisiología General"],
            requiere: []
          },
          {
            nombre: "Química General y Orgánica",
            abre: ["Bioquímica"],
            requiere: []
          },
          {
            nombre: "Introducción a la Terapia Ocupacional",
            abre: ["Fundamentos y Epistemología de la Ciencia de la Ocupación"],
            requiere: []
          },
          {
            nombre: "Electivo Formación General",
            abre: [],
            requiere: []
          },
          {
            nombre: "Matemáticas",
            abre: [],
            requiere: []
          },
          {
            nombre: "Terapia Ocupacional y Estrategias de Intervención I",
            abre: ["Terapia Ocupacional y Estrategias de Intervención II", "Practica integrada I"],
            requiere: []
          }
        ]
      },
      {
        nombre: "II Semestre",
        ramos: [
          {
            nombre: "Psicología General y Evolutiva",
            abre: ["Antropología"],
            requiere: []
          },
          {
            nombre: "Bioquímica",
            abre: ["Farmacología"],
            requiere: ["Biología Celular y Genética", "Química General y Orgánica"]
          },
          {
            nombre: "Morfología I: Anatomía, Histología y Embriología",
            abre: ["Morfología II: Anatomía, Histología y Embriología"],
            requiere: []
          },
          {
            nombre: "Fundamentos y Epistemología de la Ciencia de la Ocupación",
            abre: [],
            requiere: ["Introducción a la Terapia Ocupacional"]
          },
          {
            nombre: "Terapia Ocupacional y Estrategias de Intervención II",
            abre: ["Terapia Ocupacional y Estrategias de Intervención III"],
            requiere: ["Terapia Ocupacional y Estrategias de Intervención I"]
          }
        ]
      }
    ]
  },
  {
    ano: "Segundo Año",
    semestres: [
      {
        nombre: "III Semestre",
        ramos: [
          {
            nombre: "Psicología Social y del Trabajo",
            abre: [],
            requiere: ["Psicología General y Evolutiva"]
          },
          {
            nombre: "Antropología",
            abre: ["Salud Mental y Psicoeducación"],
            requiere: []
          },
          {
            nombre: "Morfología II: Anatomía, Fisiología y Embriología",
            abre: [],
            requiere: ["Morfología I: Anatomía, Histología y Embriología"]
          },
          {
            nombre: "Fisiología General",
            abre: ["Fisiología de Sistemas"],
            requiere: ["Biología Celular y Genética"]
          },
          {
            nombre: "Modelos Pragmáticos del Estudio de la Ocupación",
            abre: ["Modelos Emergentes del Estudio de la Ocupación"],
            requiere: ["Fundamentos y Epistemología de la Ciencia de la Ocupación"]
          },
          {
            nombre: "Terapia Ocupacional y Estrategias de Intervención III",
            abre: ["Terapia Ocupacional y Estrategias de Intervención IV"],
            requiere: ["Terapia Ocupacional y Estrategias de Intervención II"]
          }
        ]
      },
      {
        nombre: "IV Semestre",
        ramos: [
          {
            nombre: "Salud Mental y Psicoeducación",
            abre: [],
            requiere: ["Antropología"]
          },
          {
            nombre: "Fisiología de Sistemas",
            abre: ["Farmacología"],
            requiere: ["Fisiología General"]
          },
          {
            nombre: "Modelos Emergentes del Estudio de la Ocupación",
            abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional I"],
            requiere: ["Modelos Pragmáticos del Estudio de la Ocupación"]
          },
          {
            nombre: "Investigación en Ciencias de la Salud",
            abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional I"],
            requiere: []
          },
          {
            nombre: "Terapia Ocupacional y Estrategias de Intervención IV",
            abre: ["Terapia Ocupacional y Estrategias de Intervención V"],
            requiere: ["Terapia Ocupacional y Estrategias de Intervención III"]
          }
        ]
      }
    ]
  },
  {
    ano: "Tercer Año",
    semestres: [
      {
        nombre: "V Semestre",
        ramos: [
          {
            nombre: "Farmacología",
            abre: ["Fisiopatología"],
            requiere: ["Fisiología de Sistemas"]
          },
          {
            nombre: "Fisiopatología",
            abre: ["Alteraciones Neuromusculoesqueléticas"],
            requiere: ["Farmacología"]
          },
          {
            nombre: "Alteraciones Neuromusculoesqueléticas",
            abre: [],
            requiere: ["Fisiopatología"]
          },
          {
            nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional I",
            abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional II"],
            requiere: ["Investigación en Ciencias de la Salud", "Modelos Emergentes del Estudio de la Ocupación"]
          },
          {
            nombre: "Terapia Ocupacional y Estrategias de Intervención V",
            abre: ["Terapia Ocupacional y Estrategias de Intervención VI"],
            requiere: ["Terapia Ocupacional y Estrategias de Intervención IV"]
          }
        ]
      },
      {
        nombre: "VI Semestre",
        ramos: [
          {
            nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional II",
            abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional III"],
            requiere: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional I"]
          },
          {
            nombre: "Terapia Ocupacional y Estrategias de Intervención VI",
            abre: ["Terapia Ocupacional y Estrategias de Intervención VII"],
            requiere: ["Terapia Ocupacional y Estrategias de Intervención V"]
          },
          {
            nombre: "Práctica Integrada I",
            abre: [],
            requiere: ["Terapia Ocupacional y Estrategias de Intervención I", "Terapia Ocupacional y Estrategias de Intervención II"]
          },
          {
            nombre: "Gestión I",
            abre: ["Gestión en Salud II"],
            requiere: []
          },
          {
            nombre: "Gestión en Salud II",
            abre: ["Gestión Aplicada a Terapia Ocupacional"],
            requiere: ["Gestión I"]
          },
          {
            nombre: "Gestión Aplicada a Terapia Ocupacional",
            abre: [],
            requiere: ["Gestión en Salud II"]
          }
        ]
      }
    ]
  },
  {
    ano: "Cuarto Año",
    semestres: [
      {
        nombre: "VII Semestre",
        ramos: [
          {
            nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional III",
            abre: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional IV"],
            requiere: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional II"]
          },
          {
            nombre: "Terapia Ocupacional y Estrategias de Intervención VII",
            abre: ["Terapia Ocupacional y Estrategias de Intervención VIII"],
            requiere: ["Terapia Ocupacional y Estrategias de Intervención VI"]
          },
          {
            nombre: "Práctica Integrada II: En Educación/Trabajo",
            abre: [],
            requiere: ["Práctica Integrada I"]
          },
          {
            nombre: "Ocupación y Redes",
            abre: [],
            requiere: []
          },
          {
            nombre: "Ocupación y Cultura",
            abre: [],
            requiere: []
          },
          {
            nombre: "Historias y Perfiles Ocupacionales",
            abre: [],
            requiere: []
          }
        ]
      },
      {
        nombre: "VIII Semestre",
        ramos: [
          {
            nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional IV",
            abre: [],
            requiere: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional III"]
          },
          {
            nombre: "Terapia Ocupacional y Estrategias de Intervención VIII",
            abre: [],
            requiere: ["Terapia Ocupacional y Estrategias de Intervención VII"]
          },
          {
            nombre: "Práctica Integrada III: En Desarrollo Social/Justicia",
            abre: [],
            requiere: ["Práctica Integrada II"]
          },
          {
            nombre: "Análisis Ocupacionales Avanzados",
            abre: [],
            requiere: []
          },
          {
            nombre: "FG: GRIPS",
            abre: [],
            requiere: []
          },
          {
            nombre: "Práctica Profesional I",
            abre: [],
            requiere: ["Práctica Integrada III"]
          }
        ]
      }
    ]
  },
  {
    ano: "Quinto Año",
    semestres: [
      {
        nombre: "IX Semestre",
        ramos: [
          {
            nombre: "Práctica Profesional II",
            abre: [],
            requiere: ["Práctica Profesional I"]
          },
          {
            nombre: "Práctica Profesional III",
            abre: [],
            requiere: ["Práctica Profesional II"]
          }
        ]
      },
      {
        nombre: "X Semestre",
        ramos: [
          {
            nombre: "Proyecto de Titulación",
            abre: [],
            requiere: ["Práctica Profesional III"]
          }
        ]
      }
    ]
  }
];

// Estado de aprobados
let aprobados = new Set();

// Para encontrar el ramo por nombre en toda la data
function buscarRamo(nombre) {
  for (const ano of data) {
    for (const semestre of ano.semestres) {
      for (const ramo of semestre.ramos) {
        if (ramo.nombre === nombre) return ramo;
      }
    }
  }
  return null;
}

// Comprobar si un ramo está desbloqueado (todos sus requisitos aprobados)
function estaDesbloqueado(ramo) {
  return ramo.requiere.every(req => aprobados.has(req));
}

// Actualiza el estado de todos los ramos bloqueados o desbloqueados
function actualizarEstados() {
  const elementos = document.querySelectorAll(".ramo");
  elementos.forEach(el => {
    const nombre = el.dataset.nombre;
    const ramo = buscarRamo(nombre);
    if (aprobados.has(nombre)) {
      el.classList.add("approved");
      el.classList.remove("locked");
      el.style.pointerEvents = "auto";
    } else if (estaDesbloqueado(ramo)) {
      el.classList.remove("locked");
      el.style.pointerEvents = "auto";
      el.classList.remove("approved");
    } else {
      el.classList.add("locked");
      el.style.pointerEvents = "none";
      el.classList.remove("approved");
    }
  });
}

// Guardar el estado en localStorage
function guardarEstado() {
  localStorage.setItem("aprobados", JSON.stringify([...aprobados]));
}

// Cargar el estado de localStorage
function cargarEstado() {
  const datos = localStorage.getItem("aprobados");
  if (datos) {
    aprobados = new Set(JSON.parse(datos));
  }
}

// Renderizar la malla curricular
function renderizarMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  data.forEach(ano => {
    const divAno = document.createElement("div");
    divAno.classList.add("ano");

    const tituloAno = document.createElement("h2");
    tituloAno.classList.add("ano-title");
    tituloAno.textContent = ano.ano;
    divAno.appendChild(tituloAno);

    ano.semestres.forEach(semestre => {
      const divSem = document.createElement("div");
      divSem.classList.add("semestre");

      const tituloSem = document.createElement("div");
      tituloSem.classList.add("semestre-title");
      tituloSem.textContent = semestre.nombre;
      divSem.appendChild(tituloSem);

      semestre.ramos.forEach(ramo => {
        const divRamo = document.createElement("div");
        divRamo.classList.add("ramo");
        divRamo.dataset.nombre = ramo.nombre;

        const tituloRamo = document.createElement("div");
        tituloRamo.classList.add("ramo-title");
        tituloRamo.textContent = ramo.nombre;
        divRamo.appendChild(tituloRamo);

        // Info: abre y requiere
        const infoRamo = document.createElement("div");
        infoRamo.classList.add("ramo-info");
        let infoText = "";
        if (ramo.requiere.length > 0) {
          infoText += "Requiere: " + ramo.requiere.join(", ") + ". ";
        }
        if (ramo.abre.length > 0) {
          infoText += "Abre: " + ramo.abre.join(", ") + ".";
        }
        infoRamo.textContent = infoText;
        divRamo.appendChild(infoRamo);

        divRamo.addEventListener("click", () => {
          if (divRamo.classList.contains("locked")) return;

          if (aprobados.has(ramo.nombre)) {
            aprobados.delete(ramo.nombre);
          } else {
            aprobados.add(ramo.nombre);
          }
          actualizarEstados();
          guardarEstado();
        });

        divSem.appendChild(divRamo);
      });

      divAno.appendChild(divSem);
    });

    contenedor.appendChild(divAno);
  });

  actualizarEstados();
}

cargarEstado();
renderizarMalla();


