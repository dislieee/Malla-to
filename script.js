const ramos = [
  {
    nombre: "Biología Celular y Genética",
    prerequisitos: [],
    abre: ["Bioquímica", "Morfología I", "Fisiología General"]
  },
  {
    nombre: "Química General y Orgánica",
    prerequisitos: [],
    abre: ["Bioquímica"]
  },
  {
    nombre: "Bioquímica",
    prerequisitos: ["Biología Celular y Genética", "Química General y Orgánica"],
    abre: ["Farmacología"]
  },
  {
    nombre: "Farmacología",
    prerequisitos: ["Bioquímica"],
    abre: []
  },
  {
    nombre: "Morfología I",
    prerequisitos: ["Biología Celular y Genética"],
    abre: ["Morfología II"]
  },
  {
    nombre: "Morfología II",
    prerequisitos: ["Morfología I"],
    abre: []
  },
  {
    nombre: "Fisiología General",
    prerequisitos: ["Biología Celular y Genética"],
    abre: ["Fisiología de Sistemas"]
  },
  {
    nombre: "Fisiología de Sistemas",
    prerequisitos: ["Fisiología General"],
    abre: []
  }
];

// Estado inicial
const estado = {};
ramos.forEach(r => {
  estado[r.nombre] = r.prerequisitos.length === 0 ? "desbloqueado" : "bloqueado";
});

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.classList.add("ramo");
  div.setAttribute("data-nombre", ramo.nombre);

  if (estado[ramo.nombre] === "aprobado") {
    div.classList.add("aprobado");
  } else if (estado[ramo.nombre] === "bloqueado") {
    div.classList.add("bloqueado");
  }

  const nombre = document.createElement("div");
  nombre.classList.add("nombre");
  nombre.textContent = ramo.nombre;

  const info = document.createElement("div");
  info.classList.add("info");
  info.innerHTML = `
    <strong>Requiere:</strong> ${ramo.prerequisitos.length ? ramo.prerequisitos.join(", ") : "Ninguno"}<br>
    <strong>Abre:</strong> ${ramo.abre.length ? ramo.abre.join(", ") : "Ninguno"}
  `;

  const estadoText = document.createElement("div");
  estadoText.classList.add("estado");
  estadoText.textContent =
    estado[ramo.nombre] === "aprobado"
      ? "✅ Aprobado"
      : estado[ramo.nombre] === "desbloqueado"
      ? "🟢 Desbloqueado"
      : "🔒 Bloqueado";

  div.appendChild(nombre);
  div.appendChild(info);
  div.appendChild(estadoText);

  div.addEventListener("click", () => {
    if (estado[ramo.nombre] !== "desbloqueado") return;

    estado[ramo.nombre] = "aprobado";

    ramos.forEach(r => {
      if (
        estado[r.nombre] === "bloqueado" &&
        r.prerequisitos.every(p => estado[p] === "aprobado")
      ) {
        estado[r.nombre] = "desbloqueado";
      }
    });

    render();
  });

  return div;
}

function render() {
  const contenedor = document.getElementById("malla-container");
  contenedor.innerHTML = "";
  ramos.forEach(r => contenedor.appendChild(crearRamo(r)));
}

render();


