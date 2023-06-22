import * as nav from './modules/navegation.js';



const MAIN = (function(){
    
    
    const cards = document.getElementsByClassName('card-flip');
    const filter = document.getElementsByClassName('filter');
    const form = document.getElementsByClassName('input');
    const splide = document.getElementsByClassName('swiper');
    const map = document.getElementsByClassName('map-responsive');
    const graph = document.getElementsByClassName('graph')

    if(cards.length > 0){
            (async function impCard(){
                const cardAwait = await import("./modules/cards.js")
                await cardAwait.cardClose()
                await cardAwait.cardOpen()
            })();
    } else{
        console.log('use "class=card-flip" to use card-flip module')
    }
    if(filter.length > 0){
            (async function impFilter(){
                const filterAwait = await import('./modules/filters.js');
                await filterAwait.selectFilter();
            })();
    } else {
        console.log('use "class=filter" to use filter module')
    }
    if(form.length > 0){
            (async function impForm(){
                const formAwait = await import('./modules/forms.js')
                formAwait.viewForm();
                formAwait.submitForm();
                formAwait.someterForm();
                formAwait.checkboxStep();
            })();
    } else {
        console.log('use "class=input" to use form/input module')
    }
    if(splide.length > 0){
       
            (async function impUtils(){
                const utilsAwait = await import('./modules/utils.js');
                // utilsAwait.exportSplide();
                utilsAwait.exportSwiper();

            })();
        
       
    }else {
        console.log('use "class=splide" to use splide.js module')
    }

    if(graph.length > 0){
        
            (async function impGraph(){
                const graphAwait = await import('./modules/graph.js');
                await graphAwait.graphs();
            })();
       
    }else {
        console.log('use "class=graph" to use graph module')
    } 
        
    
    if(map.length > 0){
       
            (async function impLocation(){
                const locationAwait = await import('./modules/location.js');
                await locationAwait.mapPin();
                await locationAwait.init();
            })();
       
    }else {
        console.log('use "class=map-responsive" to use map module')
    } 
    
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
	})

    const displayInfo = document.getElementById('toggleClickDisplay')
    const openInfoDisplay = document.getElementById("info-display");
    const arrowDisplay = document.getElementById('arrow-open-display');
    if(displayInfo){
        const openClick = () => {
            if(!openInfoDisplay.classList.contains('scrollAnimation')){
                openInfoDisplay.classList.add('scrollAnimation');
                arrowDisplay.classList.add('arrow-rotate');
                
            } else if(openInfoDisplay.classList.contains('scrollAnimation')){
                openInfoDisplay.classList.remove('scrollAnimation');
                arrowDisplay.classList.remove('arrow-rotate');
               
            }
        }
        displayInfo.addEventListener('click', openClick)
    }
    

    nav.navIcon.addEventListener('click', nav.openNavMobile);
    document.addEventListener('mouseup', nav.closeNavMobile);
    nav.clickInfo.addEventListener('click', nav.openClick);
    
    
    
   
})();