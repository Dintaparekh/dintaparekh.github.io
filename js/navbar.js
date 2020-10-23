const navbar = document.querySelector('.navbar');
const jumbotronSection = document.querySelector('.jumbotron');

const jumbotronObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        !entry.isIntersecting ? navbar.classList.add('navbar--scrolled') : navbar.classList.remove('navbar--scrolled');
    })
});

jumbotronObserver.observe(jumbotronSection);