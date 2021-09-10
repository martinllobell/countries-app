
# Countries-App!

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Buscar y filtrar países
- Crear actividades y relacionarlas al país.


## Comenzando
 Realicé esta aplicación como parte de evaluación en el curso de Henry, Countries app te permite acceder a todos los paises del mundo, filtrarlos, buscarlos, y añadirles actividades turísticas, cuenta con una interfaz con temática acorde al tema, navegación con botones y apartados de filtrado, creación de actividades y explorador de actividades. posee una navbar con un input de búsqueda en la cual se puede buscar países y acceder a los diferentes apartados. Los detalles de paises muestran en detalle las características de dicho país seleccionado

## Detalles Técnicos
### Tecnologías
Para el desarrollo de la aplicación utilicé principalmente React para el Front-End junto con Redux y CSS al más puro estilo, sin ningún tipo de librerías, y para el Back-End usé Node.js, Express, Sequelize y como base de datos PostgreSQL

## Instrucciones

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `countries`

El contenido de `client` fue creado usando: Create React App.


