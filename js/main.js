const expand = document.getElementsByClassName('expand')
const codeExpand = document.querySelector('.code-height')
if(expand){
	for(let i = 0; i < expand.length; i++){
		expand[i].addEventListener('click', function(){
			let btnTarget = this.getAttribute('data-target');
			let codeTarget = document.querySelector(btnTarget)
			codeTarget.classList.toggle('code-height-show');
			if(codeTarget.classList.contains('code-height-show')){
				this.innerText = 'Cerrar'
			} else{
				this.innerText = 'Expandir'
			}
		})
	}
	
}



//   document.addEventListener("DOMContentLoaded", function () {
// 	const stepperTrue = $('.bs-stepper'), stepperTrueVertical = $('#vertical');

// 	if(stepperTrue){
// 	let stepper = new Stepper(stepperTrue[0],{
// 			linear: true,
// 			animation: true
// 		})
// 		$('.btnNext').click(function(){
// 			stepper.next()
// 		})
// 		$('.btnPrev').click(function(){
// 			stepper.previous()
// 		})
// 	}
// 	if(stepperTrueVertical){
// 	let stepper2 = new Stepper(stepperTrueVertical[0],{
// 			animation: true
// 		})
// 		$('.btnVerticalNext').click(function(){
// 			stepper2.next()
// 		})
// 		$('.btnVerticalPrev').click(function(){
// 			stepper2.previous()
// 		})
// 	}
//  });  


//   //Step Form
	  
//   $('#nameStep').hide();
//   $('#lnameStep').hide();
//   $('#emailStepCheck').hide();
//   $('#emailStepError').hide();
//   let nameError = true;
//   let lnameError = true;
//   let emailStepError = true;
//   let emailStepCheck = true;
//   $('#next').prop('disabled', true);
//   $('#firstnameVertical,#lastnameVertical,#emailVertical').keyup(function () {
// 	  if(validateStepName() && validateStepLastName() && validateStepEmail()){
// 		  console.log('valido')
// 	  $('#next').removeClass('boton-disable');
// 	  $('#next').prop('disabled', false);
// 	  } else{
// 		  console.log('no valido')
// 		  $('#next').addClass('boton-disable');
// 	  $('#next').prop('disabled', true);
// 	  };
//   });
// //   $('#firstnameVertical').blur(function(){
// // 	  validateStepName()
// //   })
// //   $('#lastnameVertical').blur(function(){
// // 	  validateStepLastName()
// //   })
  


//   function validateStepName() {
// 	  let name = document.getElementById('firstnameVertical')
// 	  let nameStep = $('#firstnameVertical').val();
// 	  if (nameStep.length == '') {
// 	  name.classList.add('is-invalid');	
// 	  name.classList.remove('is-valid');	
// 	  $('#nameStep').show();
// 		  nameError = false;
// 		  return false;
// 	  }
// 	  else {
// 		  name.classList.remove('is-invalid');	
// 		  name.classList.add('is-valid');	
// 		  $('#nameStep').hide();
// 		  return true;
// 	  }
// 	  }
//   function validateStepLastName() {
// 	  let lname = document.getElementById('lastnameVertical')
// 	  let lastnameStep = $('#lastnameVertical').val();
// 	  if (lastnameStep.length == '') {
// 	  lname.classList.add(
// 		  'is-invalid');
// 		  lname.classList.remove(
// 			  'is-valid');	
// 	  $('#lnameStep').show();
// 		  lnameError = false;
// 		  return false;
// 	  }
// 	  else {
// 		  lname.classList.remove('is-invalid');
// 		  lname.classList.add(
// 			  'is-valid');	
// 		  $('#lnameStep').hide();
// 		  return true;
// 	  }
// 	  }
// 	  const emailStep =
// 		  document.getElementById('emailVertical');
// 	//   if(emailStep){
// 	// 	emailStep.addEventListener('blur', ()=>{
// 	// 		let regex =
// 	// 	/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
// 	// 		let s = emailStep.value;
// 	// 		if(regex.test(s)){
// 	// 			emailStep.classList.remove(
// 	// 				'is-invalid');
// 	// 		emailStepError = true;
// 	// 		$('#emailStepError').hide();
// 	// 		$('#emailStepCheck').hide();
				
// 	// 			} else if(s.length == ''){
// 	// 				emailStep.classList.add(
// 	// 					'is-invalid');
// 	// 				emailStepError = false;
// 	// 				$('#emailStepCheck').show();
// 	// 				$('#emailStepError').hide();
// 	// 			}
// 	// 			else{
// 	// 				emailStep.classList.add(
// 	// 					'is-invalid');
// 	// 				emailStepError = false;
					
