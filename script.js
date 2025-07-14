const ramos = [
  // Primer Año
  { codigo: "PPSI", nombre: "Fundamentos Psicológicos y Socioculturales de la Intervención", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "BCG", nombre: "Biología Celular y Genética", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "QGO", nombre: "Química General y Orgánica", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "ITO", nombre: "Introducción a la Terapia Ocupacional", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "EFG", nombre: "Electivo Formación General", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "MAT", nombre: "Matemáticas", anio: 1, semestre: 1, prereqs: [] },
  { codigo: "TOEI1", nombre: "Terapia Ocupacional y Estrategias de Intervención I", anio: 1, semestre: 1, prereqs: [] },

  { codigo: "PGE", nombre: "Psicología General y Evolutiva", anio: 1, semestre: 2, prereqs: ["PPSI"] },
  { codigo: "BIOQ", nombre: "Bioquímica", anio: 1, semestre: 2, prereqs: ["BCG", "QGO"] },
  { codigo: "MORF1", nombre: "Morfología I: Anatomía, Histología y Embriología", anio: 1, semestre: 2, prereqs: ["BCG"] },
  { codigo: "FEC", nombre: "Fundamentos y Epistemología de la Ciencia de la Ocupación", anio: 1, semestre: 2, prereqs: ["ITO"] },
  { codigo: "TOEI2", nombre: "Terapia Ocupacional y Estrategias de Intervención II", anio: 1, semestre: 2, prereqs: ["TOEI1"] },

  // Segundo Año
  { codigo: "PST", nombre: "Psicología Social y del Trabajo", anio: 2, semestre: 3, prereqs: ["PGE"] },
  { codigo: "ANT", nombre: "Antropología", anio: 2, semestre: 3, prereqs: ["PGE"] },
  { codigo: "MORF2", nombre: "Morfología II: Anatomía, Fisiología y Embriología", anio: 2, semestre: 3, prereqs: ["MORF1"] },
  { codigo: "FISGEN", nombre: "Fisiología General", anio: 2, semestre: 3, prereqs: ["BCG"] },
  { codigo: "MPEO", nombre: "Modelos Pragmáticos del Estudio de la Ocupación", anio: 2, semestre: 3, prereqs: ["FEC"] },
  { codigo: "TOEI3", nombre: "Terapia Ocupacional y Estrategias de Intervención III", anio: 2, semestre: 3, prereqs: ["TOEI2"] },

  { codigo: "SMP", nombre: "Salud Mental y Psicoeducación", anio: 2, semestre: 4, prereqs: ["ANT"] },
  { codigo: "FISDS", nombre: "Fisiología de Sistemas", anio: 2, semestre: 4, prereqs: ["FISGEN"] },
  { codigo: "MEEO", nombre: "Modelos Emergentes del Estudio de la Ocupación", anio: 2, semestre: 4, prereqs: ["MPEO"] },
  { codigo: "ICST", nombre: "Investigación en Ciencias de la Salud", anio: 2, semestre: 4, prereqs: [] },
  { codigo: "TOEI4", nombre: "Terapia Ocupacional y Estrategias de Intervención IV", anio: 2, semestre: 4, prereqs: ["TOEI3"] },

  // Tercer Año
  { codigo: "FAR", nombre: "Farmacología", anio: 3, semestre: 5, prereqs: ["FISDS"] },
  { codigo: "FISPAT", nombre: "Fisiopatología", anio: 3, semestre: 5, prereqs: ["FAR"] },
  { codigo: "ANEU", nombre: "Alteraciones Neuromusculoesqueléticas", anio: 3, semestre: 5, prereqs: ["FISPAT"] },
  { codigo: "ICTO1", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional I", anio: 3, semestre: 5, prereqs: ["ICST", "MEEO"] },
  { codigo: "TOEI5", nombre: "Terapia Ocupacional y Estrategias de Intervención V", anio: 3, semestre: 5, prereqs: ["TOEI4"] },

  { codigo: "ICTO2", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional II", anio: 3, semestre: 6, prereqs: ["ICTO1"] },
  { codigo: "TOEI6", nombre: "Terapia Ocupacional y Estrategias de Intervención VI", anio: 3, semestre: 6, prereqs: ["TOEI5"] },
  { codigo: "PI1", nombre: "Práctica Integrada I", anio: 3, semestre: 6, prereqs: ["TOEI1", "TOEI2"] },
  { codigo: "GES1", nombre: "Gestión I", anio: 3, semestre: 6, prereqs: [] },
  { codigo: "GES2", nombre: "Gestión en Salud II", anio: 3, semestre: 6, prereqs: ["GES1"] },
  { codigo: "GATO", nombre: "Gestión Aplicada a Terapia Ocupacional", anio: 3, semestre: 6, prereqs: ["GES2"] },

  // Cuarto Año
  { codigo: "ICTO3", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional III", anio: 4, semestre: 7, prereqs: ["ICTO2"] },
  { codigo: "TOEI7", nombre: "Terapia Ocupacional y Estrategias de Intervención VII", anio: 4, semestre: 7, prereqs: ["TOEI6"] },
  { codigo: "PI2", nombre: "Práctica Integrada II: En Educación/Trabajo", anio: 4, semestre: 7, prereqs: ["PI1"] },
  { codigo: "GATOS", nombre: "Gestión Aplicada a la Salud", anio: 4, semestre: 7, prereqs: ["GATO"] },

  { codigo: "ICTO4", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional IV", anio: 4, semestre: 8, prereqs: ["ICTO3"] },
  { codigo: "TOEI8", nombre: "Terapia Ocupacional y Estrategias de Intervención VIII", anio: 4, semestre: 8, prereqs: ["TOEI7"] },
  { codigo: "PI3", nombre: "Práctica Integrada III: En Salud", anio: 4, semestre: 8, prereqs: ["PI2"] },
  { codigo: "SEM", nombre: "Seminario de Titulación", anio: 4, semestre: 8, prereqs: ["ICTO4"] },

  // Quinto Año
  { codigo: "PI4", nombre: "Práctica Profesional Supervisada", anio: 5, semestre: 9, prereqs: ["PI3"] },
  { codigo: "TESIS", nombre: "Tesis", anio: 5, semestre: 9, prereqs: ["SEM"] },
  { codigo: "TOEIC", nombre: "Terapia Ocupacional en Equipos Interdisciplinarios y Comunitarios", anio: 5, semestre: 9, prereqs: ["TOEI8"] },

  { codigo: "PI5", nombre: "Práctica Profesional Supervisada II", anio: 5, semestre: 10, prereqs: ["PI4"] },
  { codigo: "TESIS2", nombre: "Tesis II", anio: 5, semestre: 10, prereqs: ["TESIS"] },
  { codigo: "TOEIC2", nombre: "Terapia Ocupacional en Intervenciones Avanzadas", anio: 5, semestre: 10, prereqs: ["TOEIC"] },
];

// Variables para controlar estado de aprobados
let ramosAprobados = new Set();

// Función para crear el HTML de la malla curricular
function crearMalla() {
  const mallaDiv = document.getElementById("malla");
  mallaDiv.innerHTML = "";

  // Agrupar por año
  for (let anio = 1; anio <= 5; anio++) {
    const anioDiv = document.createElement("div");
    anioDiv.classList.add("anio");

    const anioTitulo = document.createElement("div");
    anioTitulo.classList.add("anio-titulo");
    anioTitulo.textContent = `Año ${anio}`;
    anioDiv.appendChild(anioTitulo);

    // Agrupar por semestre dentro del año
    const semestresDiv = document.createElement("div");
    semestresDiv.classList.add("semestres");

    for (let semestre = 1; semestre <= 2; semestre++) {
      const semestreDiv = document.createElement("div");
      semestreDiv.classList.add("semestre");

      const semestreTitulo = document.createElement("h2");
      semestreTitulo.textContent = `Semestre ${semestre}`;
      semestreDiv.appendChild(semestreTitulo);

      // Filtrar ramos de ese año y semestre
      const ramosFiltrados = ramos.filter(r => r.anio === anio && r.semestre === semestre);

      ramosFiltrados.forEach(ramo => {
        const ramoDiv = document.createElement("div");
        ramoDiv.classList.add("ramo");
        ramoDiv.textContent = `${ramo.codigo} - ${ramo.nombre}`;

        // Verificar si puede desbloquearse (todos los prereqs aprobados)
        const puedeTomar = ramo.prereqs.every(pr => ramosAprobados.has(pr));

        if (ramosAprobados.has(ramo.codigo)) {
          ramoDiv.classList.add("aprobado");
        } else if (!puedeTomar) {
          ramoDiv.classList.add("bloqueado");
        }

        // Click para marcar/aprobar ramo solo si está desbloqueado
        ramoDiv.addEventListener("click", () => {
          if (ramoDiv.classList.contains("bloqueado")) return;

          if (ramosAprobados.has(ramo.codigo)) {
            ramosAprobados.delete(ramo.codigo);
          } else {
            ramosAprobados.add(ramo.codigo);
          }
          crearMalla();
        });

        semestreDiv.appendChild(ramoDiv);
      });

      semestresDiv.appendChild(semestreDiv);
    }

    anioDiv.appendChild(semestresDiv);
    mallaDiv.appendChild(anioDiv);
  }
}

// Inicializar la malla
crearMalla();

