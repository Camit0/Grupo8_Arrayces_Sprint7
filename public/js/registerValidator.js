window.addEventListener('load', function(){

    /* Capturamos el form */
    const form = document.querySelector('.registerForm')
    console.log(form)
    
    /* Capturamos los elementos input */
    const avatar = document.querySelector('input#avatar')
    const firstName = document.querySelector('input#firstName')
    const lastName = document.querySelector('input#lastName')
    const userName = document.querySelector('input#userName')
    const email = document.querySelector('input#email')
    const password = document.querySelector('input#password')
    const confirmPassword = document.querySelector('input#confirmPassword')
    const buttonCrear = document.querySelector('button.crearCuenta')
    
    
    let errors = {}
    
    
    let avatarValidation = () => {
        feedback = ""
    
        const avatarError = document.querySelector('div#avatarError')
    
        //FALTA COMPLETAR
    }
    
    
    
    
    let firstNameValidation = () =>{
    
        let feedback = ""
    
        const firstNameError = document.querySelector('div#firstNameError')
    
        if(firstName.value.trim() == ""){
            feedback = "Debes ingresar tu nombre"
        } else if (firstName.value.length < 2){
            feedback = "Tu nombre debe tener al menos 2 caracteres"
        }
    
        
        if(feedback){
            firstName.style.backgroundColor = "rgba(255,0,0,0.5)"
            errors.firstName = feedback
        } else { 
            firstName.style.backgroundColor = "rgba(211, 214, 143, 0.8)"
            delete errors.firstName 
        }
    
        firstNameError.innerText = feedback
        
    }
    
    let lastNameValidation = () =>{
    
        let feedback = ""
    
        const lastNameError = document.querySelector('div#lastNameError')
    
        if(lastName.value.trim() == ""){
            feedback = "Debes ingresar tu apellido"
        }else if (lastName.value.length < 2){
            feedback = "Tu apellido debe tener al menos 2 caracteres"
        }
        
        if(feedback){
            lastName.style.backgroundColor = "rgba(255,0,0,0.5)"
            errors.lastName = feedback
        } else { 
            lastName.style.backgroundColor = "rgba(211, 214, 143, 0.8)"
            delete errors.lastName 
        }
    
        lastNameError.innerText = feedback
        
    }
    
    let userNameValidation = () =>{
    
        let feedback = ""
    
        const userNameError = document.querySelector('div#userNameError')
    
        if(userName.value.trim() == ""){
            feedback = "Debes ingresar un nombre de usuario"
        } else if (userName.value.length < 5){
            feedback = "El nombre de usuario debe tener al menos 5 caracteres"
        }
        
        if(feedback){
            userName.style.backgroundColor = "rgba(255,0,0,0.5)"
            errors.userName = feedback
        } else { 
            userName.style.backgroundColor = "rgba(211, 214, 143, 0.8)"
            delete errors.userName 
        }
    
        userNameError.innerText = feedback
        
    }
    
    let emailValidation = () =>{
    
        //CHEQUEAR LO DE LA BASE DE DATOS
    
        let feedback = ""
    
        let emailError = document.querySelector('div#emailError')
    
        if(email.value.trim() == ""){
            feedback = "El campo de email no puede estar vacío"
        }
    
        // Validación expresión regular
    
        if(feedback){
            email.style.backgroundColor = "rgba(255,0,0,0.5)"
            errors.email = feedback
        } else { 
            email.style.backgroundColor = "rgba(211, 214, 143, 0.8)" 
            delete errors.email
        }
    
        emailError.innerText = feedback
    }
    
    let passwordValidation = () =>{
    
        let feedback = ""
    
        let passwordError = document.querySelector('div#passwordError')
    
        if(password.value.trim() == ""){
            feedback = "Debes ingresar una contraseña"
        } else if (password.value.length < 8){
            feedback = "La contraseña debe tener al menos 8 caracteres"
        }
    
         //Validación expresión regular (opcional)
    
        if(feedback){
            password.style.backgroundColor = "rgba(255,0,0,0.5)"
            errors.password = feedback
        } else { 
            password.style.backgroundColor = "rgba(211, 214, 143, 0.8)" 
            delete errors.password 
        }
    
        passwordError.innerText = feedback
    }
    
    let confirmPasswordValidation = () =>{
    
        let feedback = ""
    
        const confirmPasswordError = document.querySelector('div#confirmPasswordError')
    
        if(confirmPassword.value.trim() == ""){
            feedback = "Debes reingresar la contraseña"
        } else if (confirmPassword.value != password.value){
            feedback = "Las contraseñas no coinciden"
        }
    
        if(feedback){
            confirmPassword.style.backgroundColor = "rgba(255,0,0,0.5)"
            errors.confirmPassword = feedback
        } else { 
            confirmPassword.style.backgroundColor = "rgba(211, 214, 143, 0.8)" 
            delete errors.confirmPassword 
        }
    
        confirmPasswordError.innerText = feedback
    }
    
    form.addEventListener("submit", function(e){
        e.preventDefault()
    
        firstNameValidation()
        lastNameValidation()
        userNameValidation()
        emailValidation()
        passwordValidation()
        confirmPasswordValidation()
    
        if(Object.keys(errors).length){
            e.preventDefault()
        }else{
            form.submit()
        }
    })
    
    firstName.addEventListener("input", firstNameValidation)
    lastName.addEventListener("input", lastNameValidation)
    userName.addEventListener("input", userNameValidation)
    email.addEventListener("input", emailValidation)
    password.addEventListener("input", passwordValidation)
    confirmPassword.addEventListener("input", confirmPasswordValidation)
    })