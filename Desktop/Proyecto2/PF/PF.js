// Solución en PF

// Permitir a los usuarios crear encuestas con opciones de respuesta.
// Permitir a los usuarios votar en las encuestas.
// Mostrar los resultados de las encuestas.
// Almacenar los datos de las encuestas y los votos en una variable.
// Almacenar los datos de las encuestas y los votos en una estructura de datos.
// Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.



// Creamos un array llamado 'encuestas' para almacenar los datos de las encuestas
const encuestas = [];

// Creamos una función llamada 'crearEncuesta' para crear una nueva encuesta con preguntas y opciones de respuesta personalizables, ésta acepta dos parámetros que son 'preguntas' y 'opcionesRespuesta'
const crearEncuesta = (preguntas, opcionesRespuesta) => {
  const nuevaEncuesta = { //creamos un objeto que representa la nueva encuesta
    preguntas: preguntas,
    opcionesRespuesta: opcionesRespuesta.map(opciones => ({ //crea un nuevo arreglo con el resultado de aplicar una funcion de cada elemento del arreglo original
      opcion: opciones,
      votos: new Array(opciones.length).fill(0) // Inicializa los votos para cada opción de respuesta
    }))
  };
  encuestas.push(nuevaEncuesta); // Agregamos la nueva encuesta al array encuestas
  console.log("¡Encuesta creada exitosamente!");
};

// Creamos función 'votarEnEncuesta' para permitir a los usuarios votar en una encuesta específica. Esta función aumenta el conteo de votos para la opción de respuesta seleccionada.
const votarEnEncuesta = (indiceEncuesta, indicePregunta, indiceOpcion) => {
    if (encuestas.length > indiceEncuesta && encuestas[indiceEncuesta]) { //Nos aseguramos de la existencia de la encuesta 
      encuestas[indiceEncuesta].opcionesRespuesta[indicePregunta].votos[indiceOpcion]++; // Aumentamos en 1 el voto para la opción de respuesta seleccionada
      console.log("¡Voto registrado exitosamente!");
    } else {
      console.log("El índice de la encuesta no es válido o la encuesta no ha sido creada."); //Si la encuesta no existe o el indice de encuesta es incorrecto se avisa con este mensaje
    }
  };
  
  // Creamos función 'mostrarResultadosEncuesta' para mostrar los resultados de una encuesta específica, incluyendo el número de votos para cada opción de respuesta
  const mostrarResultadosEncuesta = (indiceEncuesta) => {
    if (encuestas.length > indiceEncuesta && encuestas[indiceEncuesta]) { //Nos aseguramos nuevamente que la encuesta exista, sino, mostramos mensaje
      const encuesta = encuestas[indiceEncuesta];
      console.log(`Resultados de la Encuesta ${indiceEncuesta + 1}:`); //Mostramos mensaje de la encuesta que estamos viendo
      encuesta.preguntas.forEach((pregunta, indicePregunta) => { // Para cada pregunta en la encuesta,  mostramos o imprimimos la pregunta en consola
        console.log(pregunta); 
        encuesta.opcionesRespuesta[indicePregunta].votos.forEach((votos, indiceOpcion) => { // Para cada opción de respuesta en esa pregunta, imprimimos el número de votos que recibió esa opción
          console.log(`- ${encuesta.opcionesRespuesta[indicePregunta].opcion[indiceOpcion]}: ${votos} votos`);
        });
      });
    } else {
      console.log("El índice de la encuesta no es válido o la encuesta no ha sido creada."); //Si hay algún problema como en la función anterior, imprimimos el error en consola
    }
  };

// Creación encuesta 1
crearEncuesta( // Se crea una encuesta de ocho preguntas con sus respectivas respuestas a elegir 
    [ // Se había creado dos constantes una de preguntas y otra de opcionesRespuesta, pero no lograba crear distintas encuestas con distintas preguntas y respuestas
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
  ["Verano","Otoño", "Invierno", "Primavera"],
  ["Té","Café", "Chocolate Caliente"],
  ["Playa","Campo", "Montaña"],
  ["Lectura","Juegos de mesa", "Videojuegos", "Deportes"],
  ["A comer","A bailar", "Al cine", "A pasear"],
  ["Hamburguesa","Pizza", "Completo", "Papas fritas"],
  ["Netflix","Disney+", "PrimeVideo", "Crunchyroll", "Max"],
  ["Series","Películas", "Documentales"]
    ]
);

