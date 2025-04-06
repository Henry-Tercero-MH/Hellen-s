function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => (document.getElementById(id).innerHTML = data))
    .catch((error) => console.error(`Error al cargar ${file}:`, error));
}

loadComponent("navbar-container", "components/navbar.html");
loadComponent("banner-container", "components/banner.html");
loadComponent("footer-container", "components/footer.html");
const imagenes = [
  {
    src: "assets/img/trajeNiño.jpg",
    alt: "Traje para niño",
    titulo: "Traje para Niño",
    descripcion: "Elegancia desde pequeños.",
  },
  {
    src: "assets/img/vestidoNovia.jpg",
    alt: "Vestido de Novia",
    titulo: "Vestido de Novia",
    descripcion: "Un sueño hecho a medida.",
  },
  {
    src: "assets/img/vestidoQuinceañera.jpg",
    alt: "Vestido de Quinceañera",
    titulo: "Vestido Quinceañera",
    descripcion: "Tu momento, tu estilo.",
  },
  {
    src: "assets/img/vestidoQuinceañeraRojo.jpg",
    alt: "Vestido rojo",
    titulo: "Vestido Rojo",
    descripcion: "Pasión en cada costura.",
  },
  {
    src: "assets/img/vestidoBodas.jpg",
    alt: "Vestido de Boda",
    titulo: "Vestido de Boda",
    descripcion: "Para el día más especial.",
  },
  {
    src: "assets/img/vestidoQuinceañeraVerde.jpg",
    alt: "Vestido Verde",
    titulo: "Vestido Verde",
    descripcion: "Elegancia con frescura.",
  },
  {
    src: "assets/img/muñecaAlmoadonVerde.jpg",
    alt: "Muñeca Almohadón",
    titulo: "Muñeca Almohadón",
    descripcion: "Detalles que encantan.",
  },
  {
    src: "assets/img/vestidoQuinceañeraFucsia.jpg",
    alt: "Vestido Fucsia",
    titulo: "Vestido Fucsia",
    descripcion: "Brilla con tu propio estilo.",
  },
  {
    src: "assets/img/damas.jpg",
    alt: "Vestido Damas",
    titulo: "Vestido Damas",
    descripcion: "Un toque de elegancia para tus amigas.",
  },
];

// Crear indicadores
const indicators = document.getElementById("carousel-indicators");
imagenes.forEach((_, i) => {
  const button = document.createElement("button");
  button.type = "button";
  button.setAttribute("data-bs-target", "#carouselModa");
  button.setAttribute("data-bs-slide-to", i);
  if (i === 0) button.classList.add("active");
  indicators.appendChild(button);
});

const inner = document.getElementById("carousel-inner");
imagenes.forEach((img, i) => {
  const div = document.createElement("div");
  div.className = "carousel-item" + (i === 0 ? " active" : "");
  div.innerHTML = `
    <img src="${img.src}" class="img-tamano-real" alt="${img.alt}">
    <div class="carousel-caption d-none d-md-block">
      <h5>${img.titulo}</h5>
      <p>${img.descripcion}</p>
    </div>
  `;
  inner.appendChild(div);
});
