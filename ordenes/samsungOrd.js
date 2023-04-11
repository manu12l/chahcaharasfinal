document.querySelector('#resp').addEventListener('click', sam());

function sam(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)

            let res = document.querySelector('#sam');
            res.innerHTML = '';


            for (let item of datos) {
                //console.log(item.precio);
                if(item.id==8){ res.innerHTML += "<td><a><img src='img/samsumg.jpg' width='100' height='100' /></a></td><td>"+item.nombre+"</td><td>"+item.precio+
             "</td><td>"+item.cantidad+"</td><td><a href='#'>Confirmar</a></td><td><a href='#'>Borrar</a></td>"
            }
               
                
            }
        }
    }
}