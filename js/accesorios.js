document.querySelector('#cinu').addEventListener('click', cel);

function cel(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)

            let res = document.querySelector('#respuesta');
            res.innerHTML = '';


            for (let item of datos) {
                //console.log(item.precio);
             if(item.id==1){ res.innerHTML += "<td>Id</td><td>"+item.id+"</td><tr><td>Nombre</td><td> "
             +item.nombre+"</td><tr><td>Cantidad</td><td>"+item.cantidad+"</td><tr><td>Descripcion</td><td>"
             +item.descripción+"</td><tr><td>Precio</td><td>"+item.precio+
             "</td><tr><td>Descripción del teclado</td><td>"+item.descripcióndos+	
             "</td><tr><td>Usos recomendados para producto</td><td>"+item.usos+
             "</td><tr><td>Características especial</td><td>"+item.car+
             "</td><tr><td>Número de teclas</td><td>"+item.num+
             "</td><tr><td>Soporte de color de retroiluminación del teclado</td><td>"+item.sop+
             "</td><tr><td>Estilo</td><td>"+item.est+
            " </td><tr><td >Dimensiones</td><td >"+item.dim
                
            }
               
                
            }
        }
    }
}