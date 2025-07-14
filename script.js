const ramos = [
  {
    id: "biologia",
    nombre: "Biología Celular y Genética",
    requisitos: [],
  },
  {
    id: "quimica",
    nombre: "Química General y Orgánica",
    requisitos: [],
  },
  {
    id: "bioquimica",
    nombre: "Bioquímica",
    requisitos: ["biologia", "quimica"],
  },
  {
    id: "morfo1",
    nombre: "Morfología I",
    requisitos: ["biologia"],
  },
  {
    id: "fisio_general",
    nombre: "Fisiología General",
    requisitos: ["biologia"],
  },
  {
    id: "intro_to",
    nombre: "Introducción a la Terapia Ocupacional",
    requisitos: [],
  },
  {
    id: "fund_episte",
    nombre: "Fundamentos y Epistemología de la Ciencia de la Ocupación",
    requisitos: ["intro_to"],
  },
  {
    id: "psico_fund",
    nombre: "Fund. Psicológicos y Socioculturales de la Intervención",
    requisitos: [],
  },
  {
    id: "psico_general",
    nombre: "Psicología General y Evolutiva",
    requisitos: ["psico_fund"],
  },
  {
    id: "toi1",
    nombre: "TO y Estrategias de Intervención I",
    requisitos: [],
  },
  {
    id: "toi2",
    nombre: "TO y Estrategias de Intervención II",
    requisitos: ["toi1"],
  }
];

const contenedor = document.getElementById("malla");

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.id = ramo.id;
  div.innerText = ramo.nombre;
  if (ramo.requisitos.length > 0) {
    div.classList.add("bloqueado");
  }
  div.addEventListener("click", () => aprobarRamo(ramo));
  contenedor.appendChild(div);
}

function aprobarRamo(ramo) {
  const div = document.getElementById(ramo.id);
  if (div.classList.contains("bloqueado")) return;
  div.classList.toggle("aprobado");

  ramos.forEach((r) => {
    const requisitosCumplidos = r.requisitos.every(
      (reqId) => document.getElementById(reqId).classList.contains("aprobado")
    );
    const elemento = document.getElementById(r.id);
    if (requisitosCumplidos) {
      elemento.classList.remove("bloqueado");
    } else if (!elemento.classList.contains("aprobado")) {
      elemento.classList.add("bloqueado");
    }
  });
}

ramos.forEach(crearRamo);