// 	// 				$('#emailStepError').show();
					
// 	// 			}
// 	// 		})
// 	//   }
	  
//   function validateStepEmail() {
// 	  let emailStep = 	document.getElementById('emailVertical')
// 		  let emailStepValue = $('#emailVertical').val();
// 		  let regex =
//   /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
// 	  let s = emailStep.value;
// 		  if (emailStepValue.length == '') {
// 		  emailStep.classList.add(
// 			  'is-invalid');	
// 		  $('#emailStepCheck').show();
// 		  $('#emailStepError').hide();
// 		  emailStepCheck = false;
// 			  return false;
// 		  } else if(!regex.test(s)){

// 			  emailStepCheck = false;
// 			  emailStep.classList.add(
// 				  'is-invalid');
// 				  $('#emailStepError').show();
// 				  $('#emailStepCheck').hide();
// 				  return false;		
// 		  }
// 		  else {
// 			  emailStepCheck = true;
// 			  emailStep.classList.add('is-valid')
// 			  emailStep.classList.remove(
// 				  'is-invalid');	
// 			  $('#emailStepCheck').hide();
// 			  $('#emailStepError').hide();
// 			  return true;
// 		  }
// 	  }

// 	  // PASO 2
// 	  $('#next2').prop('disabled', true);
// 		$('#asunto,#mensajeVertical').keyup(function () {
// 		if(validateAsunto() && validateMensaje()){
// 			console.log('valido')
// 		  $('#next2').removeClass('boton-disable');
// 		  $('#next2').prop('disabled', false);
// 		} else{
// 			console.log('no valido')
// 			$('#next2').addClass('boton-disable');
// 		  $('#next2').prop('disabled', true);
// 		};
// 	  });
// 	  $('#asunto').blur(function(){
// 		  validateAsunto()
// 	  })
// 	  $('#mensajeVertical').blur(function(){
// 		  validateMensaje()
// 	  })
// 	  $('#asuntoStep').hide();
// 	  $('#mensajeStep').hide();
// 	  let asuntoError = true;
// 	  let mensajeError = true;
// 	  function validateAsunto(){
// 		  let asunto = document.getElementById('asunto')
// 	  let asuntoStep = $('#asunto').val();
// 	  if (asuntoStep.length == '') {
// 		  asunto.classList.add('is-invalid');	
// 		  asunto.classList.remove('is-valid');	
// 		  $('#asuntoStep').show();
// 		  asuntoError = false;
// 		  return false;
// 	  }
// 	  else {
// 		  asunto.classList.remove('is-invalid');	
// 		  asunto.classList.add('is-valid');	
// 		  asuntoError = true;
// 		  $('#asuntoStep').hide();
// 		  return true;
// 	  }
// 	  }
// 	  function validateMensaje(){
// 		  let mensaje = document.getElementById('mensajeVertical')
// 	  let mensajeStep = $('#mensajeVertical').val();
// 	  if (mensajeStep.length == '') {
// 		  mensaje.classList.add('is-invalid');	
// 		  mensaje.classList.remove('is-valid');	
// 		  $('#mensajeStep').show();
// 		  mensajeError = false;
// 		  return false;
// 	  }
// 	  else {
// 		  mensaje.classList.remove('is-invalid');	
// 		  mensaje.classList.add('is-valid');	
// 		  mensajeError = true;
// 		  $('#mensajeStep').hide();
// 		  return true;
// 	  }
// 	  }

// 	  // PASO 3
// 	  $('#checkStep').hide()
// 	  let checkError = true
// 	  let checkedSometer = false
// 	  $('#checkboxStep').change(function(){
		  
// 	  // let asuntoStep = $('#checkboxStep').val();
// 	  if ($(this).is(":checked")) {
// 		  $('#someter').removeClass('boton-disable');	
// 		  $('#checkLabel').addClass('text-success');
// 		  $('#checkLabel').removeClass('text-danger');
// 		  $('#checkStep').hide()
// 		  checkedSometer = true;
// 	  }
// 	  });
// 	  $('#someter').click(function(){
// 		  if(checkedSometer){
// 			  toastOpen()
// 			  $(':input').val('');
// 			  $(':input').removeClass('is-valid');
// 			  stepper2.reset();
// 			  $('#next').prop('disabled', true);
// 			  $('#next2').prop('disabled', true);
// 			  $('#next').addClass('boton-disable');
// 			  $('#next2').addClass('boton-disable');
// 			  $('#vertical').parent().find('.label').removeClass('active-label')
// 			  $('#checkboxStep').prop( "checked", false );
// 			  $('#checkLabel').removeClass('text-success');
// 		  }else {
// 			  $('#checkLabel').addClass('text-danger');
// 			  $('#checkStep').show()
// 		  }
// 	  })
  
