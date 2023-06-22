// CONTACT FORM

	
	// Validate Username
    $('#namecheck').hide();	
    let usernameError = true;
    $('#contact-name').keyup(function () {
        validateUsername();
    });
    
    function validateUsername() {
    let name = 	document.getElementById('contact-name')
    let usernameValue = $('#contact-name').val();
    if (usernameValue.length == '') {
    name.classList.add(
        'is-invalid');	
    $('#namecheck').show();
        usernameError = false;
        return false;
    }

    else {
        name.classList.remove(
            'is-invalid');	
        $('#namecheck').hide();
    }
    }

// Validate Email
    $('#emailCheck').hide();	
    $('#emailError').hide();	
    let emailError = true;
    let emailCheck = true;
    // $('#contact-email').keyup(function () {
    //     validateEmail();
    // });
    const email =
        document.getElementById('contact-email');
    // if(email){
    //     email.addEventListener('blur', ()=>{
    //         let regex =
    //     /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    //         let s = email.value;
    //         if(regex.test(s)){
    //             email.classList.remove(
    //                 'is-invalid');
    //         emailError = true;
    //         $('#emailError').hide();
                
    //             } else if(s.length == ''){
    //                 email.classList.add(
    //                     'is-invalid');
    //                 emailError = false;
    //                 $('#emailCheck').show();
    //             }
    //             else{
    //                 email.classList.add(
    //                     'is-invalid');
    //                 emailError = false;
    //                 $('#emailError').show();
                    
    //             }
    //         })
    // }
    
    function validateEmail() {
        let email = 	document.getElementById('contact-email')
        let useremailValue = $('#contact-email').val();
        let regex =
/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let s = email.value;
        if (useremailValue.length == '') {
        email.classList.add(
            'is-invalid');	
        $('#emailCheck').show();
        $('#emailError').hide();
            emailCheck = false;
            return false;
        } else if(!regex.test(s)){
            email.classList.add(
                'is-invalid');
                $('#emailError').show();
                $('#emailCheck').hide();		
        }
        else {
            email.classList.remove(
                'is-invalid');	
            $('#emailCheck').hide();
            $('#emailError').hide();
        }
        }


        $('#msgCheck').hide();
        let messageError = true;
        $('#contact-mensaje').keyup(function () {
            validateMessage();
        });
        function validateMessage(){
            let message = document.getElementById('contact-mensaje');
            let messageValue = $('#contact-mensaje').val();
            if(messageValue.length == ''){
                message.classList.add(
                    'is-invalid');
                $('#msgCheck').show();
                messageError = false;	
            }else {
                message.classList.remove('is-invalid');
                $('#msgCheck').hide();
                messageError = true;
            }
        }
    
// Submitt button
    $('#submitted').hide();	
    $('#submitbtn').click(function () {
        
        validateUsername();
        // validatePassword();
        // validateConfirmPasswrd();
        validateEmail();
        validateMessage();
        if ((usernameError == true) &&
            (messageError == true) &&
            // (confirmPasswordError == true) &&
            (emailError == true)) {
                toastOpen()
                $("#contact-form")[0].reset();
            // $('#submitted').fadeIn();
            // setTimeout(function(){ $('#submitted').fadeOut(); }, 5000);		
            return true;
            
        } else {
            return false;
        }
    });

    // Toast
	function toastOpen() {
        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function(toastEl) {
        // Creates an array of toasts (it only initializes them)
            return new bootstrap.Toast(toastEl) // No need for options; use the default options
        });
        // This show them
        toastList.forEach(toast => toast.show());
        console.log(toastList); // Testing to see if it works
        };