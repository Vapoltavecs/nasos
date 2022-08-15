window.addEventListener("DOMContentLoaded",  () => {
    const modal = document.querySelector(".modal")
    const modalWrap = document.querySelector(".modal-wrap")

    window.addEventListener("click", ({ target }) => {
        console.log(target.contains(modal))
        if(target.contains(modal)){
            
            modal.animate({opacity: [1, 0], transform: ["translateY(0%)", "translateY(50%)"]}, {
                duration: 300,
                fill: "forwards"
            }).addEventListener("finish", () => {
                console.log(modalWrap)
                modalWrap.classList.remove("active")
            })
            modalWrap.animate({opacity: [1, 0]}, {
                duration: 300,
                fill: "forwards"
            })
        }
    })
})