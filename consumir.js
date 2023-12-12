



 $(document).ready(function() {
    const tarjetero = $("#tarjetero");
   cargarDatos();
   
   
  });


function  cargarDatos() {

    
 // Llamamos a la API
 $.getJSON("https://hp-api.onrender.com/api/characters")
 .done(function(data) {
   // Los datos de la API se han obtenido correctamente
  // console.log(data);
    $.each(data, function(index, item) {
        //const objeto = JSON.parse(item);
        //console.log(objeto.name);
        const tarjeta = $("<div class='tarjeta'>");
        tarjeta.append("<h2>" + item+ "</h2> </div>");
        tarjetero.append(tarjeta);
        return 0;
    });
 })
 .fail(function(error) {
   // Se ha producido un error al llamar a la API
   console.log(error);
 });

}
