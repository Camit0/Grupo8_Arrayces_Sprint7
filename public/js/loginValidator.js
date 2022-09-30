window.addEventListener('load', function(){

/* Capturamos el form */
const form = document.querySelector('form')

/* Capturamos los elementos input */
const loginEmail = document.querySelector('input.loginEmail')
const loginPassword = document.querySelector('input.loginPassword')
const startButton = document.querySelector('button.startButton')

/* Capturamos los DIVs para inyectar los errores */
const loginEmailError = document.querySelector('div#loginEmailError')
const loginPasswordError = document.querySelector('div#loginPasswordError')


/* Validamos formulario al presionar botón de inicio */
startButton.addEventListener('click', function(e){

    e.preventDefault()

    let errores = {}

    if(loginEmail.value === ""){
        errores.email = 'El campo email no puede estar vacío'
    }

    if(loginPassword.value === ""){
        errores.password = 'El campo contraseña no puede estar vacío'
    }

    if(Object.keys(errores).length > 0){
        errores.email ? (loginEmailError.innerText = errores.email) : (loginEmailError.innerText = "")
        errores.password ? (loginPasswordError.innerText = errores.password) : (loginPasswordError.innerText = "")
    } else { 
        loginEmailError.innerText = ""
        loginPasswordError.innerText = ""
        startButton.click() // evento click y submit no funcionaron
    } 

})


/* Validamos campo de email */
loginEmail.addEventListener('focus', function(){

    if(loginEmail.value === ""){
        loginEmail.classList.add('isInvalid') // cuando creemos la clase va a aparecer el input con borde rojo
        loginEmailError.innerText = 'El campo email no puede estar vacío'
    } else {
        loginEmailError.innerText = ""
    }

})

loginEmail.addEventListener('input', function(){

    if(!loginEmail.value.includes('@')) { // debemos reemplazar por chirimbolo
        loginEmailError.innerText = 'El email debe tener un farmato válido'
    } else {
        loginEmail.classList.remove('isInvalid')
        loginEmail.classList.add('isValid')
    }

})



})