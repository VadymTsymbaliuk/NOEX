//about accordion
let aboutAccordion = document.getElementsByClassName('accordion')
let i
for (i = 0; i < aboutAccordion.length; i++) {
    aboutAccordion[i].addEventListener("click", function () {
        this.classList.toggle('active')
        let panel = this.nextElementSibling
        if (panel.style.display === "block") {
            panel.style.display = "none"
        }else {
            panel.style.display = "block"
        }
    })
}


//