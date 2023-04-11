
console.log("correct");

document.querySelector('#btnExtraer').addEventListener('click', traerDatos());


function traerDatos() {
    console.log("correct");

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)
         
            let res = document.querySelector('#res');
            res.innerHTML = '';


            for (let item of datos) {
                //console.log(item.precio);
                
                res.innerHTML += "<tr><td>"+item.id+"</td><td>"+item.nombre+"</td><td>"+item.cantidad+"</td><td>"+item.descripción+"</td><td>"+item.precio+"</td><td><img src='"+item.imagen+"'></img></td><td>  <a href='#' class='btn btn-primary' onclick=''>Eliminar</a><br><br> <a href='Modificar.html' class='btn btn-primary' onclick=''>Modificar</a></td></tr>"
           
              
            }
           
            
                

            
            
             

           
           
        }
    }
}