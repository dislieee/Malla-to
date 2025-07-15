const malla = [
  { nombre: "I Semestre", ramos: [
    { id: "psicologia_general", nombre: "Psicología General y Evolutiva", desbloquea: ["antropologia", "psicologia_social"] },
    { id: "biologia_celular", nombre: "Biología Celular y Genética", desbloquea: ["bioquimica", "morfologia1", "fisiologia_general"] },
    { id: "quimica", nombre: "Química General y Orgánica", desbloquea: ["bioquimica"] },
    { id: "intro_to", nombre: "Introducción a la Terapia Ocupacional", desbloquea: ["fundamentos_to"] },
    { id: "electivo_fg", nombre: "Electivo Formación General" },
    { id: "matematicas", nombre: "Matemáticas" },
    { id: "to_estrategias1", nombre: "TO Intervención I", desbloquea: ["to_estrategias2", "practica1"] },
  ]},
  { nombre: "II Semestre", ramos: [
    { id: "bioquimica", nombre: "Bioquímica", requisitos: ["quimica", "biologia_celular"], desbloquea: ["farmacologia"] },
    { id: "morfologia1", nombre: "Morfología I", requisitos: ["biologia_celular"], desbloquea: ["morfologia2"] },
    { id: "fundamentos_to", nombre: "Fundamentos y Epistemología", requisitos: ["intro_to"], desbloquea: ["modelos_pragmaticos"] },
    { id: "to_estrategias2", nombre: "TO Intervención II", requisitos: ["to_estrategias1"], desbloquea: ["to_estrategias3"] },
  ]},
  { nombre: "III Semestre", ramos: [
    { id: "psicologia_social", nombre: "Psicología Social y del Trabajo", requisitos: ["psicologia_general"] },
    { id: "antropologia", nombre: "Antropología", requisitos: ["psicologia_general"], desbloquea: ["salud_mental"] },
    { id: "morfologia2", nombre: "Morfología II", requisitos: ["morfologia1"] },
    { id: "fisiologia_general", nombre: "Fisiología General", requisitos: ["biologia_celular"], desbloquea: ["fisiologia_sistemas"] },
    { id: "modelos_pragmaticos", nombre: "Modelos Pragmáticos", requisitos: ["fundamentos_to"], desbloquea: ["modelos_emergentes"] },
    { id: "to_estrategias3", nombre: "TO Intervención III", requisitos: ["to_estrategias2"], desbloquea: ["to_estrategias4"] },
  ]},
  { nombre: "IV Semestre", ramos: [
    { id: "salud_mental", nombre: "Salud Mental y Psicoeducación", requisitos: ["antropologia"] },
    { id: "fisiologia_sistemas", nombre: "Fisiología de Sistemas", requisitos: ["fisiologia_general"], desbloquea: ["farmacologia"] },
    { id: "modelos_emergentes", nombre: "Modelos Emergentes", requisitos: ["modelos_pragmaticos"], desbloquea: ["investigacion1"] },
    { id: "investigacion_salud", nombre: "Investigación en Ciencias de la Salud", desbloquea: ["investigacion1"] },
    { id: "to_estrategias4", nombre: "TO Intervención IV", requisitos: ["to_estrategias3"], desbloquea: ["to_estrategias5"] },
  ]},
  { nombre: "V Semestre", ramos: [
    { id: "farmacologia", nombre: "Farmacología", requisitos: ["fisiologia_sistemas"], desbloquea: ["fisiopatologia"] },
    { id: "fisiopatologia", nombre: "Fisiopatología", requisitos: ["farmacologia"], desbloquea: ["alteraciones_neuro"] },
    { id: "alteraciones_neuro", nombre: "Alteraciones Neuromusculoesqueléticas", requisitos: ["fisiopatologia"] },
    { id: "investigacion1", nombre: "Investigación I", requisitos: ["investigacion_salud", "modelos_emergentes"], desbloquea: ["investigacion2"] },
    { id: "to_estrategias5", nombre: "TO Intervención V", requisitos: ["to_estrategias4"], desbloquea: ["to_estrategias6"] },
  ]},
  { nombre: "VI Semestre", ramos: [
    { id: "investigacion2", nombre: "Investigación II", requisitos: ["investigacion1"], desbloquea: ["investigacion3"] },
    { id: "to_estrategias6", nombre: "TO Intervención VI", requisitos: ["to_estrategias5"], desbloquea: ["to_estrategias7"] },
    { id: "practica1", nombre: "Práctica Integrada I", requisitos: ["to_estrategias1", "to_estrategias2"] },
    { id: "gestion1", nombre: "Gestión I", desbloquea: ["gestion2"] },
    { id: "gestion2", nombre: "Gestión en Salud II", requisitos: ["gestion1"], desbloquea: ["gestion_aplicada"] },
    { id: "gestion_aplicada", nombre: "Gestión Aplicada TO", requisitos: ["gestion2"] },
  ]},
  { nombre: "VII Semestre", ramos: [
    { id: "investigacion3", nombre: "Investigación III", requisitos: ["investigacion2"], desbloquea: ["investigacion4"] },
    { id: "to_estrategias7", nombre: "TO Intervención VII", requisitos: ["to_estrategias6"], desbloquea: ["to_estrategias8"] },
    { id: "practica2", nombre: "Práctica Integrada II", requisitos: ["practica1"] },
    { id: "ocupacion_redes", nombre: "Ocupación y Redes" },
    { id: "ocupacion_cultura", nombre: "Ocupación y Cultura" },
    { id: "historias_ocupacionales", nombre: "Historias y Perfiles Ocupacionales" },
  ]},
  { nombre: "VIII Semestre", ramos: [
    { id: "investigacion4", nombre: "Investigación IV", requisitos: ["investigacion3"] },
    { id: "to_estrategias8", nombre: "TO Intervención VIII", requisitos: ["to_estrategias7"] },
    { id: "practica3", nombre: "Práctica Integrada III", requisitos: ["practica2"], desbloquea: ["practica_pro1"] },
    { id: "analisis_ocupacionales", nombre: "Análisis Ocupacionales Avanzados" },
    { id: "fg_grips", nombre: "FG: GRIPS" },
    { id: "practica_pro1", nombre: "Práctica Profesional I", requisitos: ["practica3"], desbloquea: ["practica_pro2"] },
  ]},
  { nombre: "IX Semestre", ramos: [
    { id: "practica_pro2", nombre: "Práctica Profesional II", requisitos: ["practica_pro1"], desbloquea: ["practica_pro3"] },
    { id: "practica_pro3", nombre: "Práctica Profesional III", requisitos: ["practica_pro2"], desbloquea: ["proyecto_titulacion"] },
  ]},
  { nombre: "X Semestre", ramos: [
    { id: "proyecto_titulacion", nombre: "Proyecto de Titulación", requisitos: ["practica_pro3"] }
  ]}
];

