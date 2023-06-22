// const antesButton = document.getElementById("antes")
// const despuesButton = document.getElementById("despues")
// const submitButton = document.getElementById('validate')
// const form = document.getElementById('stepByStepForm')
// const dots = document.getElementsByClassName('progress-bar__dot')
// const numberOfSteps = 3
// let currentStep = 1
// const antesButtonVertical = document.getElementById("antesVertical")
// const despuesButtonVertical = document.getElementById("despuesVertical")
// const submitButtonVertical = document.getElementById('validateVertical')
// const formVertical = document.getElementById('stepByStepFormVertical')
// const dotsVertical = document.getElementsByClassName('progress-bar-vertical__dot')
// const numberOfStepsVertical = 4
// let currentStepVertical = 1

// for(let i = 0 ; i < dots.length ; ++i){
//    dots[i].addEventListener('click', ()=>{
//      goToStep(i+1) 
//    })
// }
// for(let i = 0 ; i < dotsVertical.length ; ++i){
//    dotsVertical[i].addEventListener('click', ()=>{
//      goToStep(i+1) 
//    })
// }

// antesButton.onclick = goantes
// despuesButton.onclick = godespues
// antesButtonVertical.onclick = goantesVertical
// despuesButtonVertical.onclick = godespuesVertical


// function godespues(e) {
//    e.preventDefault()
//    currentStep += 1
//    goToStep(currentStep)
// }

// function goantes(e) {
//    e.preventDefault()
//    currentStep -= 1
//    goToStep(currentStep)
// }
// function godespuesVertical(e) {
//    e.preventDefault()
//    currentStepVertical += 1
//    goToStepVertical(currentStepVertical)
// }

// function goantesVertical(e) {
//    e.preventDefault()
//    currentStepVertical -= 1
//    goToStepVertical(currentStepVertical)
// }


// function goToStep(stepNumber){   
//    currentStep = stepNumber
   
//    let inputsToHide = document.getElementsByClassName('step')
//    let inputs = document.getElementsByClassName(`step${currentStep}`)
//    let indicators = document.getElementsByClassName('progress-bar__dot')
   
//    for(let i = indicators.length-1; i >= currentStep ; --i){
//       indicators[i].classList.remove('full')
//    }
   
//    for(let i = 0; i < currentStep; ++i){
//       indicators[i].classList.add('full')
//    }
   
//    //hide all input
//    for (let i = 0; i < inputsToHide.length; ++i) {
//       hide(inputsToHide[i]);
//    }
   
//    //only show the right one
//    for (let i = 0; i < inputs.length; ++i) {
//       show(inputs[i]);
//    }
   
//    //if we reached final step
//    if(currentStep === numberOfSteps){
//       enable(antesButton)
//       disable(despuesButton)
//       show(submitButton)
//    }
   
//    //else if first step
//    else if(currentStep === 1){
//      disable(antesButton)
//       enable(despuesButton)
//       hide(submitButton)
//    }
   
//    else {
//       enable(antesButton)
//       enable(despuesButton)
//       hide(submitButton)
//    }
// }
// function goToStepVertical(stepNumberVertical){   
//    currentStepVertical = stepNumberVertical
   
//    let inputsToHideVertical = document.getElementsByClassName('stepVertical')
//    let inputsVertical = document.getElementsByClassName(`stepVertical${currentStepVertical}`)
//    let indicatorsVertical = document.getElementsByClassName('progress-bar-vertical__dot')
   
//    for(let i = indicatorsVertical.length-1; i >= currentStepVertical ; --i){
//       indicatorsVertical[i].classList.remove('full')
//    }
   
//    for(let i = 0; i < currentStepVertical; ++i){
//       indicatorsVertical[i].classList.add('full')
//    }
   
//    //hide all input
//    for (let i = 0; i < inputsToHideVertical.length; ++i) {
//       hide(inputsToHideVertical[i]);
//    }
   
//    //only show the right one
//    for (let i = 0; i < inputsVertical.length; ++i) {
//       show(inputsVertical[i]);
//    }
   
//    //if we reached final step
//    if(currentStepVertical === numberOfStepsVertical){
//       enable(antesButtonVertical)
//       disable(despuesButtonVertical)
//       show(submitButtonVertical)
//    }
   
//    //else if first step
//    else if(currentStepVertical === 1){
//      disable(antesButtonVertical)
//       enable(despuesButtonVertical)
//       hide(submitButtonVertical)
//    }
   
//    else {
//       enable(antesButtonVertical)
//       enable(despuesButtonVertical)
//       hide(submitButtonVertical)
//    }
// }
// function enable(elem) {
//    elem.classList.remove("disabled");
//    elem.disabled = false;
//  }
 
//  function disable(elem) {
//    elem.classList.add("disabled");
//    elem.disabled = true;
//  }
 
//  function show(elem){
//    elem.classList.remove("hidden")
   
//  }
 
//  function hide(elem){
//    elem.classList.add("hidden")
   
//  }

