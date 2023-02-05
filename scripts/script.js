var texto = "";

function listarCat() {
  texto =
    "<h3 aria-label='Selecciona una categoria'>Selecciona una Categoria</h3><nav><ul>";
  for (let i = 0; i < idsNom.length; i++) {
    texto +=
      '<li onclick="mostrarArticulos(' +
      idsNom[i] +
      ')">' +
      idsNomLista[i] +
      "</li>";
  }
  texto += "</ul></nav";
  listarCategorias.innerHTML = texto;
  mostrarArticulos(cochesYPistas);
}

var textoArticulos = "";
function mostrarArticulos(ids) {
  textoArticulos = "";
  console.log(ids);
  for (let i = 0; i < ids.length; i++) {
    textoArticulos += '<article class="card">';
    textoArticulos +=
      '<img src="./img/' +
      ids[i][3] +
      '.jpg" alt="imagen del artículo"/><div class="texto"><h2>' +
      ids[i][0] +
      "</h2><p>Precio: " +
      ids[i][1] +
      "€<p>Edad Recomendada: " +
      ids[i][2] +
      "</div></article>";
  }

  articulos.innerHTML = textoArticulos;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
