function vaciado(str){
    return str.replace (/^\s+|\s+$/g, '');
}

function validaFormulario(){
    let elementoNombre=document.getElementById('nombre');
    let elementoTel=document.getElementById('desc');
    let elementoEmail=document.getElementById('email');
    if (vaciado(elementoNombre.value)=='' || vaciado(elementoEmail.value)=='' || vaciado(elementoTel.value)==''){
        alert('Ingresa el nombre, el motivo del contacto y el correo electronico');
    }
}