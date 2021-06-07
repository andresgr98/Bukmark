# Bukmark
## Descripción
Bukmark es una app progresiva (PWA) en la que puedes guardar tus libros leídos, libros que tienes por leer, y llevar un seguimiento del libro que estás leyendo actualmente. 
## Funcionalidades
1. Búsqueda: barra de búsqueda que combina búsqueda por título, por ISBN, por autor, etc. Al hacer la búsqueda, buscará por título de libro por defecto, y debajo de la barra de búsqueda aparecerán unos botones para buscar autores, ISBN o géneros (lo que hace es cambiar a una llamada distinta a la api).
2. Colecciones: el usuario logeado puede crear colecciones de libros que añade manualmente a dichas colecciones. Se le da la opción de elegir el título de la colección y si va a ser pública (cualquier usuario puede ver su colección) o privada.
3. Función social: la app tiene un sistema de login por Google. El usuario puede añadir amigos desde una barra de búsqueda, y puede ver las colecciones públicas de cada usuario. Todos los amigos aparecen en un apartado de amigos.
4. Recomendaciones: usando TensorFlow, un sistema de recomendaciones basado en los gustos de los usuarios que han leido un libro en concreto o tienen gustos similares al usuario.
## Pantallas
1. Home: Muestra el libro que se está leyendo actualmente con una foto grande , y al lado la página actual y el número de páginas totales. Opciones: actualizar marcador(páginas leídas), botón de búsqueda de libros (por título o ISBN, si encarta), botón de marcar libro como terminado.
2. Libros leídos: lista en orden de adición de los libros leídos por el usuario. Opciones: añadir libro, búsqueda de libro (si encarta)
3. Lista de libros deseados: lista de libros a leer (TBR) introducidos por el usuario. Opciones: busqueda de libro, añadir libro
4. Pantalla de libro: muestra la imagen, titulo, sinopsis, autor y numero de paginas del libro. Si está en leídos, puedes quitarlo de leídos. Si está en TBR, puedes quitarlo de TBR.

