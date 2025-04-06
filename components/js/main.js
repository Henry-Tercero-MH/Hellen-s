// Función para cargar los componentes HTML dinámicamente
function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(id).innerHTML = data)
        .catch(error => console.error(`Error al cargar ${file}:`, error));
}

// Cargar componentes en sus respectivos contenedores
loadComponent("navbar-container", "components/navbar.html");
loadComponent("banner-container", "components/banner.html");
loadComponent("footer-container", "components/footer.html");
