## Proyecto 2 Bootcamp UDD Cohort 13

El proyecto trata sobre la creación de un código en JavaScrypt que permita los usuarios la creación de encuestas con opciones de respuestas en las cuales se pueda votar. El código debe realizarse con _**Programación Funcional (PF)**_ y con _**Programación Orientada a Objetos (POO).**_
Para esto se requiere la utilización de las siguientes herramientas:

1. Visual Studio Code
2. GitHub
3. Git Bash

## Algoritmo

 El algoritmo debe cumplir con los siguientes requisitos:
- Permitir a los usuarios crear encuestas con opciones de respuesta.
- Permitir a los usuarios votar en las encuestas.
- Mostrar los resultados de las encuestas.
- Almacenar los datos de las encuestas y los votos en una variable.
- Almacenar los datos de las encuestas y los votos en una estructura de datos.
- Las encuestas deben contener al menos 8 preguntas con opciones de respuesta.

## Comenzando 

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre-requisitos

Como pre-requisitos hay que tener instalado los programas _**Visual Studio Code**_, _**Git Bash**_ y disponer de una cuenta en _**GitHub**_.

1- El primer pre-requisito es tener instalado el programa _**Visual Studio Code**_.
#### Visual Studio Code　
>_La herramienta Visual Studio Code es un editor de código fuente desarrollado por Microsoft para Windows, Linux, macOS y Web. Incluye soporte para la depuración, control integrado de Git, resaltado de sintaxis, finalización inteligente de código, fragmentos y refactorización de código.PSeInt es un intérprete de un lenguaje de programación basado en pseudocódigo._

##### Ejemplo:
``` 
VSCode
console.log("HolaMundo)

```

2- El segundo pre-requisito es tener instalado el programa _**Git Bash**_.

#### Git Bash　
>_La herramienta Git Bash es una aplicación que ofrece una capa de emulación para una experiencia de líneas de comandos de Git. Bash es el acrónimo en inglés de Bourne Again Shell._

##### Ejemplo:
```
Gitbash
PC@DESKTOP-XXXXXXX MINGW64 ~/Desktop/File (master)
$ add .

```

3- El tercer y último pre-requisito es tener una cuenta en _**GitHub**_.

#### GitHub　
>_GitHub es una plataforma de alojamiento, propiedad de Microsoft, que ofrece a los desarrolladores la posibilidad de crear repositorios de código y guardarlos en la nube de forma segura, usando un sistema de control de versiones llamado Git._

##### Ejemplo:
```Gitbash
https://github.com/Ripenafiel/Proyecto2-UDD

```
## Ejecutando las pruebas 

Antes de empezar con las pruebas y con todo lo anterior en funcionamiento, prepararemos los programas.
- Primero debemos dirigirnos al siguiente siguiente enlace que contiene el codigo a ejecutar: _**"https://github.com/Ripenafiel/Proyecto2-UDD"**_.

- Una vez que ingresemos a esta página, encontraremos dos carpetas denominadas _**PF**_  y  _**POO**_  que corresponden al proyecto en cuestión en sus dos versiones: Programación Funcional y Programación Orientada a Objetos.
- Abriremos las carpetas con la herramienta _**Visual Studio Code**_.
- Ahora para probar el código escrito en _**JavaScrypt**_, seleccionaremos con el botón derecho del "mouse" ambos archivos con la extensión ._**html**_ y seleccionaremos _**Open with Live Server**_.
- A continuación ingresaremos en las páginas que nos abrió en nuestro navegador y sobre la página en blanco seleccionaremos con el botón derecho del "mouse" la opción _**Inspeccionar**_ o _**F12**_.


### Analice las pruebas end-to-end 

#### 1. Nota

La descripción del código se encuentra en el archivo _**PF.js**_, por lo que se debe inspeccionar antes de abrir el archivo _**POO.js**_, ya que este último es solo una transcripción o reestructuración del código original _**PF**_ hecho en _**POO**_ 

## Terminando

Para finalizar la entrega de esta tarea, se requiere la utilización de la herramienta _**Git**_ para subir nuestra tarea a la plataforma de _**GitHub**_ y la creación de un repositorio en _**GitHub**_, por lo que debe seguir los siguientes pasos:

**1. GitHub Repositorio**

- Primero debes ingresar a https://github.com/dashboard, en la que te encontrarás ya con tu sesión iniciada, sino, deberás iniciar sesión.

- En la sección _**Start writing code**_, deberás elegir el nombre de tu repositorio, este cuadro se encuentra justo bajo _**Repository name ***_, en nuestro caso se nombró como _** Proyecto2-UDD**_.

- Luego deberás elegir si tu repositorio sea público _**Public**_o privado -**Private**_, en nuestro caso elegimos que sea público e hicimos click en el botón -**Create a new repository**_, para continuar.

- Una vez creado el repositorio, te mostrará una serie de comandos a utilizar en el programa _**Git Bash**_, por lo que a continuación se explicará la utilización de esta herramienta.

**2. Git Bash Repositorio**

- Partiremos iniciando el programa _**Git Bash**_.

- Luego ingresaremos el comando _**git init**_ para iniciar un repositorio vacío en la carpeta en que se instaló _**Git**_, en este caso _**C:/Users/PC/.git/**_ . Además se ingresará el nombre del equipo añadiendolo como maestro _**(master)**_.

- Por facilidad y como ejemplo crearemos una carpeta en escritorio y la llamaremos _**Proyecto2**_. Dentro de esta carpeta se encontrarán dos subcarpetas denominadas _**PF**_ y _**POO**_. En su interior encontraremos los archivo pertenecientes a _**VS Code**_, nuestro trabajo, denominados: _**PF.html**_,  _**PF.js**_, _**POO.html**_,  _**POO.js**_, y un archivo llamado _**Readme.md** (que es el que actualmente se está realizando en https://pandao.github.io/editor.md/en.html) y las fotos asociadas a este archivo_.

- Ahora digitaremos _**git remote add origin https://github.com/Alias escogido sw tu GitHub/nombre del repositorio creado.git**_, que en nuestro caso es:_**git remote add origin https://github.com/Ripenafiel/Proyecto2-UDD.git.

- Seguimos digitando _**"git config --global user.email "you@example.com""**_ y donde dice _**"you@example.com"**_ digitar el correo electrónico ingresado en _**GitHub**_. Al escribir correctamente este comando, se debe ingresar apretando la tecla enter. esto es para que la herramienta reconozca tu correo electronico de la cuenta de _**GitHub**_.

- _Esta vez se debe digitar _**"git config --global user.name "Your Name""**_,  y donde dice _**"Your Name"**_ digitar el Alias ingresado en _**GitHub**_. Ésto al igual que el paso anterior es para asegurar la coordinación entre las dos herramientas-plataformas.

- Ahora entraremos en la carpeta en la que se encuentra el archivo de la tarea que se ejemplifico anteriormente. Ingresaremos_**cd desktop**_ y presionaremos enter, despues ingresaremos _**cd proyecto1**_ y ya nos encontramos dentro de la carpeta creada en escritorio.

- Una vez asegurado que los archivos que se encuentran al interior de la carpeta, son los archivos que se deben entregar para su evaluación, insertamos el comando _**git add .**_, ésto para agregar todos los archivos asociados a la dirección de carpetas ya mencionado.

- Seguimos con el comando _**commit -m "Entrega de tarea"**_ para subir el archivo a _**GitHub**_ con la etiqueta _**"entrega de tarea"**_ para reconocerla.

- Finalmente se ingresa el comando _**git push origin master**_ y ya se subieron los archivo al nuevo repositorio.







### Fin v1.0
