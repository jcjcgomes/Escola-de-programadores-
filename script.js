const hamburguer = document.querySelector(".hamburguer");
const topboton = document.querySelector(".topboton");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    topboton.classList.toggle('active');
} )