const modalWrapper = document.querySelector(".modal-wrap")
const modal = document.querySelector(".modal")
const btn = document.querySelector(".open-modal")


export const openModal = (e) => {
    modalWrapper.classList.add("active")
    modalWrapper.animate({opacity: [0, 1]}, {
        duration: 300,
        fill: "forwards"
    })
    modal.animate({opacity: [0, 1], transform: ["translateY(50%)", "translateY(0%)"]}, {
        duration: 300,
        fill: "forwards"
    })
}



btn.addEventListener("click", openModal)
 