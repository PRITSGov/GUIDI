// Inputs
export const viewForm = (() => {
    console.log('Form is up')
    $('.input').on('focusin', function() {
    $(this).parent().find('.label').addClass('active-label');
    });
            
    $('.input').on('focusout', function() {
    if (!this.value) {
        $(this).parent().find('.label').removeClass('active-label');
    } 
    });
    $('.selection').on('focusin', function() {
    $(this).parent().find('.label').addClass('active-label');
    });
    
    $('.selection').on('focusout', function() {
    if (!this.value) {
        $(this).parent().find('.label').removeClass('active-label');
    }
    });
  
});
export const stepperTrue = $('.bs-stepper'), stepperTrueVertical = $('#vertical');

	
export let stepper = new Stepper(stepperTrue[0],{
        linear: true,
        animation: true
    })
    $('.btnNext').click(function(){
        stepper.next()
    })
    $('.btnPrev').click(function(){
        stepper.previous()
    })
	

export let stepper2 = new Stepper(stepperTrueVertical[0],{
        animation: true
    })
    $('.btnVerticalNext').click(function(){
        stepper2.next()
    })
    $('.btnVerticalPrev').click(function(){
        stepper2.previous()
    })
	

// CONTACT FORM example

$('#emailCheckSteps').hide();	
$('#emailErrorSteps').hide();
	// Validate Username
    $('#namecheck').hide();	
    let usernameError = true;
    $('#contact-name').keyup(function () {
        validateUsername();
    });
    
    export function validateUsername() {
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
        name.classList.add('is-valid')    	
        $('#namecheck').hide();
    }
    }

// Validate Email
    $('#emailCheck').hide();	
    $('#emailError').hide();	
    let emailError = true;
    let emailCheck = true;
    $('#contact-email').keyup(function () {
        validateEmail();
    });
    const email =
        document.getElementById('contact-email');
  
    
    export function validateEmail() {
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
            email.classList.add('is-valid')	
            $('#emailCheck').hide();
            $('#emailError').hide();
        }
        }


        $('#msgCheck').hide();
        let messageError = true;
        $('#contact-mensaje').keyup(function () {
            validateMessage();
        });
        export function validateMessage(){
            let message = document.getElementById('contact-mensaje');
            let messageValue = $('#contact-mensaje').val();
            if(messageValue.length == ''){
                message.classList.add(
                    'is-invalid');
                $('#msgCheck').show();
                messageError = false;	
            }else {
                message.classList.remove('is-invalid');
                message.classList.add('is-valid');
                $('#msgCheck').hide();
                messageError = true;
            }
        }
    
