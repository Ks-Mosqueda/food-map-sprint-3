alert("hola mundote");

function loadPage() {
  $(".form-control").keyup(filterRestaurante);
}

function addEvent(e) {
  e.preventDefault();
  mostrarRestaurante(); /*Aqui solo llamo la funcion mostrarRestaurante le doy como atributo el nombre que tiene el objeto en mi data*/
}

function mostrarRestaurante(restaurante) {  /*Aqui declaro la funcion mostrarRestaurante*/

  var $newRestaurant = $("<article />", {/*Creando elementos con DOM*/
    "class": "card-panel hoverable"
  });
  var $containerRestauranteName = $("<h4 />");

  /*Dando valores*/
  $containerRestauranteName.text(restaurante.nombre);
  $newRestaurant.append($containerRestauranteName);
   $("#padre").prepend($newRestaurant);

}

function filterRestaurante (){/*Función para filtrar los restaurantes*/
  $("#padre").empty();
    var searchRestaurante = $(".form-control").val().toLowerCase(); /*Jala el valor del input*/
     if($(".form-control").val().trim().length > 0) { /*Si el valor de entrada del input sin contar espacios vacios es mayor o igual que cero*/
       var filteredRestaurante = data.filter(function(restaurante) {
         return restaurante.nombre.toLowerCase().indexOf(searchRestaurante) >= 0; /*Devuelve el nombre del restaurante que coincide con el valor buscado, lo convierte en minusculas*/
       });
       $("#publish-restaurante").empty();/* limpia el contenedor donde se pintaran los restaurantes */
       filteredRestaurante.forEach(function(restaurante) { /*recorre el arreglo que contiene los datos y va ejecutando la funcion mostrarRestaurante*/
         mostrarRestaurante(restaurante);
       });
    }else {/*si el valor de entrada es menor a cero*/
      $("#publish-restaurante").empty();/*limpia el espacio*/
      data.forEach(function(restaurante){
        mostrarRestaurante(filteredRestaurante);
      });
    }
}


$(document).ready(loadPage);/*Ejecuta la función loadPage que tiene todas las funciones dentro*/


var data = [
restaurante = {
  "tipo": "china",
  "nombre":"Nuevo Jade",
  "imagen":"../assets/images/chinese-1.jpg",
  "dirección": "Av. Álvaro Obregón 264, Hipódromo Condesa, 06100 Ciudad de México, CDMX",
},

restaurante = {
"tipo": "vegana",
"nombre":"La Pitahaya Vegana",
"imagen":"../assets/images/comida-vegana.jpg",
"dirección": "Orizaba 139, Casa Quimera, Cuauhtémoc, Roma Norte, 06700 Ciudad de México, CDMX",
},

 restaurante = {
"tipo": "mexicana",
"nombre":"Azul Histórico",
"imagen":"../assets/images/Restaurante-Azul-Histórico.jpg",
"dirección": "Calle Isabel la Católica 30, Centro Histórico",
},

restaurante = {
"tipo": "japonesa",
"nombre":"Mog Bistro",
"imagen":"../assets/images/comida-japonesa.jpg",
"dirección": "Calle Frontera 168, Col. Roma, Esquina Con Zacatecas, Ciudad de México 06700, México",
},

restaurante = {
"tipo": "arabe",
"nombre":"El Jamil",
"imagen":"../assets/images/comida-arabe.jpg",
"dirección": "Amsterdam 306, Hipódromo, 06100 Ciudad de México, CDMX",
},

restaurante = {
"tipo": "vegetariana",
"nombre":"Vegamo",
"imagen":"../assets/images/vegamo.jpg",
"dirección": "Revillagigedo 47, Colonia Centro, Centro, 06070 Ciudad de México, CDMX",
}

];
