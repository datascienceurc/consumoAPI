
$(document).ready(function() {
  
  cargarDatos();
 
 
});

function  cargarDatos() {       
      var tabla = $("<table id = \"tabla\"  class=\"table  \"></table>"); // Crear el elemento <table>
      var encabezado = $("<thead></thead>");
      var fila_encabezado = $("<tr></tr>"); // Crear el elemento <tr> para el encabezado
      fila_encabezado.append("<th scope =\"col\">Nombre</th>"); // Agregar la celda <th> para el nombre
      fila_encabezado.append("<th scope =\"col\">Genero</th>"); // Agregar la celda <th> para la edad
      fila_encabezado.append("<th scope =\"col\">Foto</th>"); // Agregar la celda <th> para la edad
      encabezado.append(fila_encabezado);
      tabla.append(encabezado); // Agregar el encabezado a la tabla
      // Llamamos a la API
      $.getJSON("https://hp-api.onrender.com/api/characters")
      .done(function(data) {
        $.each(data, function(index, item) {   
          var fila = $("<tr></tr>"); // Crear el elemento <tr> 
          fila.append("<td>"+item.name+"</td>"); // Agregar la celda <td> para el nombre
          fila.append("<td>"+item.gender+"</td>"); // Agregar la celda <td> para el genero
          fila.append("<td><img src ="+item.image+" height=\"120px\" width =\"80px\" onerror= \"this.src='images/default.jpg'\"  class=\"img-thumbnail\" ></td>"); // Agregar la celda <td> para el genero
          var body =$("<tbody></tbody>");
          body.append(fila);
          tabla.append(body); // Agregar la fila a la tabla
        });  
        $("#contenedor").append(tabla); // Agregar la tabla al elemento con id="contenedor"
      })
      .fail(function(error) {
        // Se ha producido un error al llamar a la API
        console.log(error);
      });
   

}



