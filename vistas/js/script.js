const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/;
  const nombrePersona = document.getElementById('nombrePersona'); //nos traemos el input del nombre por el atributo id
    nombrePersona.addEventListener('blur', () => {

        if (!nombreRegex.test(nombrePersona.value)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
        nombrePersona.focus();
        }
        
});