$(document).ready(function(){
	
	$('.display-menu').on("click", function(e) {
        e.preventDefault();
    });
	


	
	$('#emailCheckSteps').hide();	
	$('#emailErrorSteps').hide();
	// function ValidateEmail(input) {

	// 	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		
	// 	if (input.value.match(validRegex)) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
		
	// 	}
		  

	// $('.input').on('focusin', function() {
	// $(this).parent().find('.label').addClass('active-label');
	// });
		  
	// $('.input').on('focusout', function() {
	// if (!this.value) {
	// 	$(this).parent().find('.label').removeClass('active-label');
	// } 
	// });
	// $('.email').focusout( function() {
	// if (ValidateEmail(this)){
	// 	$(this).removeClass('is-invalid');
	// 	$(this).addClass('is-valid');
	// 	$(this).siblings('.emailCheck').hide();
	// 	$(this).siblings('.emailError').hide();	
	// }else if(this.value == ''){
	// 	$(this).addClass('is-invalid');
	// 	$(this).removeClass('is-valid');
	// 	$(this).siblings('.emailCheck').show();
	// 	$(this).siblings('.emailError').hide();
	// } else if(!ValidateEmail(this)){
	// 	$(this).addClass('is-invalid');
	// 	$(this).removeClass('is-valid');
	// 	$(this).siblings('.emailError').show();
	// 	$(this).siblings('.emailCheck').hide();	
	// } 
	// });
			
				
			
	// $('.selection').on('focusin', function() {
	// $(this).parent().find('.label').addClass('active-label');
	// });
	
	// $('.selection').on('focusout', function() {
	// if (!this.value) {
	// 	$(this).parent().find('.label').removeClass('active-label');
	// }
	// });
	

	// Toast
	function toastOpen() {
	const toastElList = [].slice.call(document.querySelectorAll('.toast'))
	let toastList = toastElList.map(function(toastEl) {
	// Creates an array of toasts (it only initializes them)
		return new bootstrap.Toast(toastEl) // No need for options; use the default options
	});
	// This show them
	toastList.forEach(toast => toast.show());
	console.log(toastList); // Testing to see if it works
	};
	
		
		
	





// window.onresize = function(){
// 	function reloadCss(){
//     const links = document.getElementById('mainCSS');
//     for (let cl in links){
//         let link = links[cl];
//         if (link.rel === "stylesheet")
//             link.href += "";
//     	}
// 	}
// 	reloadCss();
// }



	const copyClick = document.getElementsByClassName('copy');

	for (var i = 0; i < copyClick.length; i++){
		copyClick[i].addEventListener('click', (e) => {
		var copyTarget = e.target.getAttribute('data-target');
		console.log(copyTarget)  
		navigator.clipboard.writeText(document.querySelector(copyTarget).textContent)
			.then(() => {
			e.target.innerText = 'Copied!'
			setTimeout(function(){ e.target.innerText = 'Copy'}, 10000);    
			// alert('copied!')
			})
			.catch(() => {
			alert('Error')
			});
		});
	}
	
	

		  


  






//   UPLOAD FILE!!!!
  //selecting all required elements
const dropArea = document.querySelector(".drag-area"),
dragText = document.getElementById('drag-info'),
button = document.getElementById('upload-button'),
input = document.getElementById('upload'),
list = document.getElementById('subidos');
let filename;
let file; //this is a global variable and we'll use it inside multiple functions

$('#upload-button').click(function(){
  input.click(); //if user click on the button then the input also clicked
})
if(input){
	input.addEventListener("change", function(){
		//getting user select file and [0] this means if user select multiple files then we'll select only the first one
		file = this.files[0];
		filename = file.name;
		dropArea.classList.add("active");
		showFile(); //calling function
	  });
}

if(dropArea){
	//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
	event.preventDefault(); //preventing from default behaviour
	dropArea.classList.add("active");
	dragText.textContent = "Soltar documento";
  });
  //If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
	dropArea.classList.remove("active");
	dragText.textContent = "Colocar los documentos aquí o";
  });
  //If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
	event.preventDefault(); //preventing from default behaviour
	//getting user select file and [0] this means if user select multiple files then we'll select only the first one
	file = event.dataTransfer.files[0];
	filename = file.name;
	dragText.textContent = "Añadir documento o";
	showFile(); //calling function
  });
}




