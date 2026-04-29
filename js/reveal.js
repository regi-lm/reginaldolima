// Aplica animação suave quando os elementos entram na tela.
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        revealElements.forEach((element) => element.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    revealElements.forEach((element) => observer.observe(element));
});
