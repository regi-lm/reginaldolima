// Filtra projetos por categoria sem recarregar a página.
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach((item) => item.classList.remove('active'));
            button.classList.add('active');

            projectCards.forEach((card) => {
                const belongsToFilter = selectedFilter === 'todos' || card.dataset.category === selectedFilter;
                card.classList.toggle('hide-by-filter', !belongsToFilter);
            });
        });
    });
});
