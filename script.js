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
            requiere: ["Gestión en Salud II"],
            abre: []
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
            requiere: ["Práctica Integrada I"],
            abre: []
          },
          {
            nombre: "Ocupación y Redes",
            requiere: [],
            abre: []
          },
          {
            nombre: "Ocupación y Cultura",
            requiere: [],
            abre: []
          },
          {
            nombre: "Historias y Perfiles Ocupacionales",
            requiere: [],
            abre: []
          }
        ]
      },
      {
        nombre: "VIII Semestre",
        ramos: [
          {
            nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional IV",
            requiere: ["Investigación en Ciencia de la Ocupación y Terapia Ocupacional III"],
            abre: []
          },
          {
            nombre: "Terapia Ocupacional y Estrategias de Intervención VIII",
            requiere: ["Terapia Ocupacional y Estrategias de Intervención VII"],
            abre: []
          },
          {
            nombre: "Práctica Integrada III: En Desarrollo Social/Justicia",
            requiere: ["Práctica Integrada II"],
            abre: []
          },
          {
            nombre: "Análisis Ocupacionales Avanzados",
            requiere: [],
            abre: []
          },
          {
            nombre: "FG: GRIPS",
            requiere: [],
            abre: []
          },
          {
            nombre: "Práctica Profesional I",
            requiere: ["Práctica Integrada III"],
            abre: []
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
            requiere: ["Práctica Profesional I"],
            abre: []
          },
          {
            nombre: "Práctica Profesional III",
            requiere: ["Práctica Profesional II"],
            abre: []
          }
        ]
      },
      {
        nombre: "X Semestre",
        ramos: [
          {
            nombre: "Proyecto de Titulación",
            requiere: ["Práctica Profesional III"],
            abre: []
          }
        ]
      }
    ]
  }
];

// Diccionario para encontrar ramos por nombre rápido
const ramoMap = new Map();
data.forEach(ano => {
  ano.semestres.forEach(semestre => {
    semestre.ramos.forEach(ramo => {
      ramoMap.set(ramo.nombre, ramo);
    });
  });
});

const aprobados = new Set(
  JSON.parse(localStorage.getItem("aprobados") || "[]")
);

const mallaDiv = document.getElementById("malla");

function crearRamoElement(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");

  // Si no tiene los requisitos aprobados, está bloqueado
  const bloqueado = !ramo.requiere.every(req => aprobados.has(req));
  if (bloqueado) {
    div.classList.add("locked");
  }

  if (aprobados.has(ramo.nombre)) {
    div.classList.add("approved");
  }

  div.innerHTML = `
    <div class="ramo-title">${ramo.nombre}</div>
    <div class="ramo-info">
      <b>Requiere:</b> ${ramo.requiere.length ? ramo.requiere.join(", ") : "Ninguno"}<br/>
      <b>Abre:</b> ${ramo.abre.length ? ramo.abre.join(", ") : "Ninguno"}
    </div>
  `;

  if (!bloqueado) {
    div.addEventListener("click", () => {
      if (aprobados.has(ramo.nombre)) {
        // Desaprobar: quitar
        desaprobarRamo(ramo.nombre);
      } else {
        // Aprobar: añadir
        aprobarRamo(ramo.nombre);
      }
      actualizarVista();
      guardarEstado();
    });
  }

  return div;
}

function aprobarRamo(nombre) {
  aprobados.add(nombre);
}

function desaprobarRamo(nombre) {
  aprobados.delete(nombre);

  // También desaprobar todos los ramos que dependan directa o indirectamente
  // Ej: si ramo A es requisito de B, y B está aprobado, desaprobar B también
  for (const [ramoNombre, ramo] of ramoMap.entries()) {
    if (ramo.requiere.includes(nombre) && aprobados.has(ramoNombre)) {
      desaprobarRamo(ramoNombre);
    }
  }
}

function actualizarVista() {
  mallaDiv.innerHTML = "";

  data.forEach(ano => {
    const anoDiv = document.createElement("div");
    anoDiv.classList.add("ano");

    const tituloAno = document.createElement("div");
    tituloAno.classList.add("ano-title");
    tituloAno.textContent = ano.ano;
    anoDiv.appendChild(tituloAno);

    const semestresDiv = document.createElement("div");
    semestresDiv.classList.add("semestres");

    ano.semestres.forEach(semestre => {
      const semestreDiv = document.createElement("div");
      semestreDiv.classList.add("semestre");

      const tituloSemestre = document.createElement("div");
      tituloSemestre.classList.add("semestre-title");
      tituloSemestre.textContent = semestre.nombre;
      semestreDiv.appendChild(tituloSemestre);

      semestre.ramos.forEach(ramo => {
        const ramoEl = crearRamoElement(ramo);
        semestreDiv.appendChild(ramoEl);
      });

      semestresDiv.appendChild(semestreDiv);
    });

    anoDiv.appendChild(semestresDiv);
    mallaDiv.appendChild(anoDiv);
  });
}

function guardarEstado() {
  localStorage.setItem("aprobados", JSON.stringify(Array.from(aprobados)));
}

// Inicialización
actualizarVista();


