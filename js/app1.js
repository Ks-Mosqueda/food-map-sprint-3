alert("hola mundote");

function loadPage() {
  $("#form-control").keyup(filterRestaurante);
}

function addEvent(e) {
  e.preventDefault();
  mostrarRestaurante(comida); /*Aqui solo llamo la funcion mostrarRestaurante le doy como atributo el nombre que tiene el objeto en mi data*/
}

function mostrarRestaurante(comida) {  /*Aqui declaro la funcion mostrarRestaurante*/

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
    var searchRestaurante = $("#form-control").val().toLowerCase(); /*Jala el valor del input*/
     if($("#form-control").val().trim().length > 0) { /*Si el valor de entrada del input sin contar espacios vacios es mayor o igual que cero*/
       var filteredRestaurante = data.filter(function(restaurante) {
         return restaurante.nombre.toLowerCase().indexOf(searchRestaurante) >= 0; /*Devuelve el nombre del restaurante que coincide con el valor buscado, lo convierte en minusculas*/
       });
       $("#publish-restaurante").empty();/* limpia el contenedor donde se pintaran los restaurantes */
       filteredRestaurante.forEach(function(restaurante) { /*recorre el arreglo que contiene los datos y va ejecutando la funcion mostrarRestaurante*/
         mostrarRestaurante(filteredRestaurante);
       });

     }

}


$(document).ready(loadPage);/*Ejecuta la función loadPage que tiene todas las funciones dentro*/
