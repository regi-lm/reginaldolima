// Abre e fecha o menu mobile com acessibilidade básica.
document.addEventListener('DOMContentLoaded', () => {
    const btnAbrir = document.querySelector('#btn-menu-mobile');
    const btnFechar = document.querySelector('#btn-fechar-menu');
    const menuMobile = document.querySelector('#menu-mobile');
    if (!btnAbrir || !btnFechar || !menuMobile) return;
    const linksMenu = menuMobile.querySelectorAll('a');

    const abrirMenu = () => {
        menuMobile.classList.add('abrir-menu');
        document.body.classList.add('no-scroll');
        btnAbrir.setAttribute('aria-expanded', 'true');
    };

    const fecharMenu = () => {
        menuMobile.classList.remove('abrir-menu');
        document.body.classList.remove('no-scroll');
        btnAbrir.setAttribute('aria-expanded', 'false');
    };

    btnAbrir.addEventListener('click', abrirMenu);
    btnFechar.addEventListener('click', fecharMenu);
    linksMenu.forEach((link) => link.addEventListener('click', fecharMenu));

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') fecharMenu();
    });
});
