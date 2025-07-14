const semestres = [
  {
    nombre: "I Semestre",
    ramos: [
      { id: "fund_psico", nombre: "Fund. Psicológicos y Socioculturales", requiere: [] },
      { id: "biologia", nombre: "Biología Celular y Genética", requiere: [] },
      { id: "quimica", nombre: "Química General y Orgánica", requiere: [] },
      { id: "intro_to", nombre: "Introducción a la TO", requiere: [] },
      { id: "fg1", nombre: "Electivo Formación General", requiere: [] },
      { id: "matematicas", nombre: "Matemáticas", requiere: [] },
      { id: "to_estrat_i", nombre: "TO y Estrategias de Intervención I", requiere: [] }
    ]
  },
  {
    nombre: "II Semestre",
    ramos: [
      { id: "psico_gen", nombre: "Psicología General y Evolutiva", requiere: ["fund_psico"] },
      { id: "bioquimica", nombre: "Bioquímica", requiere: ["biologia", "quimica"] },
      { id: "morfologia_i", nombre: "Morfología I", requiere: ["biologia"] },
      { id: "epistemologia", nombre: "Fund. y Epistemología de la Ocupación", requiere: ["intro_to"] },
      { id: "to_estrat_ii", nombre: "TO y Estrategias de Intervención II", requiere: ["to_estrat_i"] }
    ]
  },
  {
    nombre: "III Semestre",
    ramos: [
      { id: "psico_social", nombre: "Psicología Social y del Trabajo", requiere: ["psico_gen"] },
      { id: "antropologia", nombre: "Antropología", requiere: ["psico_gen"] },
      { id: "morfologia_ii", nombre: "Morfología II", requiere: ["morfologia_i"] },
      { id: "fisiologia", nombre: "Fisiología General", requiere: ["biologia"] },
      { id: "modelos_prag", nombre: "Modelos Pragmáticos de la Ocupación", requiere: ["epistemologia"] },
      { id: "to_estrat_iii", nombre: "TO y Estrategias de Intervención III", requiere: ["to_estrat_ii"] }
    ]
  },
  {
    nombre: "IV Semestre",
    ramos: [
      { id: "salud_mental", nombre: "Salud Mental y Psicoeducación", requiere: ["antropologia"] },
      { id: "fisiologia_sis", nombre: "Fisiología de Sistemas", requiere: ["fisiologia"] },
      { id: "modelos_emerg", nombre: "Modelos Emergentes Ocupación", requiere: ["modelos_prag"] },
      { id: "inv_salud", nombre: "Investigación en Ciencias de la Salud", requiere: [] },
      { id: "to_estrat_iv", nombre: "TO y Estrategias de Intervención IV", requiere: ["to_estrat_iii"] }
    ]
  },
  {
    nombre: "V Semestre",
    ramos: [
      { id: "farmacologia", nombre: "Farmacología", requiere: ["fisiologia_sis"] },
      { id: "fisiopatologia", nombre: "Fisiopatología", requiere: ["farmacologia"] },
      { id: "alteraciones", nombre: "Alteraciones Neuromusculoesqueléticas", requiere: ["fisiopatologia"] },
      { id: "inv_to_i", nombre: "Investigación en TO I", requiere: ["inv_salud", "modelos_emerg"] },
      { id: "to_estrat_v", nombre: "TO y Estrategias de Intervención V", requiere: ["to_estrat_iv"] }
    ]
  },
  {
    nombre: "VI Semestre",
    ramos: [
      { id: "inv_to_ii", nombre: "Investigación en TO II", requiere: ["inv_to_i"] },
      { id: "to_estrat_vi", nombre: "TO y Estrategias de Intervención VI", requiere: ["to_estrat_v"] },
      { id: "practica_i", nombre: "Práctica Integrada I", requiere: ["to_estrat_i", "to_estrat_ii"] },
      { id: "gestion_i", nombre: "Gestión I", requiere: [] },
      { id: "gestion_ii", nombre: "Gestión en Salud II", requiere: ["gestion_i"] },
      { id: "gestion_aplicada", nombre: "Gestión Aplicada a TO", requiere: ["gestion_ii"] }
    ]
  },
  {
    nombre: "VII Semestre",
    ramos: [
      { id: "inv_to_iii", nombre: "Investigación en TO III", requiere: ["inv_to_ii"] },
      { id: "to_estrat_vii", nombre: "TO y Estrategias de Intervención VII", requiere: ["to_estrat_vi"] },
      { id: "practica_ii", nombre: "Práctica Integrada II", requiere: ["practica_i"] },
      { id: "ocupacion_redes", nombre: "Ocupación y Redes", requiere: [] },
      { id: "ocupacion_cultura", nombre: "Ocupación y Cultura", requiere: [] },
      { id: "historias_perfiles", nombre: "Historias y Perfiles Ocupacionales", requiere: [] }
    ]
  },
  {
    nombre: "VIII Semestre",
    ramos: [
      { id: "inv_to_iv", nombre: "Investigación en TO IV", requiere: ["inv_to_iii"] },
      { id: "to_estrat_viii", nombre: "TO y Estrategias de Intervención VIII", requiere: ["to_estrat_vii"] },
      { id: "practica_iii", nombre: "Práctica Integrada III", requiere: ["practica_ii"] },
      { id: "analisis_avanzados", nombre: "Análisis Ocupacionales Avanzados", requiere: [] },
      { id: "fg2", nombre: "FG: GRIPS", requiere: [] },
      { id: "practica_pro_i", nombre: "Práctica Profesional I", requiere: ["practica_iii"] }
    ]
  },
  {
    nombre: "IX Semestre",
    ramos: [
      { id: "practica_pro_ii", nombre: "Práctica Profesional II", requiere: ["practica_pro_i"] }
    ]
  },
  {
    nombre: "X Semestre",
    ramos: [
      { id: "titulo", nombre: "Proyecto de Titulación", requiere: ["practica_pro_ii"] }
    ]
  }
];

let aprobados = new Set(JSON.parse(localStorage.getItem("aprobados")) || []);

function guardar() {
  localStorage.setItem("aprobados", JSON.stringify(Array.from(aprobados)));
}

function puedeAprobar(ramo) {
  if (!ramo.requiere || ramo.requiere.length === 0) return true;
  return ramo.requiere.every(req => aprobados.has(req));
}

const mallaDiv = document.getElementById("malla");

function renderizarMalla() {
  mallaDiv.innerHTML = "";
  semestres.forEach(semestre => {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";

    const titulo = document.createElement("div");
    titulo.className = "semestre-title";
    titulo.textContent = semestre.nombre;
    divSemestre.appendChild(titulo);

    semestre.ramos.forEach(ramo => {
      const boton = document.createElement("button");
      boton.className = "ramo";
      boton.textContent = ramo.nombre;
      if (aprobados.has(ramo.id)) {
        boton.classList.add("approved");
      } else if (!puedeAprobar(ramo)) {
        boton.classList.add("locked");
        boton.disabled = true;
      }

      boton.onclick = () => {
        if (aprobados.has(ramo.id)) {
          aprobados.delete(ramo.id);
        } else if (puedeAprobar(ramo)) {
          aprobados.add(ramo.id);
        }
        guardar();
        renderizarMalla();
      };

      divSemestre.appendChild(boton);
    });

    mallaDiv.appendChild(divSemestre);
  });
}

renderizarMalla();

