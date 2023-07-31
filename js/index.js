const btn_abrir = document.querySelector(".menu-btn");
const btn_cerrar = document.querySelector(".btn-cerrar");
const nav = document.querySelector(".nav");
btn_abrir.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.add("visible");
});
btn_cerrar.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.remove("visible");
});
