document.querySelector('#h').addEventListener('click', cel());

function cel(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)

            let res = document.querySelector('#hp');
            res.innerHTML = '';


            for (let item of datos) {
                //console.log(item.precio);
             if(item.id==5){ res.innerHTML += "<img src='"+item.imagen+"'style='width: 150px;'><br><h5>"+item.nombre+"</h5><br><br><p>Precio:"+item.precio+"</p>"
                
            }
               
                
            }
        }
    }
}