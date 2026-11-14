// Godina u footer-u
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobilni meni
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Prebacivanje jezika SR / EN
const langButtons = document.querySelectorAll('.lang-btn');
const translatableElements = document.querySelectorAll('[data-sr][data-en]');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const lang = btn.getAttribute('data-lang');
        document.documentElement.lang = lang;

        translatableElements.forEach(el => {
            el.innerHTML = el.getAttribute(`data-${lang}`);
        });
    });
});

// Filtriranje projekata
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category');
            if (filterValue === 'all' || categories.includes(filterValue)) {
                card.style.display = 'grid';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
