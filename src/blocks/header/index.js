window.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector(".dropdown")
    const burger = document.querySelector(".menu")
    burger.addEventListener("click", () => dropdown.classList.toggle("active"))
})