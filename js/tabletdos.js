document.querySelector('#tec').addEventListener('click', cel);

function cel(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)

            let res = document.querySelector('#tr');
            res.innerHTML = '';


            for (let item of datos) {
                //console.log(item.precio);
                if(item.id==9){ res.innerHTML += "<td>Id</td><td>"+item.id+"</td><tr><td>Nombre</td><td> "
                +item.nombre+"</td><tr><td>Cantidad</td><td>"+item.cantidad+"</td><tr><td>Descripcion</td><td>"
                +item.descripción+"</td><tr><td>Precio</td><td>"+item.precio+
                "</td><tr><td>Color</td><td>"+item.descripcióndos+	
                "</td><tr><td>Sistema operativo instalado</td><td>"+item.usos+
                "</td><tr><td>Capacidad de batería</td><td>"+item.car+
                "</td><tr><td>Tamaño máximo de tarjeta de memoria</td><td>"+item.num+
                "</td><tr><td>Unidad de almacenamiento</td><td>"+item.sop+
                "</td><tr><td>Capacidad de almacenamiento interno</td><td>"+item.est+
               " </td><tr><td >Resolución de la pantalla</td><td >"+item.dim  
            }
               
                
            }
        }
    }
}