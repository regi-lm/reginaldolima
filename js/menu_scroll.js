// Controla o estado visual do cabeçalho durante a rolagem
// e marca o link ativo conforme a seção visível.
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('#header');
    const menuLinks = document.querySelectorAll('.menu-desktop a[href^="#"]');
    const sections = document.querySelectorAll('main section[id]');

    if (!header) return;

    const toggleHeader = () => {
        header.classList.toggle('scrolled', window.scrollY > 24);
    };

    const activateCurrentLink = () => {
        let currentSection = '';

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 140;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        menuLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
        });
    };

    toggleHeader();
    activateCurrentLink();

    window.addEventListener('scroll', () => {
        toggleHeader();
        activateCurrentLink();
    });
});
