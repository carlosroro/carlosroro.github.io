document.addEventListener("DOMContentLoaded", () => {
    let habilidadesSection = document.querySelector(".habilidades");
    let progressBars = document.querySelectorAll(".barra-progreso");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                habilidadesSection.classList.add("visible");
                progressBars.forEach(bar => {
                    let level = bar.classList.contains('nivel-basico') ? '25%' :
                                bar.classList.contains('nivel-intermedio') ? '50%' :
                                bar.classList.contains('nivel-avanzado') ? '75%' :
                                bar.classList.contains('nivel-experto') ? '100%' : '0';
                    bar.style.width = level;
                    bar.querySelector("span").textContent = bar.querySelector("span").textContent;
                });
            }
        });
    }, { threshold: 0.3 });

    observer.observe(habilidadesSection);
});