function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png", "application/pdf", "video/mp4", ".csv", 
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel", "text/html"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
        // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
     // let imgTag = `<img width="100" src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      // dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
	  function createMenuItem(name) {
		let li = document.createElement('li');
		li.innerHTML = `<button class="icon-sm" onclick="remove(this)" ><i class="fas fa-trash"></i></button><p class="file-item ml-2">${name}</p>`
		// li.textContent = name;
		return li;
	}
	  list.appendChild(createMenuItem(filename));
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Colocar los documentos aquí o";
  }
  console.log(file)
}
function remove(link) { 
    link.parentNode.parentNode.removeChild(link.parentNode);
}



})





// Document is ready
// $(document).ready(function () {
// 	 // Toast
// 	 function toastOpen() {
//         var toastElList = [].slice.call(document.querySelectorAll('.toast'))
//         var toastList = toastElList.map(function(toastEl) {
//         // Creates an array of toasts (it only initializes them)
//           return new bootstrap.Toast(toastEl) // No need for options; use the default options
//         });
//         // This show them
// 		toastList.forEach(toast => toast.show());
//         console.log(toastList); // Testing to see if it works
//       };
// 	  //Step Form
// 	  var stepper2 = new Stepper($('#vertical')[0])
// 	  $('#nameStep').hide();
// 	  $('#lnameStep').hide();
// 	  $('#emailStepCheck').hide();
// 	  $('#emailStepError').hide();
// 	  let nameError = true;
// 	  let lnameError = true;
// 	  let emailStepError = true;
// 	  let emailStepCheck = true;
// 	  $('#next').prop('disabled', true);
// 	  $('#firstnameVertical,#lastnameVertical,#emailVertical').keyup(function () {
// 		  if(validateStepName() && validateStepLastName() && validateStepEmail()){
// 			  console.log('valido')
// 			$('#next').removeClass('boton-disable');
// 			$('#next').prop('disabled', false);
// 		  } else{
// 			  console.log('no valido')
// 			  $('#next').addClass('boton-disable');
// 			$('#next').prop('disabled', true);
// 		  };
// 	});
// 	$('#firstnameVertical').blur(function(){
// 		validateStepName()
// 	})
// 	$('#lastnameVertical').blur(function(){
// 		validateStepLastName()
// 	})
	


// 	function validateStepName() {
// 		let name = document.getElementById('firstnameVertical')
// 		let nameStep = $('#firstnameVertical').val();
// 		if (nameStep.length == '') {
// 		name.classList.add('is-invalid');	
// 		name.classList.remove('is-valid');	
// 		$('#nameStep').show();
// 			nameError = false;
// 			return false;
// 		}
// 		else {
// 			name.classList.remove('is-invalid');	
// 			name.classList.add('is-valid');	
// 			$('#nameStep').hide();
// 			return true;
// 		}
// 		}
// 	function validateStepLastName() {
// 		let lname = document.getElementById('lastnameVertical')
// 		let lastnameStep = $('#lastnameVertical').val();
// 		if (lastnameStep.length == '') {
// 		lname.classList.add(
// 			'is-invalid');	
// 		$('#lnameStep').show();
// 			lnameError = false;
// 			return false;
// 		}
// 		else {
// 			lname.classList.remove('is-invalid');	
// 			$('#lnameStep').hide();
// 			return true;
// 		}
// 		}
// 		const emailStep =
// 			document.getElementById('emailVertical');
// 		emailStep.addEventListener('blur', ()=>{
// 		let regex =
// 	/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
// 		let s = emailStep.value;
// 		if(regex.test(s)){
// 			emailStep.classList.remove(
// 				'is-invalid');
// 		emailStepError = true;
// 		$('#emailStepError').hide();
			
// 			} else if(s.length == ''){
// 				emailStep.classList.add(
// 					'is-invalid');
// 				emailStepError = false;
// 				$('#emailStepCheck').show();
// 			}
// 			else{
// 				emailStep.classList.add(
// 					'is-invalid');
// 				emailStepError = false;
// 				$('#emailStepError').show();
				
// 			}
// 		})
// 	function validateStepEmail() {
// 		let emailStep = 	document.getElementById('emailVertical')
// 			let emailStepValue = $('#emailVertical').val();
// 			let regex =
// 	/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
// 		let s = emailStep.value;
// 			if (emailStepValue.length == '') {
// 			emailStep.classList.add(
// 				'is-invalid');	
// 			$('#emailStepCheck').show();
// 			$('#emailStepError').hide();
// 			emailStepCheck = false;
// 				return false;
// 			} else if(!regex.test(s)){

