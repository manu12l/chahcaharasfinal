document.querySelector('#resp').addEventListener('click', sony());

function sony(){

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'productos.json', true);

    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            console.log(datos)

            let res = document.querySelector('#sony');
            res.innerHTML = '';


            for (let item of datos) {
                //console.log(item.precio);
                if(item.id==2){ res.innerHTML += "<td><a><img src='img/audifoonos.png' width='100' height='100'/></a></td><td>"+item.nombre+"</td><td>"+item.precio+
                "</td><td>2</td><td><a href='#'>Seguir producto || llega el 14 de diciembre</a></td><td><a href='#'>Ver</a></td>"
               
            }
               
                
            }
        }
    }
}