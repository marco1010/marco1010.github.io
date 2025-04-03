//Funcion btnArriba
const btnArriba = document.getElementById("btnArriba");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        btnArriba.style.display = "block";
    } else {
        btnArriba.style.display = "none";
    }
};

function scrollArriba() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/*------------------------------------------------*/

// Obtener el contenedor del menú desplegable
document.querySelector('.dropdown').addEventListener('click', function (event) {
    event.stopPropagation();
    this.querySelector('.dropdown-content').classList.toggle('show');
});

// Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelector('.dropdown-content').classList.remove('show');
    }
});

// Cerrar el menú cuando se haga clic en un enlace dentro del menú
const links = document.querySelectorAll('.dropdown-content a');
links.forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('.dropdown-content').classList.remove('show');
    });
});
