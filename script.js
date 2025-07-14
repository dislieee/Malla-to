// Datos de los semestres y ramos
const semestres = [
  {
    nombre: "I Semestre",
    ramos: [
      { id: "fund_psic_sociocult", nombre: "Fundamentos Psicológicos y Socioculturales de la Intervención", abre: ["psic_general_evolutiva"] },
      { id: "bio_cel_gen", nombre: "Biología Celular y Genética", abre: ["bioquimica", "morfologia_i", "fisiologia_general"] },
      { id: "quim_general_organica", nombre: "Química General y Orgánica", abre: ["bioquimica"] },
      { id: "intro_ter_ocup", nombre: "Introducción a la Terapia Ocupacional", abre: ["fund_epist_ci_ocup"] },
      { id: "electivo_fg1", nombre: "Electivo Formación General", abre: [] },
      { id: "matematicas", nombre: "Matemáticas", abre: [] },
      { id: "ter_ocup_estr_int_i", nombre: "Terapia Ocupacional y Estrategias de Intervención I", abre: ["ter_ocup_estr_int_ii", "practica_integrada_i"] }
    ]
  },
  {
    nombre: "II Semestre",
    ramos: [
      { id: "psic_general_evolutiva", nombre: "Psicología General y Evolutiva", abre: ["antropologia"] },
      { id: "bioquimica", nombre: "Bioquímica", abre: ["farmacologia"] },
      { id: "morfologia_i", nombre: "Morfología I: Anatomía, Histología y Embriología", abre: ["morfologia_ii"] },
      { id: "fund_epist_ci_ocup", nombre: "Fundamentos y Epistemología de la Ciencia de la Ocupación", abre: [] },
      { id: "ter_ocup_estr_int_ii", nombre: "Terapia Ocupacional y Estrategias de Intervención II", requiere: ["ter_ocup_estr_int_i"], abre: ["ter_ocup_estr_int_iii"] }
    ]
  },
  {
    nombre: "III Semestre",
    ramos: [
      { id: "psic_social_trabajo", nombre: "Psicología Social y del Trabajo", requiere: ["psic_general_evolutiva"] },
      { id: "antropologia", nombre: "Antropología", abre: ["salud_mental_psicoeducacion"] },
      { id: "morfologia_ii", nombre: "Morfología II: Anatomía, Fisiología y Embriología", requiere: ["morfologia_i"] },
      { id: "fisiologia_general", nombre: "Fisiología General", requiere: ["bio_cel_gen"], abre: ["fisiologia_sistemas"] },
      { id: "modelos_pragmaticos_ocup", nombre: "Modelos Pragmáticos del Estudio de la Ocupación", requiere: ["fund_epist_ci_ocup"], abre: ["modelos_emergentes_ocup"] },
      { id: "ter_ocup_estr_int_iii", nombre: "Terapia Ocupacional y Estrategias de Intervención III", requiere: ["ter_ocup_estr_int_ii"], abre: ["ter_ocup_estr_int_iv"] }
    ]
  },
  {
    nombre: "IV Semestre",
    ramos: [
      { id: "salud_mental_psicoeducacion", nombre: "Salud Mental y Psicoeducación", requiere: ["antropologia"] },
      { id: "fisiologia_sistemas", nombre: "Fisiología de Sistemas", requiere: ["fisiologia_general"], abre: ["farmacologia"] },
      { id: "modelos_emergentes_ocup", nombre: "Modelos Emergentes del Estudio de la Ocupación", requiere: ["modelos_pragmaticos_ocup"], abre: ["investigacion_ci_ocup_ter_ocup_i"] },
      { id: "investigacion_cs_salud", nombre: "Investigación en Ciencias de la Salud", abre: ["investigacion_ci_ocup_ter_ocup_i"] },
      { id: "ter_ocup_estr_int_iv", nombre: "Terapia Ocupacional y Estrategias de Intervención IV", requiere: ["ter_ocup_estr_int_iii"], abre: ["ter_ocup_estr_int_v"] }
    ]
  },
  {
    nombre: "V Semestre",
    ramos: [
      { id: "farmacologia", nombre: "Farmacología", requiere: ["fisiologia_sistemas"], abre: ["fisiopatologia"] },
      { id: "fisiopatologia", nombre: "Fisiopatología", requiere: ["farmacologia"], abre: ["alteraciones_neuromusculoesquel"] },
      { id: "alteraciones_neuromusculoesquel", nombre: "Alteraciones Neuromusculoesqueléticas", requiere: ["fisiopatologia"] },
      { id: "investigacion_ci_ocup_ter_ocup_i", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional I", requiere: ["investigacion_cs_salud", "modelos_emergentes_ocup"], abre: ["investigacion_ci_ocup_ter_ocup_ii"] },
      { id: "ter_ocup_estr_int_v", nombre: "Terapia Ocupacional y Estrategias de Intervención V", requiere: ["ter_ocup_estr_int_iv"], abre: ["ter_ocup_estr_int_vi"] }
    ]
  },
  {
    nombre: "VI Semestre",
    ramos: [
      { id: "investigacion_ci_ocup_ter_ocup_ii", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional II", requiere: ["investigacion_ci_ocup_ter_ocup_i"], abre: ["investigacion_ci_ocup_ter_ocup_iii"] },
      { id: "ter_ocup_estr_int_vi", nombre: "Terapia Ocupacional y Estrategias de Intervención VI", requiere: ["ter_ocup_estr_int_v"], abre: ["ter_ocup_estr_int_vii"] },
      { id: "practica_integrada_i", nombre: "Práctica Integrada I", requiere: ["ter_ocup_estr_int_i", "ter_ocup_estr_int_ii"] },
      { id: "gestion_i", nombre: "Gestión I", abre: ["gestion_ii"] },
      { id: "gestion_ii", nombre: "Gestión en Salud II", requiere: ["gestion_i"], abre: ["gestion_aplicada_ter_ocup"] },
      { id: "gestion_aplicada_ter_ocup", nombre: "Gestión Aplicada a Terapia Ocupacional", requiere: ["gestion_ii"] }
    ]
  },
  {
    nombre: "VII Semestre",
    ramos: [
      { id: "investigacion_ci_ocup_ter_ocup_iii", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional III", requiere: ["investigacion_ci_ocup_ter_ocup_ii"], abre: ["investigacion_ci_ocup_ter_ocup_iv"] },
      { id: "ter_ocup_estr_int_vii", nombre: "Terapia Ocupacional y Estrategias de Intervención VII", requiere: ["ter_ocup_estr_int_vi"], abre: ["ter_ocup_estr_int_viii"] },
      { id: "practica_integrada_ii", nombre: "Práctica Integrada II: En Educación/Trabajo", requiere: ["practica_integrada_i"] },
      { id: "ocupacion_redes", nombre: "Ocupación y Redes" },
      { id: "ocupacion_cultura", nombre: "Ocupación y Cultura" },
      { id: "historias_perfiles_ocupacionales", nombre: "Historias y Perfiles Ocupacionales" }
    ]
  },
  {
    nombre: "VIII Semestre",
    ramos: [
      { id: "investigacion_ci_ocup_ter_ocup_iv", nombre: "Investigación en Ciencia de la Ocupación y Terapia Ocupacional IV", requiere: ["investigacion_ci_ocup_ter_ocup_iii"] },
      { id: "ter_ocup_estr_int_viii", nombre: "Terapia Ocupacional y Estrategias de Intervención VIII", requiere: ["ter_ocup_estr_int_vii"] },
      { id: "practica_integrada_iii", nombre: "Práctica Integrada III: En Desarrollo Social/Justicia", requiere: ["practica_integrada_ii"] },
      { id: "analisis_ocupacionales_avanzados", nombre: "Análisis Ocupacionales Avanzados" },
      { id: "fg_grips", nombre: "FG: GRIPS" },
      { id: "practica_prof_i", nombre: "Práctica Profesional I", requiere: ["practica_integrada_iii"] }
    ]
  },
  {
    nombre: "IX Semestre",
    ramos: [
      { id: "practica_prof_ii", nombre: "Práctica Profesional II", requiere: ["practica_prof_i"] },
      { id: "practica_prof_iii", nombre: "Práctica Profesional III", requiere: ["practica_prof_ii"] }
    ]
  },
  {
    nombre: "X Semestre",
    ramos: [
      { id: "seminario_grado", nombre: "Seminario de Grado" },
      { id: "seminario_grado_aplicacion", nombre: "Seminario de Grado Aplicación" }
    ]
  }
];

// Guardar y cargar aprobados en localStorage
const STORAGE_KEY = "mallaAprobados";

function guardarAprobados() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(aprobados)));
}

function cargarAprobados() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    return new Set(JSON.parse(data));
  }
  return new Set();
}

// Verifica si un ramo está desbloqueado (sus prerrequisitos están aprobados)
function estaDesbloqueado(ramo) {
  if (!ramo.requiere) return true;
  return ramo.requiere.every(reqId => aprobados.has(reqId));
}

const mallaDiv = document.getElementById("malla");
let aprobados = cargarAprobados();

function crearMalla() {
  mallaDiv.innerHTML = "";

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
      boton.dataset.id = ramo.id;

      if (aprobados.has(ramo.id)) {
        boton.classList.add("approved");
      } else if (!estaDesbloqueado(ramo)) {
        boton.classList.add("locked");
        boton.disabled = true;
      }

      boton.addEventListener("click", () => {
        if (boton.disabled) return;

        if (aprobados.has(ramo.id)) {
          aprobados.delete(ramo.id);
        } else {
          aprobados.add(ramo.id);
        }

        guardarAprobados();
        crearMalla();
      });

      divSem.appendChild(boton);
    });

    mallaDiv.appendChild(divSem);
  });
}

crearMalla();


