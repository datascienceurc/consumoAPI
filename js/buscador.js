$(document).ready(function() {    
    $( "input[type='text']").on( "change", function() {
        const valor = $(this).val().toLowerCase();   
        buscarPalabra(valor);    
      } );
  });


  function buscarPalabra(valor){
    // Obtenemos el valor de la caja de texto
    //const valor = cajaTexto.val().toLowerCase();
    console.log(valor);
    // Filtramos la tabla
    $('#tabla').find('tr').each(function() {
        const valorCelda = $(this).find('td[data-columna = nombre]').text().toLowerCase();
        console.log(valorCelda);
        if (valorCelda.includes(valor)) {
       
            
          }
      
    });
  }