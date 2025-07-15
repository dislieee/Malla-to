document.addEventListener("DOMContentLoaded", () => {
    const ramos = document.querySelectorAll(".ramo");

    // Función para cargar estado guardado
    function cargarEstado() {
        const estadoJSON = localStorage.getItem("estadoRamos");
        if (!estadoJSON) return {};
        try {
            return JSON.parse(estadoJSON);
        } catch {
            return {};
        }
    }

    // Función para guardar estado
    function guardarEstado(estado) {
        localStorage.setItem("estadoRamos", JSON.stringify(estado));
    }

    // Estado global de ramos
    let estadoRamos = cargarEstado();

    // Verifica si un ramo está aprobado
    function estaAprobado(id) {
        return estadoRamos[id] === true;
    }

    // Verifica si un ramo está desbloqueado (sus prerrequisitos están aprobados)
    function estaDesbloqueado(ramo) {
        const prereqs = ramo.dataset.prereq;
        if (!prereqs) return true; // sin prereq, desbloqueado
        const listaPrereqs = prereqs.split(",").map(p => p.trim()).filter(p => p.length > 0);
        return listaPrereqs.every(pr => estaAprobado(pr));
    }

    // Actualiza el estado visual y desbloqueo de todos los ramos
    function actualizarRamos() {
        ramos.forEach(ramo => {
            const id = ramo.dataset.id;
            if (estaAprobado(id)) {
                ramo.classList.add("approved");
                ramo.classList.remove("locked");
                ramo.querySelector(".icon").textContent = "✅";
                ramo.disabled = false;
            } else if (estaDesbloqueado(ramo)) {
                ramo.classList.remove("locked");
                ramo.classList.remove("approved");
                ramo.querySelector(".icon").textContent = "";
                ramo.disabled = false;
            } else {
                ramo.classList.add("locked");
                ramo.classList.remove("approved");
                ramo.querySelector(".icon").textContent = "🔒";
                ramo.disabled = true;
            }
        });
    }

    // Evento click para cambiar estado aprobado
    ramos.forEach(ramo => {
        ramo.addEventListener("click", () => {
            if (ramo.classList.contains("locked")) return; // no hacer nada si está bloqueado
            const id = ramo.dataset.id;
            if (estaAprobado(id)) {
                // Desaprobar
                estadoRamos[id] = false;
            } else {
                // Aprobar
                estadoRamos[id] = true;
            }
            guardarEstado(estadoRamos);
            actualizarRamos();
        });
    });

    // Inicializa
    actualizarRamos();
});
