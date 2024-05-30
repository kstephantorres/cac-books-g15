const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

formulario.addEventListener('submit',(e) => {
if (!validarformulario()) {

    console.log('El formulario es incorrecto, volve a realizarlo.');
    e.preventDefault();
} else {
    console.log('Formulario correcto.');
}
});



const validarformulario = () => {
    let validar = true;
    if (!validaremail(emailInput.value)) {
        mostrarError(emailInput, 'Email incorrecto ');
        validar = false;
    } else {
        mostrarError(emailInput,'');
    }

    if(!validarContra(passwordInput.value)) {
        mostrarError(passwordInput, 'Introduce tu contraseña');
        validar = false;
    }
    else {
        mostrarError(passwordInput,'');
    }
    validar = false;
}

function validaremail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validarContra(contraseña) {
    return contraseña.trim() !== '';
}

function mostrarError(input, mensaje) {
    const errorDiv = input.parentElement.querySelector('.error-text');
    errorDiv.textContent = mensaje;
    errorDiv.style.display = mensaje ? 'block' : 'none';
}



