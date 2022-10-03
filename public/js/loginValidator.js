window.addEventListener('load', function(){

    /* Capturamos el form */
    const form = document.querySelector('.loginForm')

/*     const {User} = require ('../../src/database/models')
 */
    
    
    /* Capturamos los elementos input */
    const loginEmail = document.querySelector('input.loginEmail')
    const loginPassword = document.querySelector('input.loginPassword')
    const startButton = document.querySelector('button.startButton')
    
    /* Expresiones regulares */
    
    /* const RegExpEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'i')
    const RegExpImages= new RegExp(/([^\s]+(\.(?i)(jpg|png|gif|bmp))$)/,'i') */

    const RegExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
    
    
    let errors = {}
    
    let emailValidation = () =>{
    
        //CHEQUEAR LO DE LA BASE DE DATOS
    
        let feedback = ""
    
        let loginEmailError = document.querySelector('div#loginEmailError')
    
        if(loginEmail.value.trim() == ""){
            feedback = "El campo de email no puede estar vacío"
        } else if (!RegExpEmail.test(loginEmail.value)){
            feedback = "Debes poner un formato de email válido"
        }
    
        // Chequear validación expresión regular
    
        if(feedback){
            loginEmail.style.backgroundColor = "rgba(255,0,0,0.5)"
            errors.loginEmail = feedback
        } else { 
            loginEmail.style.backgroundColor = "rgba(211, 214, 143, 0.8)" 
            delete errors.loginEmail 
        }
    
        loginEmailError.innerText = feedback
    }
    
    let passwordValidation = () =>{
    
        let feedback = ""
    
        let loginPasswordError = document.querySelector('div#loginPasswordError')
    
        if(loginPassword.value.trim() == ""){
            feedback = "Debes ingresar una contraseña"
        }
    
        if(feedback){
            loginPassword.style.backgroundColor = "rgba(255,0,0,0.5)"
            errors.loginPassword = feedback
        } else { 
            loginPassword.style.backgroundColor = "rgba(211, 214, 143, 0.8)" 
            delete errors.loginPassword 
        }
    
        loginPasswordError.innerText = feedback
    }
    
    form.addEventListener("submit", function(e){
        e.preventDefault()
        emailValidation()
        passwordValidation()
    
        if(Object.keys(errors).length){
            e.preventDefault()
        }else{
            form.submit()
        }
    })
    
    loginEmail.addEventListener("input", emailValidation)
    loginPassword.addEventListener("input", passwordValidation)
    
    
    })