const aprobados = JSON.parse(localStorage.getItem("aprobados") || "[]");

function estaDesbloqueado(ramo) {
  if (!ramo.requisitos || ramo.requisitos.length === 0) return true;
  return ramo.requisitos.every(r => aprobados.includes(r));
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  malla.forEach(sem => {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = sem.nombre;
    semestreDiv.appendChild(titulo);

    sem.ramos.forEach(ramo => {
      const boton = document.createElement("button");
      boton.className = "ramo";
      boton.textContent = ramo.nombre;

      const icono = document.createElement("span");
      icono.className = "icono";

      if (aprobados.includes(ramo.id)) {
        icono.textContent = " ✅";
      } else if (!estaDesbloqueado(ramo)) {
        icono.textContent = " 🔒";
        boton.disabled = true;
      }

      boton.appendChild(icono);
      boton.addEventListener("click", () => {
        if (aprobados.includes(ramo.id)) {
          const index = aprobados.indexOf(ramo.id);
          aprobados.splice(index, 1);
        } else {
          aprobados.push(ramo.id);
        }
        localStorage.setItem("aprobados", JSON.stringify(aprobados));
        renderMalla();
      });

      semestreDiv.appendChild(boton);
    });

    contenedor.appendChild(semestreDiv);
  });
}

renderMalla();
