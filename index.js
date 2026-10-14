function mostrar(id) {
    let secciones = document.querySelectorAll("main section");

    secciones.forEach(function(seccion) {
        seccion.classList.remove("activa");
    });

    document.getElementById(id).classList.add("activa");
}