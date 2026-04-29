// Exibe um botão para voltar rapidamente ao topo da página.
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');
    const currentYear = document.getElementById('currentYear');

    if (currentYear) currentYear.textContent = new Date().getFullYear();

    if (!backToTopButton) return;

    window.addEventListener('scroll', () => {
        backToTopButton.classList.toggle('show', window.scrollY > 500);
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
