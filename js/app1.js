alert("hola mundote");

function loadPage() {
  $("#form-control").keyup();
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
  console.log($newRestaurant);
   

}

$(document).ready(loadPage);/*Ejecuta la función loadPage que tiene todas las funciones dentro*/
