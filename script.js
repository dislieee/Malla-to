const ramos = [
  // Primer Año - I Semestre
  {
    nombre: "Fundamentos Psicológicos y Socioculturales de la Intervención",
    codigo: "psico_general",
    semestre: "I Semestre",
    anio: 1,
    abre: ["psico_evolutiva"]
  },
  {
    nombre: "Biología Celular y Genética",
    codigo: "biocel_genetica",
    semestre: "I Semestre",
    anio: 1,
    abre: ["bioquimica", "morfologia1", "fisiologia"]
  },
  {
    nombre: "Química General y Orgánica",
    codigo: "quimica",
    semestre: "I Semestre",
    anio: 1,
    abre: ["bioquimica"]
  },
  {
    nombre: "Introducción a la Terapia Ocupacional",
    codigo: "intro_to",
    semestre: "I Semestre",
    anio: 1,
    abre: ["fund_epistemologia"]
  },
  {
    nombre: "Electivo Formación General",
    codigo: "electivo_fg",
    semestre: "I Semestre",
    anio: 1
  },
  {
    nombre: "Matemáticas",
    codigo: "matematicas",
    semestre: "I Semestre",
    anio: 1
  },
  {
    nombre: "Terapia Ocupacional y Estrategias de Intervención I",
    codigo: "to_estrategias1",
    semestre: "I Semestre",
    anio: 1,
    abre: ["to_estrategias2", "practica_integrada1"]
  },

  // Primer Año - II Semestre
  {
    nombre: "Psicología General y Evolutiva",
    codigo: "psico_evolutiva",
    semestre: "II Semestre",
    anio: 1,
    abre: ["antropologia"]
  },
  {
    nombre: "Bioquímica",
    codigo: "bioquimica",
    semestre: "II Semestre",
    anio: 1,
    abre: ["farmacologia"]
  },
  {
    nombre: "Morfología I: Anatomía, Histología y Embriología",
    codigo: "morfologia1",
    semestre: "II Semestre",
    anio: 1,
    abre: ["morfologia2"]
  },
  {
    nombre: "Fundamentos y Epistemología de la Ciencia de la Ocupación",
    codigo: "fund_epistemologia",
    semestre: "II Semestre",
    anio: 1
  },
  {
    nombre: "Terapia Ocupacional y Estrategias de Intervención II",
    codigo: "to_estrategias2",
    semestre: "II Semestre",
    anio: 1,
    prereqs: ["to_estrategias1"],
    abre: ["to_estrategias3"]
  },

  // Puedes seguir agregando el resto de los ramos siguiendo esta estructura...

];

// Generar interfaz
function generarMalla() {
  const container = document.getElementById("malla");
  const orden = {};

  ramos.forEach(ramo => {
    const clave = `${ramo.anio}-${ramo.semestre}`;
    if (!orden[clave]) {
      orden[clave] = [];
    }
    orden[clave].push(ramo);
  });

  Object.keys(orden).sort().forEach(clave => {
    const grupo = orden[clave];
    const semestreBox = document.createElement("section");
    semestreBox.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `${grupo[0].anio}° Año - ${grupo[0].semestre}`;
    semestreBox.appendChild(titulo);

    const contenedor = document.createElement("div");
    contenedor.className = "ramos";

    grupo.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo bloqueado";
      div.id = ramo.codigo;

      const nombre = document.createElement("div");
      nombre.className = "nombre";
      nombre.textContent = ramo.nombre;

      const estado = document.createElement("div");
      estado.className = "estado";
      estado.textContent = "Bloqueado";

      div.appendChild(nombre);
      div.appendChild(estado);

      div.addEventListener("click", () => aprobarRamo(ramo.codigo));
      contenedor.appendChild(div);
    });

    semestreBox.appendChild(contenedor);
    container.appendChild(semestreBox);
  });

  // Desbloquear los ramos sin prerequisitos
  ramos.forEach(ramo => {
    const tienePrereqs = ramos.some(r => r.abre?.includes(ramo.codigo));
    if (!tienePrereqs || ramo.prereqs === undefined) {
      desbloquearRamo(ramo.codigo);
    }
  });
}

function aprobarRamo(codigo) {
  const div = document.getElementById(codigo);
  if (div.classList.contains("bloqueado")) return;

  if (!div.classList.contains("aprobado")) {
    div.classList.add("aprobado");
    div.querySelector(".estado").textContent = "Aprobado";

    const ramo = ramos.find(r => r.codigo === codigo);
    if (ramo?.abre) {
      ramo.abre.forEach(codigoAbierto => desbloquearRamo(codigoAbierto));
    }
  }
}

function desbloquearRamo(codigo) {
  const div = document.getElementById(codigo);
  if (!div) return;

  const ramo = ramos.find(r => r.codigo === codigo);
  if (ramo?.prereqs) {
    const todosAprobados = ramo.prereqs.every(pr =>
      document.getElementById(pr)?.classList.contains("aprobado")
    );
    if (!todosAprobados) return;
  }

  div.classList.remove("bloqueado");
  div.querySelector(".estado").textContent = "Disponible";
}

window.onload = generarMalla;



