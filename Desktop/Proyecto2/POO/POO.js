// Solución en POO

// Permitir a los usuarios crear encuestas con opciones de respuesta.
// permitir a los usuarios votar en las encuestas.
// Mostrar los resultados de las encuestas.
// Almacenar los datos de las encuestas y los votos en una variable.
// Almacenar los datos de las encuestas y los votos en una estructura de datos.
// Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.

//////////// ESTA SOLUCIÓN ES UNA REESCRITURA DE LA VERSIÓN PF, POR LO QUE EL DETALLE ESPECÍFICO DE LO QUE SE REALIZA SE ENCUENTRA EN EL ARCHIVO PF.JS //////////////////

// Creamos una clase 'Encuesta' para representar una encuesta individual
class Encuesta {
    constructor(preguntas, opcionesRespuesta) {
      this.preguntas = preguntas;
      this.opcionesRespuesta = opcionesRespuesta.map(opciones => ({
        opcion: opciones,
        votos: new Array(opciones.length).fill(0)
      }));
    }
  }
  
// Creamos una clase 'AdministrarEncuestas' para administrar la creación votación y visualización de encuestas
class AdministrarEncuestas {
    constructor() {
      this.encuestas = [];
    }
  
    crearEncuesta(preguntas, opcionesRespuesta) { 
      const nuevaEncuesta = new Encuesta(preguntas, opcionesRespuesta);
      this.encuestas.push(nuevaEncuesta);
      console.log("¡Encuesta creada exitosamente!");
    }
  
    votarEnEncuesta(indiceEncuesta, indicePregunta, indiceOpcion) {
      if (this.encuestas.length > indiceEncuesta && this.encuestas[indiceEncuesta]) {
        this.encuestas[indiceEncuesta].opcionesRespuesta[indicePregunta].votos[indiceOpcion]++;
        console.log("¡Voto registrado exitosamente!");
      } else {
        console.log("El índice de la encuesta no es válido o la encuesta no ha sido creada.");
      }
    }
  
    mostrarResultadosEncuesta(indiceEncuesta) {
      if (this.encuestas.length > indiceEncuesta && this.encuestas[indiceEncuesta]) {
        const encuesta = this.encuestas[indiceEncuesta];
        console.log(`Resultados de la Encuesta ${indiceEncuesta + 1}:`);
        encuesta.preguntas.forEach((pregunta, indicePregunta) => {
          console.log(pregunta);
          encuesta.opcionesRespuesta[indicePregunta].votos.forEach((votos, indiceOpcion) => {
            console.log(`- ${encuesta.opcionesRespuesta[indicePregunta].opcion[indiceOpcion]}: ${votos} votos`);
          });
        });
      } else {
        console.log("El índice de la encuesta no es válido o la encuesta no ha sido creada.");
      }
    }
  }
  
// Creación de un 'AdministradosDeEncuestas'
const AdministradosDeEncuestas = new AdministrarEncuestas();

// Creación de encuesta 1
AdministradosDeEncuestas.crearEncuesta(
  [
    "1. ¿Cuál es tu estación favorita?",
    "2. ¿Cuál es tu bebida caliente favorita?",
    "3. ¿Cuál es tu lugar de vacaciones favorito?",
    "4. ¿Qué pasatiempo prefieres?",
    "5. ¿Dónde llevarías a tu cita?",
    "6. ¿Cuál es tu comida chatarra favorita?",
    "7. ¿Cuál es tu plataforma de Streaming favorita?",
    "8. ¿Qué prefieres ver?"
  ],
  [
    ["Verano", "Otoño", "Invierno", "Primavera"],
    ["Té", "Café", "Chocolate Caliente"],
    ["Playa", "Campo", "Montaña"],
    ["Lectura", "Juegos de mesa", "Videojuegos", "Deportes"],
    ["A comer", "A bailar", "Al cine", "A pasear"],
    ["Hamburguesa", "Pizza", "Completo", "Papas fritas"],
    ["Netflix", "Disney+", "PrimeVideo", "Crunchyroll", "Max"],
    ["Series", "Películas", "Documentales"]
  ]
);
  
