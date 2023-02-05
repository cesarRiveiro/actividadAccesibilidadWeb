var cochesYPistas = new Array();
var puzzles = new Array();
var disfraces = new Array();
var libros = new Array();
var lego = new Array();

var idsNom = new Array(
  "cochesYPistas",
  "puzzles",
  "disfraces",
  "libros",
  "lego"
);
var idsNomLista = new Array(
  "Coches y Pistas",
  "Puzzles",
  "Disfraces",
  "Libros",
  "Lego"
);

// nombre artículo, precio, edad recomendada, nombreImagen
cochesYPistas.push([
  "Camión de Construcción",
  21.99,
  "Mayores de 3 años",
  "cochesYPistas/cambionTransformable",
]);
cochesYPistas.push([
  "Micro Machine",
  54.99,
  "Mayores de 3 años",
  "cochesYPistas/MicroMachine",
]);
cochesYPistas.push([
  "Moto Honda CBR1000",
  7.99,
  "Mayores de 5  años",
  "cochesYPistas/hondaCBR",
]);
cochesYPistas.push([
  "Red Bull Racing RB16B",
  24.99,
  "Mayores de 7 años",
  "cochesYPistas/f1RedBull",
]);
cochesYPistas.push([
  "Micro Machine, cuadrilla de Construcción",
  12.99,
  "Mayores de 3 años",
  "cochesYPistas/CuadrillaDeConstruccion",
]);
cochesYPistas.push([
  "Camión Transformable Monster Jam",
  59.99,
  "Mayores de 5 años",
  "cochesYPistas/cambionTransformable",
]);
cochesYPistas.push([
  "Parking 3 Plantas con Pistas y vehículos",
  44.09,
  "Mayores de 3 años",
  "cochesYPistas/pista3Plantas",
]);
cochesYPistas.push([
  "Pack 5 minicoches de carreras",
  14.99,
  "Mayores de 3 años",
  "cochesYPistas/pack50",
]);
// cochesYPistas.push([
//   "Hot Wheels - Looping caos masivo",
//   69.99,
//   "Mayores de 5 años",
//   "cochesYPistas/caosMasivo",
// ]);

puzzles.push([
  "Puzzle 1000 piezas Coliseo Romano",
  11.99,
  "Mayores de 8 años",
  "puzzles/coliseoRomano",
]);
puzzles.push([
  "Puzzle 3D Velociraptor ",
  17.99,
  "Mayores de 5 años",
  "puzzles/velociraptor",
]);
puzzles.push([
  "Puzzle 500 piezas California Dreaming",
  10.99,
  "Mayores de 8 años",
  "puzzles/california",
]);
puzzles.push([
  "Puzzle 1000 piezas Torre Eiffel Paris",
  11.99,
  "Mayores de 8 años",
  "puzzles/paris",
]);
puzzles.push([
  "Puzzle 1000 piezas Ravensburger",
  15.99,
  "Mayores de 8 años",
  "puzzles/ravensburger",
]);
puzzles.push([
  "Puzzle 1000 piezas Collage Notre Dame",
  11.99,
  "Mayores de 8 años",
  "puzzles/NotreDame",
]);
puzzles.push([
  "Puzzle 3D Paris ",
  24.99,
  "Mayores de 11 años",
  "puzzles/Paris3D",
]);
puzzles.push([
  "Puzzle 1000 piezas La Casa De Papel",
  14.99,
  "Mayores de 8 años",
  "puzzles/laCasaDePapel",
]);
// puzzles.push([
//   "Puzzle 500 piezas Viva la Vida - Frida Kahlo",
//   10.99,
//   "Mayores de 8 años",
//   "puzzles/frida",
// ]);

