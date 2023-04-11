const usuario = document.querySelector('#usuario');
const password = document.querySelector('#password');
const formulario = document.getElementById('form');


const credenciales = {
    usuario: 'admin',
    password: 'admin'
}

const user = {
    usuario: 'usuario',
    password: 'usuario'
}



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
console.log('hola') 
    const usuarioTxt = usuario.value;
    const passwordTxt = password.value;
    const flag = false;

    if (usuarioTxt === credenciales.usuario && passwordTxt === credenciales.password){
        window.location="index_admin.html";
        flag = true
    }else if(usuarioTxt === user.usuario && passwordTxt === user.password){
        window.location="index_user.html";
        flag = true;
    }

    if(flag==true){
        return window.alert('Welcome')
    }else if(flag==flase){
        return window.alert('Usuario no existente')
    }
    


});