
$(document).ready(function() {
  cargarDatos();
});

function  cargarDatos() { 
      var tabla = $("<table></table>"); // Crear el elemento <table>
      var encabezado = $("<tr></tr>"); // Crear el elemento <tr> para el encabezado
      encabezado.append("<th>Nombre</th>"); // Agregar la celda <th> para el nombre
      encabezado.append("<th>Genero</th>"); // Agregar la celda <th> para la edad
      tabla.append(encabezado); // Agregar el encabezado a la tabla
      // Llamamos a la API
      $.getJSON("https://hp-api.onrender.com/api/characters")
      .done(function(data) {
        $.each(data, function(index, item) {   
          console.log('hola1') ;
          //$("#contenedor").html(item.name);
          var fila = $("<tr></tr>"); // Crear el elemento <tr> para la filavar fila = $("<tr></tr>"); // Crear el elemento <tr> para la fila
          fila.append("<td>"+item.name+"</td>"); // Agregar la celda <td> para el nombre
          fila.append("<td>"+item.gender+"</td>"); // Agregar la celda <td> para el nombre
          tabla.append(fila); // Agregar la fila a la tabla
        });  
        $("#contenedor").append(tabla); // Agregar la tabla al elemento con id="contenedor"
      })
      .fail(function(error) {
        // Se ha producido un error al llamar a la API
        console.log(error);
      });
}

/*

$.each(personas, function(i, persona) { // Recorrer el arreglo de objetos
  
  fila.append("<td>" + persona.nombre + "</td>"); // Agregar la celda <td> para el nombre
  fila.append("<td>" + persona.edad + "</td>"); // Agregar la celda <td> para la edad
  fila.append("<td>" + persona.hobbies.join(", ") + "</td>"); // Agregar la celda <td> para los hobbies
  
});



*/




