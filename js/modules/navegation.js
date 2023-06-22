export const clickInfo = document.getElementById('toggleClick');
export const openInfo = document.getElementById("info");
export const openInfoDisplay = document.getElementById("info-display");
export const arrow = document.getElementById('arrow-open');
export const arrowDisplay = document.getElementById('arrow-open-display');
export const openMobile = document.getElementById('nav-mobile');
export const bars = document.getElementById('open');
export const close = document.getElementById('close');
export const navIcon = document.getElementById('nav-icon');
export let openMenu = false;

export const openClick = () => {
	if(!openInfo.classList.contains('scrollAnimation')){
		openInfo.classList.add('scrollAnimation');
		arrow.classList.add('arrow-rotate');
		setTimeout(function(){navIcon.classList.add('hidden') }, 200);
	} else if(openInfo.classList.contains('scrollAnimation')){
		openInfo.classList.remove('scrollAnimation');
		arrow.classList.remove('arrow-rotate');
		setTimeout(function(){navIcon.classList.remove('hidden') }, 500);
	}
}
// const openInfoBar = clickInfo.addEventListener('click', () =>{
// 	openClick()
// })

export const openNavMobile =() =>{
	openMobile.classList.add("mobileMenu");
	navIcon.classList.add("hidden");
	openMenu = true;
}

export const closeNavMobile = (event) => {
	if(clickInfo.contains(event.target) && openMenu == true){
		openMobile.classList.remove("mobileMenu");
		setTimeout(function(){navIcon.classList.add('hidden')}, 500);
		openMenu = false;
	} else if (!openMobile.contains(event.target) && openMenu === true){
		openMobile.classList.remove("mobileMenu");
		setTimeout(function(){navIcon.classList.remove('hidden') }, 500);
		openMenu = false;
	}
};
export const verConsole = function(){
    console.log('esto es para ver si sale')
}
