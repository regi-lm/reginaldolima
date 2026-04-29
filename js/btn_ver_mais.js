// Controla a exibição dos projetos extras.
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnVerMais');
    const projetosExtras = document.querySelectorAll('.projetos-extra');

    if (!btn || projetosExtras.length === 0) return;

    let exibindoExtras = false;

    const atualizarProjetos = () => {
        projetosExtras.forEach((projeto) => projeto.classList.toggle('show', exibindoExtras));
        btn.textContent = exibindoExtras ? 'Ver menos projetos' : 'Ver mais projetos';
    };

    btn.addEventListener('click', () => {
        exibindoExtras = !exibindoExtras;
        atualizarProjetos();
    });

    atualizarProjetos();
});
