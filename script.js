const semestres = [
  {
    nombre: "I Semestre",
    ramos: [
      { id: "fund_psic_sociocult", nombre: "Fundamentos Psicológicos y Socioculturales de la Intervención", requiere: [] },
      { id: "bio_cel_gen", nombre: "Biología Celular y Genética", requiere: [] },
      { id: "quim_general_organica", nombre: "Química General y Orgánica", requiere: [] },
      { id: "intro_ter_ocup", nombre: "Introducción a la Terapia Ocupacional", requiere: [] },
      { id: "electivo_fg1", nombre: "Electivo Formación General", requiere: [] },
      { id: "matematicas", nombre: "Matemáticas", requiere: [] },
      { id: "ter_ocup_estr_int_i", nombre: "Terapia Ocupacional y Estrategias de Intervención I", requiere: [] }
    ]
  },
  {
    nombre: "II Semestre",
    ramos: [
      { id: "psic_general_evolutiva", nombre: "Psicología General y Evolutiva", requiere: ["fund_psic_sociocult"] },
      { id: "bioquimica", nombre: "Bioquímica", requiere: ["bio_cel_gen", "quim_general_organica"] },
      { id: "morfologia_i", nombre: "Morfología I", requiere: ["bio_cel_gen"] },
      { id: "fund_epist_ci_ocup", nombre: "Fundamentos y Epistemología de la Ciencia de la Ocupación", requiere: ["intro_ter_ocup"] },
      { id: "ter_ocup_estr_int_ii", nombre: "Terapia Ocupacional y Estrategias de Intervención II", requiere: ["ter_ocup_estr_int_i"] }
    ]
  },
  {
    nombre: "III Semestre",
    ramos: [
      { id: "psic_social_trabajo", nombre: "Psicología Social y del Trabajo", requiere: ["psic_general_evolutiva"] },
      { id: "antropologia", nombre: "Antropología", requiere: ["psic_general_evolutiva"] },
      { id: "morfologia_ii", nombre: "Morfología II", requiere: ["morfologia_i"] },
      { id: "fisiologia_general", nombre: "Fisiología General", requiere: ["bio_cel_gen"] },
      { id: "modelos_pragmaticos_ocup", nombre: "Modelos Pragmáticos del Estudio de la Ocupación", requiere: ["fund_epist_ci_ocup"] },
      { id: "ter_ocup_estr_int_iii", nombre: "Terapia Ocupacional y Estrategias de Intervención III", requiere: ["ter_ocup_estr_int_ii"] }
    ]
  },
  {
    nombre: "IV Semestre",
    ramos: [
      { id: "salud_mental_psicoeducacion", nombre: "Salud Mental y Psicoeducación", requiere: ["antropologia"] },
      { id: "fisiologia_sistemas", nombre: "Fisiología de Sistemas", requiere: ["fisiologia_general"] },
      { id: "modelos_emergentes_ocup", nombre: "Modelos Emergentes del Estudio de la Ocupación", requiere: ["modelos_pragmaticos_ocup"] },
      { id: "investigacion_cs_salud", nombre: "Investigación en Ciencias de la Salud", requiere: [] },
      { id: "ter_ocup_estr_int_iv", nombre: "Terapia Ocupacional y Estrategias de Intervención IV", requiere: ["ter_ocup_estr_int_iii"] }
    ]
  },
  {
    nombre: "V Semestre",
    ramos: [
      { id: "farmacologia", nombre: "Farmacología", requiere: ["fisiologia_sistemas"] },
      { id: "fisiopatologia", nombre: "Fisiopatología", requiere: ["farmacologia"] },
      { id: "alteraciones_neuromusculoesquel", nombre: "Alteraciones Neuromusculoesqueléticas", requiere: ["fisiopatologia"] },
      { id: "investigacion_ci_ocup_ter_ocup_i", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional I", requiere: ["investigacion_cs_salud", "modelos_emergentes_ocup"] },
      { id: "ter_ocup_estr_int_v", nombre: "Terapia Ocupacional y Estrategias de Intervención V", requiere: ["ter_ocup_estr_int_iv"] }
    ]
  },
  {
    nombre: "VI Semestre",
    ramos: [
      { id: "investigacion_ci_ocup_ter_ocup_ii", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional II", requiere: ["investigacion_ci_ocup_ter_ocup_i"] },
      { id: "ter_ocup_estr_int_vi", nombre: "Terapia Ocupacional y Estrategias de Intervención VI", requiere: ["ter_ocup_estr_int_v"] },
      { id: "practica_integrada_i", nombre: "Práctica Integrada I", requiere: ["ter_ocup_estr_int_i", "ter_ocup_estr_int_ii"] },
      { id: "gestion_i", nombre: "Gestión I", requiere: [] },
      { id: "gestion_ii", nombre: "Gestión en Salud II", requiere: ["gestion_i"] },
      { id: "gestion_aplicada_ter_ocup", nombre: "Gestión Aplicada a Terapia Ocupacional", requiere: ["gestion_ii"] }
    ]
  },
  {
    nombre: "VII Semestre",
    ramos: [
      { id: "practica_integrada_ii", nombre: "Práctica Integrada II", requiere: ["practica_integrada_i"] },
      { id: "seminario_grado", nombre: "Seminario de Grado", requiere: ["investigacion_ci_ocup_ter_ocup_ii"] },
      { id: "ter_ocup_estr_int_vii", nombre: "Terapia Ocupacional y Estrategias de Intervención VII", requiere: ["ter_ocup_estr_int_vi"] },
      { id: "electivo_fg2", nombre: "Electivo Formación General II", requiere: [] }
    ]
  },
  {
    nombre: "VIII Semestre",
    ramos: [
      { id: "practica_profesional_i", nombre: "Práctica Profesional I", requiere: ["practica_integrada_ii"] }
    ]
  },
  {
    nombre: "IX Semestre",
    ramos: [
      { id: "practica_profesional_ii", nombre: "Práctica Profesional II", requiere: ["practica_profesional_i"] }
    ]
  },
  {
    nombre: "X Semestre",
    ramos: [
      { id: "seminario_grado_aplicacion", nombre: "Seminario de Grado Aplicación", requiere: ["seminario_grado"] }
    ]
  }
];

// Estado de ramos aprobados
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
      boton.disabled = !puedeAprobar(ramo);
      if (aprobados.has(ramo.id)) boton.classList.add("approved");
      if (!puedeAprobar(ramo)) boton.classList.add("locked");

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
