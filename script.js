// Al cargar la página, inicializamos todo
document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  // Estado guardado en localStorage, para persistir la selección
  const estadosGuardados = JSON.parse(localStorage.getItem("estadosRamos")) || {};

  // Función para guardar estados en localStorage
  function guardarEstados() {
    localStorage.setItem("estadosRamos", JSON.stringify(estadosGuardados));
  }

  // Actualiza el estado visual de cada ramo (aprobado o bloqueado)
  function actualizarEstados() {
    ramos.forEach(ramo => {
      const nombre = ramo.dataset.nombre;
      const requiere = ramo.dataset.requiere ? ramo.dataset.requiere.split(",") : [];

      // Si está aprobado en estados guardados
      if (estadosGuardados[nombre] === true) {
        ramo.classList.remove("locked");
        ramo.classList.add("approved");
        ramo.textContent = "✅ " + nombre;
        ramo.disabled = false;
      } else {
        // Validar si se puede desbloquear (todos sus prerrequisitos aprobados)
        const todosAprobados = requiere.every(prer => estadosGuardados[prer] === true);

        if (todosAprobados) {
          ramo.classList.remove("locked");
          ramo.classList.remove("approved");
          ramo.textContent = "🔒 " + nombre;
          ramo.disabled = false;
        } else {
          ramo.classList.add("locked");
          ramo.classList.remove("approved");
          ramo.textContent = "🔒 " + nombre;
          ramo.disabled = true;
        }
      }
    });
  }

  // Evento click para marcar ramo como aprobado o no aprobado
  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("locked")) {
        // No hacer nada si está bloqueado
        return;
      }

      const nombre = ramo.dataset.nombre;
      if (estadosGuardados[nombre]) {
        // Si ya está aprobado, desmarcarlo
        estadosGuardados[nombre] = false;
      } else {
        estadosGuardados[nombre] = true;
      }
      guardarEstados();
      actualizarEstados();
    });
  });

  // Inicializar estados según lo guardado
  actualizarEstados();
});
