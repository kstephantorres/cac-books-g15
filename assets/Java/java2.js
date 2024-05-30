document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!validarFormulario()) {
            console.log('El formulario es incorrecto');
        } else {
            console.log('El formulario es correcto.');
            formulario.submit();
        }
    });

    function validarFormulario() {
        let validar = true;

        validar = validarCampo('nombre', 'Este campo es obligatorio') && validar;
        validar = validarCampo('apellido', 'Este campo es obligatorio') && validar;
        validar = validarEmail('email', 'El email es obligatorio') && validar;
        validar = validarContra('password', 'Necesitas una contraseña') && validar;

        const terminosInput = document.getElementById('terminos-condiciones');
        if (!terminosInput.checked) {
            validar = false;
            setErrorFor(terminosInput, 'Debes aceptar los términos y condiciones');
        }

        return validar;
    }

    function validarCampo(id, mensaje) {
        const input = document.getElementById(id);
        if (input.value.trim() === '') {
            setErrorFor(input, mensaje);
            return false;
        } else {
            setSuccessFor(input);
            return true;
        }
    }

    function validarEmail(id, mensaje) {
        const input = document.getElementById(id);
        const re = /\S+@\S+\.\S+/;
        if (!re.test(input.value.trim())) {
            setErrorFor(input, mensaje);
            return false;
        } else {
            setSuccessFor(input);
            return true;
        }
    }

    function validarContra(id, mensaje) {
        const input = document.getElementById(id);
        if (input.value.trim() === '') {
            setErrorFor(input, mensaje);
            return false;
        } else {
            setSuccessFor(input);
            return true;
        }
    }

    function setErrorFor(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.innerText = message;
        errorDiv.style.display = 'block';
        input.classList.add('error');
    }

    function setSuccessFor(input) {
        const errorDiv = input.nextElementSibling;
        errorDiv.innerText = '';
        errorDiv.style.display = 'none';
        input.classList.remove('error');
    }
});


    
    
   