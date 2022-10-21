var nombreError = document.getElementById('nombreError');
var apellidosError = document.getElementById('apellidosError');
var emailError = document.getElementById('emailError');
var telefonoError = document.getElementById('telefonoError');
var dniError = document.getElementById('dniError');
var ibanError = document.getElementById('ibanError');
var swiftError = document.getElementById('swiftError');
var usuarioError = document.getElementById('usuarioError');
var botonError = document.getElementById('botonError');
var botonEnviar = document.getElementById('enviar');


//Funciones

//Reset
function resetearForm(){
    alert("Cambios reseteados correctamente.");
    location.reload();
}

//Validadores
function validarNombre(){
    var nombre = document.getElementById('nombreInput').value;

    if(nombre.length == 0){
        nombreError.innerHTML = 'El nombre es requerido';
        return false;
    }
    if(!nombre.match(/^[A-Za-z\s]*$/)){
        nombreError.innerHTML = 'Solo letras';
        return false;
    }
    nombreError.innerHTML = '<i><img src="../img/check.png"></img></i>';
    return true;
}


function validarApellidos(){
    var apellidos = document.getElementById('apellidosInput').value;

    if(apellidos.length == 0){
        apellidosError.innerHTML = 'Los apellidos son requeridos';
        return false;
    }
    if(!apellidos.match(/^[A-Za-z\s]*$/)){
        apellidosError.innerHTML = 'Utiliza solo letras.';
        return false;
    }
    apellidosError.innerHTML = '<i><img src="../img/check.png"></img></i>';
    return true;
}

function validarEmail(){
    var email = document.getElementById('emailInput').value;

    if(email.length == 0){
        emailError.innerHTML = 'El e-mail es requerido';
        return false;
    }
    if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        emailError.innerHTML = 'ejemplo@ejemplo.dominio';
        return false;
    }
    emailError.innerHTML = '<i><img src="../img/check.png"></img></i>';
    return true;
}

function validarTelefono(){
    var telefono = document.getElementById('telefonoInput').value;

    if(telefono.length == 0){
        telefonoError.innerHTML = 'El teléfono es requerido';
        return false;
    }
    if(!telefono.match(/^\d{9,10}$/)){
        telefonoError.innerHTML = 'Utilice un teléfono real';
        return false;
    }
    if(telefono.length>10){
        telefonoError.innerHTML = 'Entre 9 y 10 dígitos';
        return false;
    }
    telefonoError.innerHTML = '<i><img src="../img/check.png"></img></i>';
    return true;
}

function validarDNI(){
    var dni = document.getElementById('dniInput').value;

    if(dni.length == 0){
        dniError.innerHTML = 'El DNI es requerido';
        return false;
    }
    if(!dni.match(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i)){
        dniError.innerHTML = 'Introduzca un DNI válido';
        return false;
    }
    dniError.innerHTML = '<i><img src="../img/check.png"></img></i>';
    return true;
}

function validarIBAN(){
    var iban = document.getElementById('ibanInput').value;

    if(iban.length == 0){
        ibanError.innerHTML = 'El IBAN es requerido';
        return false;
    }
    if(!iban.match(/([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/g)){
        ibanError.innerHTML = 'Inválido';
        return false;
    }
    ibanError.innerHTML = '<i><img src="../img/check.png"></img></i>';
    return true;
}

function validarSWIFT(){
    var swift = document.getElementById('swiftInput').value;

    if(swift.length == 0){
        swiftError.innerHTML = 'El código SWIFT es requerido';
        return false;
    }
    if(!swift.match(/^[a-zA-Z0-9]{8,11}$/g)){
        swiftError.innerHTML = 'SWIFT Inválido';
        return false;
    }
    swiftError.innerHTML = '<i><img src="../img/check.png"></img></i>';
    return true;
}

function validarUsuario(){
    var usuario = document.getElementById('usuarioInput').value;

    if(usuario.length<=5){
        usuarioError.innerHTML = 'Demasiado corto';
        return false;
    }
    if(!usuario.match(/^[a-zA-Z0-9]+$/)){
        usuarioError.innerHTML = 'Carácteres inválidos';
        return false;
    }
    usuarioError.innerHTML = '<i><img src="../img/check.png"></img></i>';
    return true;
}

function validarFormulario(){
    if(!validarNombre() || !validarApellidos() || !validarEmail() || !validarTelefono() || !validarDNI() || !validarIBAN() || !validarSWIFT() || !validarUsuario()){
        botonError.style.display = 'block';
        botonError.innerHTML = 'Debe completar todos los campos.';
        setTimeout(function(){botonError.style.display = 'none';},3000);
        document.getElementById("formularioEpic").addEventListener("click", function(event){
            event.preventDefault() //Mantener la información para no resetear la información del input
          });
        return false;
    }
return true;

}


    


