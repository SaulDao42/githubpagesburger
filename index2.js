document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("mainNavbar");
    const revealElements = document.querySelectorAll(".reveal");

    /**
     * 1. CONTROL DEL NAVBAR (Cambio de Verde a Blanco)
     */
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    /**
     * 2. EFECTO REVEAL (Aparición de secciones al hacer scroll)
     */
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si la sección ya entra en el rango visual de la pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Dejamos de observarla para que la animación se quede fija
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando se ve el 15% de la sección
    });

    // Asignar el observador a cada sección con la clase .reveal
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // Escuchar el evento de scroll del navegador
    window.addEventListener("scroll", handleNavbarScroll);
    
    // Ejecutar una vez al cargar por si el usuario actualiza la página abajo
    handleNavbarScroll();
}); 