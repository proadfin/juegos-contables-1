//Tienda virtual para ordenar productos - mar-18-25

// Función que toma una promesa

function ordenarProducto(producto) {
   return new Promise((resolve, reject) =>{
      console.log("Ordenando: ${producto} de varios");
     // console.log("Ordenando...", producto);
     setTimeout(()=>{
      if (producto == "taza") {  // cambiar por esfero
         resolve("Ordenando una taza con logo...");

      }else{
         reject("Este producto no está disponible hoy...");

      }

     }, 2000);

   });               // se usa para definir funciones asíncronas
}

// Función procesar pedido. La respuesta se topma como un parámetro

function procesarPedido(respuesta){
   return new Promise((resolve) =>{  // OJO el paréntesis
      console.log("Procesando respuesta...");
      console.log("La respuesta fue..", respuesta);
      setTimeout(() => {
         resolve("Gracias por su compra. Disfruta tu producto...");

      },3000);
   });
}

// este proceso es asíncrono y se encadenan promesas

ordenarProducto("taza")  
   .then(respuesta => {
      console.log("Respuesta recibida...");
      console.log(respuesta);
      return procesarPedido(respuesta);

   })

   .then(respuestaProcesada => {
      console.log(respuestaProcesada);

   })
   .catch(error => {
      console.log("error");

   })


  // Otra forma de codificar de forma sincrona
  // Se usa async y await se usan juntos. Las asincronas retornan promesas

  async function realizarPedido(producto) {
   try {
      const respuesta  = await ordenarProducto(producto);
      console.log("Respuesta recibida...");
      console.log(respuesta);
      const respuestaProcesada = await procesarPedido(respuesta);
      console.log(respuestaProcesada);

      } catch(error) {
         console.log(error);
      }

   }
   realizarPedido("taza");
   //realizarPedido("cafe");

   



   // Todo se realiza en el orden esperado y programado.
   // son procesos asíncronos, pero se ejecutan en el orden en que poddemos predecir