// Simulación de votos para la encuesta 1
AdministradosDeEncuestas.votarEnEncuesta(0, 0, 3); // Vota por "Primavera" en la primera pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 0, 0); // Vota por "Verano" en la primera pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 0, 3); // Vota por "Primavera" en la primera pregunta de la primera encuesta

AdministradosDeEncuestas.votarEnEncuesta(0, 1, 0); // Vota por "Té" en la segunda pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 1, 1); // Vota por "Café" en la segunda pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 1, 1); // Vota por "Café" en la segunda pregunta de la primera encuesta
  
AdministradosDeEncuestas.votarEnEncuesta(0, 2, 1); // Vota por "Campo" en la tercera pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 2, 0); // Vota por "Playa" en la tercera pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 2, 2); // Vota por "Montaña" en la tercera pregunta de la primera encuesta
  
AdministradosDeEncuestas.votarEnEncuesta(0, 3, 2); // Vota por "Videojuegos" en la cuarta pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 3, 2); // Vota por "Videojuegos" en la cuarta pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 3, 3); // Vota por "Deportes" en la cuarta pregunta de la primera encuesta

AdministradosDeEncuestas.votarEnEncuesta(0, 4, 0); // Vota por "A comer" en la quinta pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 4, 0); // Vota por "A comer" en la quinta pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 4, 0); // Vota por "A comer" en la quinta pregunta de la primera encuesta
  
AdministradosDeEncuestas.votarEnEncuesta(0, 5, 0); // Vota por "Hamburguesa" en la sexta pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 5, 1); // Vota por "Pizza" en la sexta pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 5, 3); // Vota por "Papas fritas" en la sexta pregunta de la primera encuesta
  
AdministradosDeEncuestas.votarEnEncuesta(0, 6, 0); // Vota por "Netflix" en la séptima pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 6, 2); // Vota por "PrimeVideo" en la séptima pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 6, 3); // Vota por "Crunchyroll" en la séptima pregunta de la primera encuesta
  
AdministradosDeEncuestas.votarEnEncuesta(0, 7, 0); // Vota por "Series" en la octava pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 7, 0); // Vota por "Series" en la octava pregunta de la primera encuesta
AdministradosDeEncuestas.votarEnEncuesta(0, 7, 1); // Vota por "Películas" en la octava pregunta de la primera encuesta
  
// Mostrar resultados de la encuesta 1
AdministradosDeEncuestas.mostrarResultadosEncuesta(0);

console.log("-------------------------------------------------------------");
  
// Creación de encuesta 2
AdministradosDeEncuestas.crearEncuesta(
  [
    "1. ¿Cuál es tu animal favorito?",
    "2. ¿Qué tipo de música prefieres?",
  ],
  [
    ["Perro", "Gato"],
    ["Rock", "Pop"],
  ]
);

// Simulación de votos para la encuesta 2
AdministradosDeEncuestas.votarEnEncuesta(1, 0, 1); // Vota por "Gato" en la primera pregunta de la segunda encuesta
AdministradosDeEncuestas.votarEnEncuesta(1, 0, 1); // Vota por "Gato" en la primera pregunta de la segunda encuesta
AdministradosDeEncuestas.votarEnEncuesta(1, 0, 0); // Vota por "Perro" en la primera pregunta de la segunda encuesta
AdministradosDeEncuestas.votarEnEncuesta(1, 0, 0); // Vota por "Perro" en la primera pregunta de la segunda encuesta

AdministradosDeEncuestas.votarEnEncuesta(1, 1, 1); // Vota por "Pop" en la segunda pregunta de la segunda encuesta
AdministradosDeEncuestas.votarEnEncuesta(1, 1, 0); // Vota por "Rock" en la segunda pregunta de la segunda encuesta
AdministradosDeEncuestas.votarEnEncuesta(1, 1, 0); // Vota por "Rock" en la segunda pregunta de la segunda encuesta
AdministradosDeEncuestas.votarEnEncuesta(1, 1, 0); // Vota por "Rock" en la segunda pregunta de la segunda encuesta


// Mostrar resultados de la encuesta 2
AdministradosDeEncuestas.mostrarResultadosEncuesta(1);
console.log("-------------------------------------------------------------");

// Intento de mostrar resultados de una encuesta no existente
AdministradosDeEncuestas.mostrarResultadosEncuesta(2);
  