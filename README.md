### `Instrucciones para levantar el proyecto`

1.- Instalar los paquetes y dependencias de package.json ejecutando el comando en consola "npm i"

2.- Levantar el servidor ejecutando el comando en consola "npm run server"

3.- En otra consola del mismo proyecto ejecutar el comando "npm run start"

4.- Entrar al navegador Google y escribir la url "http://localhost:3000"

### `¿Qué es lo que más me gustó del desarrollo`

El proyecto en general es pequeño pero tiene las caracteristicas suficientes para emplear mucho conocimiento,
desde la creación de custom Hooks, creación de helpers, utilización de redux toolkit, creación de rutas con react router dom,
investigación de librerias como json-server del cuál nunca había utilizado

### `Si hubieras tenido más tiempo ¿qué hubieras mejorado o qué más hubieras hecho?`

Hubiera mejorado el tema de los estilos con sass y proponer utilización de Grid, indagado sobre el testeo de componentes debido 
a que solo habia realizado pruebas unitarias a funciones o helpers, optimizar más la lógica y finalmente el realizar las interfaces 
y mapeados de la API con typescript. En general considero que fue tiempo suficiente.

### `Descríbenos un pain point o bug con el que te hayas encontrado y como lo solucionaste`

El tema de aplicar el color de la targetas por casa desde jsx pasando como parámetro una variable de sass no reconocia dicha variable,
por lo tanto llegue a la conclución de realizar un helper "setHouse" donde se coloca el codigo de color RGB sin if anidados.