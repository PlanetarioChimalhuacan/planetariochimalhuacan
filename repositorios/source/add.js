document.addEventListener("DOMContentLoaded", function() {
    // Obtén todos los divs en la página
    var divs = document.querySelectorAll("div");
    var lastDivWithoutClass = null;

    // Itera a través de los divs en orden inverso
    for (var i = divs.length - 1; i >= 0; i--) {
        if (!divs[i].className) {
            lastDivWithoutClass = divs[i];
            break;
        }
    }

    // Si se encontró un div sin clase, elimínalo
    if (lastDivWithoutClass) {
        lastDivWithoutClass.parentNode.removeChild(lastDivWithoutClass);
    }
});
