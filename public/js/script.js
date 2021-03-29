/* FUNCTION FOR CONVERT TO FIXED AND CHANGE THE COLOR OF THE NAV*/
var nav = document.getElementById("navWhite");
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop
    
    if(scrollTop == 0){
        nav.classList.add("invisible");
    }

    if(nav.offsetTop < scrollTop){
        nav.classList.remove("invisible");
    }
}
window.addEventListener('scroll', mostrarScroll);

/* FUNCTION FOR THE TEXT IN THE FIRST ZONE */
window.onload = getScroll();

function getScroll() {
    document.getElementById("min-banana").classList.add("animate-uptwo");
    document.getElementById("hubspot").classList.add("animate-upthree");
    document.getElementById("btnCuentaMas").classList.add("animate-up");

    let animado = document.querySelectorAll(".animado");
    for (let index = 0; index < animado.length; index++) {
        animado[index].style.opacity = 1;
        animado[index].classList.add("ease-in-out");
        animado[index].classList.add("animate-up");
    }
}