
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnVerMais");
    const extras = document.querySelectorAll(".projetos-extra");
    let mostrando = false;

    // Esconde tudo ao carregar
    extras.forEach(projeto => projeto.classList.remove("show"));

    btn.addEventListener("click", () => {
        mostrando = !mostrando;

        extras.forEach(projeto => {
            if (mostrando) {
                projeto.classList.add("show");
            } else {
                projeto.classList.remove("show");
            }
        });

        btn.textContent = mostrando ? "Ver menos" : "Ver mais";
    });
});