// Submitt button
    $('#submitted').hide();
    const submitBtn = document.getElementById('submitbtn');
    const contactForm = document.getElementById('contact-form')
    export function submitForm(){
        $('#submitbtn').click(function(){
            console.log($('#contact-form .input'))
            validateUsername();
            validateEmail();
            validateMessage();
            if ((usernameError == true) &&
                (messageError == true) &&
                (emailError == true)) {
                    toastOpen()
                    $('#contact-form .input').parent().find('label').removeClass('active-label')
                    $('#contact-form .input').removeClass('is-valid')
                //    contactForm.submit();
                   contactForm.reset();
                return false;
                
            } else {
                return false;
            }
        });
    }
    
    //Step Form
	  
  $('#nameStep').hide();
  $('#lnameStep').hide();
  $('#emailStepCheck').hide();
  $('#emailStepError').hide();
  let nameError = true;
  let lnameError = true;
  let emailStepError = true;
  let emailStepCheck = true;
  $('#next').prop('disabled', true);
  $('#firstnameVertical,#lastnameVertical,#emailVertical').change(function () {
	  if(validateStepName() && validateStepLastName() && validateStepEmail()){
		  console.log('valido')
	  $('#next').removeClass('boton-disable');
	  $('#next').prop('disabled', false);
	  };
  });
  export function clickNext(){
      $('#next').click(function(){
          alert('hey')
      })
  }


  export function validateStepName() {
	  let name = document.getElementById('firstnameVertical')
	  let nameStep = $('#firstnameVertical').val();
	  if (nameStep.length == '') {
	  name.classList.add('is-invalid');	
	  name.classList.remove('is-valid');	
	  $('#nameStep').show();
		  nameError = false;
		  return false;
	  }
	  else {
		  name.classList.remove('is-invalid');	
		  name.classList.add('is-valid');	
		  $('#nameStep').hide();
		  return true;
	  }
	  }
  export function validateStepLastName() {
	  let lname = document.getElementById('lastnameVertical')
	  let lastnameStep = $('#lastnameVertical').val();
	  if (lastnameStep.length == '') {
	  lname.classList.add(
		  'is-invalid');
		  lname.classList.remove(
			  'is-valid');	
	  $('#lnameStep').show();
		  lnameError = false;
		  return false;
	  }
	  else {
		  lname.classList.remove('is-invalid');
		  lname.classList.add(
			  'is-valid');	
		  $('#lnameStep').hide();
		  return true;
	  }
	  }
	  const emailStep =
		  document.getElementById('emailVertical');
	
  export function validateStepEmail() {
	  let emailStep = 	document.getElementById('emailVertical')
		  let emailStepValue = $('#emailVertical').val();
		  let regex =
  /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	  let s = emailStep.value;
		  if (emailStepValue.length == '') {
		  emailStep.classList.add(
			  'is-invalid');	
		  $('#emailStepCheck').show();
		  $('#emailStepError').hide();
		  emailStepCheck = false;
			  return false;
		  } else if(!regex.test(s)){

			  emailStepCheck = false;
			  emailStep.classList.add(
				  'is-invalid');
				  $('#emailStepError').show();
				  $('#emailStepCheck').hide();
				  return false;		
		  }
		  else {
			  emailStepCheck = true;
			  emailStep.classList.add('is-valid')
			  emailStep.classList.remove(
				  'is-invalid');	
			  $('#emailStepCheck').hide();
			  $('#emailStepError').hide();
			  return true;
		  }
	  }

	  // PASO 2
	  $('#next2').prop('disabled', true);
		$('#asunto,#mensajeVertical').keyup(function () {
		if(validateAsunto() && validateMensaje()){
			console.log('valido')
		  $('#next2').removeClass('boton-disable');
		  $('#next2').prop('disabled', false);
		} else{
			console.log('no valido')
			$('#next2').addClass('boton-disable');
		  $('#next2').prop('disabled', true);
		};
	  });
	  $('#asunto').blur(function(){
		  validateAsunto()
	  })
	  $('#mensajeVertical').blur(function(){
		  validateMensaje()
	  })
	  $('#asuntoStep').hide();
	  $('#mensajeStep').hide();
	  let asuntoError = true;
	  let mensajeError = true;
	  export function validateAsunto(){
		  let asunto = document.getElementById('asunto')
	  let asuntoStep = $('#asunto').val();
	  if (asuntoStep.length == '') {
		  asunto.classList.add('is-invalid');	
		  asunto.classList.remove('is-valid');	
		  $('#asuntoStep').show();
		  asuntoError = false;
		  return false;
	  }
	  else {
		  asunto.classList.remove('is-invalid');	
		  asunto.classList.add('is-valid');	
		  asuntoError = true;
		  $('#asuntoStep').hide();
		  return true;
	  }
	  }
	  export function validateMensaje(){
		  let mensaje = document.getElementById('mensajeVertical')
	  let mensajeStep = $('#mensajeVertical').val();
	  if (mensajeStep.length == '') {
		  mensaje.classList.add('is-invalid');	
		  mensaje.classList.remove('is-valid');	
		  $('#mensajeStep').show();
		  mensajeError = false;
		  return false;
	  }
	  else {
		  mensaje.classList.remove('is-invalid');	
		  mensaje.classList.add('is-valid');	
		  mensajeError = true;
		  $('#mensajeStep').hide();
		  return true;
	  }
	  }

	  // PASO 3
	  $('#checkStep').hide()
	  let checkError = true
	  let checkedSometer = false
      export function checkboxStep(){
        $('#checkboxStep').change(function(){
		  
            // let asuntoStep = $('#checkboxStep').val();
            if ($(this).is(":checked")) {
                $('#someter').removeClass('boton-disable');	
                $('#checkLabel').addClass('text-success');
                $('#checkLabel').removeClass('text-danger');
                $('#checkStep').hide()
                checkedSometer = true;
            }
            });
      }
	 
      export function someterForm(){
        $('#someter').click(function(){
            if(checkedSometer){
                toastOpen()
                $(':input').val('');
                $(':input').removeClass('is-valid');
                stepper2.reset();
                $('#next').prop('disabled', true);
                $('#next2').prop('disabled', true);
                $('#next').addClass('boton-disable');
                $('#next2').addClass('boton-disable');
                $('#vertical').parent().find('.label').removeClass('active-label')
                $('#checkboxStep').prop( "checked", false );
                $('#checkLabel').removeClass('text-success');
            }else {
                $('#checkLabel').addClass('text-danger');
                $('#checkStep').show()
            }
        })
      }
	  
    

    // Toast
	export function toastOpen() {
        var toastElList = [].slice.call(document.querySelectorAll('.toast'))
        var toastList = toastElList.map(function(toastEl) {
        
            return new bootstrap.Toast(toastEl) 
        });
        
        toastList.forEach(toast => toast.show());
        };