disfraces.push([
  "Star Wars - Kylo Ren -",
  29.99,
  "De 5 a 7 años",
  "disfraces/starWars",
]);
disfraces.push([
  "Disfraz bebé - Papá Noel",
  14.99,
  "De 3 a 6 meses",
  "disfraces/papaNoel",
]);
disfraces.push([
  "Disfraz bebé - Patito",
  24.99,
  "De 1 a 2 años",
  "disfraces/patito",
]);
// disfraces.push([
//   "Harry Potter - Bufanda",
//   8.99,
//   "De 8 a 11 años",
//   "disfraces/harryPotter",
// ]);
disfraces.push([
  "Toy Story - Disfraz Infantil - Buzz",
  24.99,
  "De 5 a 7 años",
  "disfraces/toyStory",
]);
disfraces.push([
  "Disfraz Infantil - Skeletito",
  9.99,
  "De 8 a 10 años",
  "disfraces/esqueleto",
]);
disfraces.push([
  "Disfraz bebé - Hombre Lobo",
  17.99,
  "De 6 a 12 meses",
  "disfraces/hombreLobo",
]);
disfraces.push([
  "Los Vengadores - Thor",
  29.99,
  "De 8 a 11 años",
  "disfraces/thor",
]);
disfraces.push([
  "Batman -  Disfraz Justice League",
  29.99,
  "De 5 a 7 años",
  "disfraces/batman",
]);

libros.push([
  "Geronimo Stilton - ¡Alarma... Ratón al Agua",
  8.95,
  "De 5 a 7 años",
  "libros/geronimo",
]);
libros.push([
  "Marvel - El libro de Marvel",
  24.95,
  "A partir de 10 años",
  "libros/marvel",
]);
libros.push([
  "El cerdito de Navidad",
  18.95,
  "A partir de 5 años",
  "libros/cerditoNavidad",
]);
libros.push(["¡Hola emociones!", 17.95, "De 1 a 2 años", "libros/emociones"]);
libros.push([
  "Disney - 365 Cuentos y actividades",
  12.95,
  "A partir de 3 años",
  "libros/disney",
]);
// libros.push([
//   "El lecho de los sueños",
//   21.99,
//   "A partir de 8 años",
//   "libros/lechoDeLosSueños",
// ]);
libros.push([
  "El pollo Pepe va al Colegio",
  12.95,
  "A partir de 1 año",
  "libros/polloPepe",
]);
libros.push([
  "Minecraft - Diario de un aldeano hiperpringao",
  14.95,
  "A partir de 8 años",
  "libros/minecraft",
]);
libros.push([
  "Dragon Ball - Volumen 1 Dragon Ball super",
  7.95,
  "A partir de 8 años",
  "libros/dragonBall",
]);

lego.push([
  "Lego Icons - Estadio Santiago Bernabeu",
  399.99,
  "A partir de 13 años",
  "lego/bernabeu",
]);
lego.push([
  "Lego Art - Harry Potter, Escudo Hogwarts",
  119.99,
  "A partir de 2 años",
  "lego/escudoHogwarts",
]);
lego.push([
  "Lego Creator - Bonsái",
  49.99,
  "A partir de 5 años",
  "lego/bonsai",
]);
lego.push([
  "Lego Technic - Lamborghini Sián FKP 37",
  399.99,
  "A partir de 8 años",
  "lego/lamborghini",
]);
lego.push([
  "Lego Ideas - Casa del Árbol",
  249.99,
  "A partir de 10 años",
  "lego/casaArbol",
]);
lego.push([
  "Lego Creator - Librería",
  179.99,
  "A partir de 4 años",
  "lego/libreria",
]);
// lego.push([
//   "Lego Architecture - Londres",
//   42.99,
//   "A partir de 12 años",
//   "lego/londres",
// ]);
lego.push([
  "Lego Technic - Dúmper articulado Volvo 6x6",
  259.99,
  "A partir de 10 años",
  "lego/dumper",
]);
lego.push([
  "Lego Icons - Adidas Originals Superstar",
  89.99,
  "A partir de 10 años",
  "lego/adidas",
]);