// 				emailStepCheck = false;
// 				emailStep.classList.add(
// 					'is-invalid');
// 					$('#emailStepError').show();
// 					$('#emailStepCheck').hide();
// 					return false;		
// 			}
// 			else {
// 				emailStepCheck = true;
// 				emailStep.classList.remove(
// 					'is-invalid');	
// 				$('#emailStepCheck').hide();
// 				$('#emailStepError').hide();
// 				return true;
// 			}
// 		}
			
		
// 		$('#next').click(function () {
// 			stepper2.next()
		
// 		});

// 		// CONTACT FORM

	
// 	// Validate Username
// 		$('#namecheck').hide();	
// 		let usernameError = true;
// 		$('#contact-name').keyup(function () {
// 			validateUsername();
// 		});
		
// 		function validateUsername() {
// 		let name = 	document.getElementById('contact-name')
// 		let usernameValue = $('#contact-name').val();
// 		if (usernameValue.length == '') {
// 		name.classList.add(
// 			'is-invalid');	
// 		$('#namecheck').show();
// 			usernameError = false;
// 			return false;
// 		}
	
// 		else {
// 			name.classList.remove(
// 				'is-invalid');	
// 			$('#namecheck').hide();
// 		}
// 		}
	
// 	// Validate Email
// 		$('#emailCheck').hide();	
// 		$('#emailError').hide();	
// 		let emailError = true;
// 		let emailCheck = true;
// 		$('#contact-email').keyup(function () {
// 			validateEmail();
// 		});
// 		const email =
// 			document.getElementById('contact-email');
// 		email.addEventListener('blur', ()=>{
// 		let regex =
// 	/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
// 		let s = email.value;
// 		if(regex.test(s)){
// 			email.classList.remove(
// 				'is-invalid');
// 		emailError = true;
// 		$('#emailError').hide();
			
// 			} else if(s.length == ''){
// 				email.classList.add(
// 					'is-invalid');
// 				emailError = false;
// 				$('#emailCheck').show();
// 			}
// 			else{
// 				email.classList.add(
// 					'is-invalid');
// 				emailError = false;
// 				$('#emailError').show();
				
// 			}
// 		})
		
// 		function validateEmail() {
// 			let email = 	document.getElementById('contact-email')
// 			let useremailValue = $('#contact-email').val();
// 			let regex =
// 	/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
// 		let s = email.value;
// 			if (useremailValue.length == '') {
// 			email.classList.add(
// 				'is-invalid');	
// 			$('#emailCheck').show();
// 			$('#emailError').hide();
// 				emailCheck = false;
// 				return false;
// 			} else if(!regex.test(s)){
// 				email.classList.add(
// 					'is-invalid');
// 					$('#emailError').show();
// 					$('#emailCheck').hide();		
// 			}
// 			else {
// 				email.classList.remove(
// 					'is-invalid');	
// 				$('#emailCheck').hide();
// 				$('#emailError').hide();
// 			}
// 			}


// 			$('#msgCheck').hide();
// 			let messageError = true;
// 			$('#contact-mensaje').keyup(function () {
// 				validateMessage();
// 			});
// 			function validateMessage(){
// 				let message = document.getElementById('contact-mensaje');
// 				let messageValue = $('#contact-mensaje').val();
// 				if(messageValue.length == ''){
// 					message.classList.add(
// 						'is-invalid');
// 					$('#msgCheck').show();
// 					messageError = false;	
// 				}else {
// 					message.classList.remove('is-invalid');
// 					$('#msgCheck').hide();
// 					messageError = true;
// 				}
// 			}
		
// 	// Submitt button
// 		$('#submitted').hide();	
// 		$('#submitbtn').click(function () {
			
// 			validateUsername();
// 			// validatePassword();
// 			// validateConfirmPasswrd();
// 			validateEmail();
// 			validateMessage();
// 			if ((usernameError == true) &&
// 				(messageError == true) &&
// 				// (confirmPasswordError == true) &&
// 				(emailError == true)) {
// 					toastOpen()
// 					$("#contact-form")[0].reset();
// 				// $('#submitted').fadeIn();
// 				// setTimeout(function(){ $('#submitted').fadeOut(); }, 5000);		
// 				return true;
				
// 			} else {
// 				return false;
// 			}
// 		});
// 		var btns = document.getElementsByClassName('card-pin');

// 		for (var i = 0; i < btns.length; i++) {
// 			$('.card-pin').click(function(){
// 				var setMap = $(this).attr('data-set');
// 				var map = document.getElementById('map')
// 				$('#map').attr('src', setMap);
// 				map.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
// 				var current = document.getElementsByClassName("active-pin");
// 				current[0].className = current[0].className.replace(" active-pin", "");
// 				this.className += " active-pin";
	
// 			})
// 		  }
		
// 	});
	