// Simulación de votos de la primera encuesta, tres votos por cada pregunta.
votarEnEncuesta(0, 0, 3); // Vota por "Primavera" en la primera pregunta de la primera encuesta
votarEnEncuesta(0, 0, 0); // Vota por "Verano" en la primera pregunta de la primera encuesta
votarEnEncuesta(0, 0, 3); // Vota por "Primavera" en la primera pregunta de la primera encuesta

votarEnEncuesta(0, 1, 0); // Vota por "Té" en la segunda pregunta de la primera encuesta
votarEnEncuesta(0, 1, 1); // Vota por "Café" en la segunda pregunta de la primera encuesta
votarEnEncuesta(0, 1, 1); // Vota por "Café" en la segunda pregunta de la primera encuesta

votarEnEncuesta(0, 2, 1); // Vota por "Campo" en la tercera pregunta de la primera encuesta
votarEnEncuesta(0, 2, 0); // Vota por "Playa" en la tercera pregunta de la primera encuesta
votarEnEncuesta(0, 2, 2); // Vota por "Montaña" en la tercera pregunta de la primera encuesta

votarEnEncuesta(0, 3, 2); // Vota por "Videojuegos" en la cuarta pregunta de la primera encuesta
votarEnEncuesta(0, 3, 2); // Vota por "Videojuegos" en la cuarta pregunta de la primera encuesta
votarEnEncuesta(0, 3, 3); // Vota por "Deportes" en la cuarta pregunta de la primera encuesta

votarEnEncuesta(0, 4, 0); // Vota por "A comer" en la quinta pregunta de la primera encuesta
votarEnEncuesta(0, 4, 0); // Vota por "A comer" en la quinta pregunta de la primera encuesta
votarEnEncuesta(0, 4, 0); // Vota por "A comer" en la quinta pregunta de la primera encuesta

votarEnEncuesta(0, 5, 0); // Vota por "Hamburguesa" en la sexta pregunta de la primera encuesta
votarEnEncuesta(0, 5, 1); // Vota por "Pizza" en la sexta pregunta de la primera encuesta
votarEnEncuesta(0, 5, 3); // Vota por "Papas fritas" en la sexta pregunta de la primera encuesta

votarEnEncuesta(0, 6, 0); // Vota por "Netflix" en la séptima pregunta de la primera encuesta
votarEnEncuesta(0, 6, 2); // Vota por "PrimeVideo" en la séptima pregunta de la primera encuesta
votarEnEncuesta(0, 6, 3); // Vota por "Crunchyroll" en la séptima pregunta de la primera encuesta

votarEnEncuesta(0, 7, 0); // Vota por "Series" en la octava pregunta de la primera encuesta
votarEnEncuesta(0, 7, 0); // Vota por "Series" en la octava pregunta de la primera encuesta
votarEnEncuesta(0, 7, 1); // Vota por "Películas" en la octava pregunta de la primera encuesta

// Mostrar los resultados de la encuesta 1
mostrarResultadosEncuesta(0);

console.log("-------------------------------------------------------------")

// Creación encuesta 2
crearEncuesta(
    [
  "1. ¿Cuál es tu animal favorito?",
  "2. ¿Qué tipo de música prefieres?",
    ],
    [
  ["Perro","Gato"],
  ["Rock","Pop"],
    ]
);

// Simulación de votos de la segunda encuesta, cuatro votos por cada pregunta.
votarEnEncuesta(1, 0, 1); // Vota por "Gato" en la primera pregunta de la segunda encuesta
votarEnEncuesta(1, 0, 1); // Vota por "Gato" en la primera pregunta de la segunda encuesta
votarEnEncuesta(1, 0, 0); // Vota por "Perro" en la primera pregunta de la segunda encuesta
votarEnEncuesta(1, 0, 0); // Vota por "Perro" en la primera pregunta de la segunda encuesta

votarEnEncuesta(1, 1, 1); // Vota por "Pop" en la segunda pregunta de la segunda encuesta
votarEnEncuesta(1, 1, 0); // Vota por "Rock" en la segunda pregunta de la segunda encuesta
votarEnEncuesta(1, 1, 0); // Vota por "Rock" en la segunda pregunta de la segunda encuesta
votarEnEncuesta(1, 1, 0); // Vota por "Rock" en la segunda pregunta de la segunda encuesta


// Mostrar los resultados de la encuesta 2
mostrarResultadosEncuesta(1);

console.log("-------------------------------------------------------------")

// Intento de mostrar resultados de una encuesta no existente
mostrarResultadosEncuesta(2); // Nos dirá "El índice de la encuesta no es válido o la encuesta no ha sido creada.", ya que la encuesta 3 no ha sido creada