// import * as  data from './dummy.json'
// const {locations} = data;
// fetch("./dummy.json").then(res => res.json()).then(data => {
//     console.log(JSON.parse(data));
//   })
  // export async function get() {
  //   try {
  //     const res = await fetch(`./dummy.json`);
  //     const json = await res.json();
  //     console.log('json', json)
  //   } catch (err) {
  //     console.error('err', err);
  //   }
  
  // }
var data;
export const mainContainer = document.getElementById("datalistOptions");
export const inputMap = document.getElementById('exampleDataList');
export const nombreLocation = document.getElementById('nombre-location');
export const phoneLocation = document.getElementById('phone-location');
export const phoneNumber = document.getElementById('phoneNumber');
export const addressLocation = document.getElementById('address-location');
export const addressLink = document.getElementById('address-link');
export const mobileLink = document.getElementById('mobile-link');
export const mapLocation = document.getElementById('map-location');
export const monHour= document.getElementById('mon');
export const tueHour = document.getElementById('tue');
export const wedHour = document.getElementById('wed');
export const thuHour = document.getElementById('thu');
export const friHour = document.getElementById('fri');
export const satHour = document.getElementById('sat');
export const sunHour = document.getElementById('sun');
function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          callback(xobj.responseText);
        }
  };
  xobj.open('GET', '/js/modules/dummy.json', true);
  xobj.send();  
}
export function init() {
  loadJSON(function(response) {
     var actual_JSON = JSON.parse(response);
    //  console.log(actual_JSON, 'esto es data');
     data = actual_JSON
    for(const x of data){
      let div = document.createElement("option");
    div.innerText = x.name;
    div.setAttribute('value', x.name);
    document.getElementById("datalistOptions").appendChild(div);
    }
  });
 
  mainContainer.addEventListener('change', function(){
    let ver = data.find(x => x.name === this.value)
    nombreLocation.innerText = ver.name;
    phoneLocation.innerText = ver.telephone;
    // console.log(ver.telephone, 'este es el telefono')
    phoneNumber.setAttribute('href', 'tel:'+ ver.telephoneLink);
    addressLocation.innerText = ver.location;
    addressLink.setAttribute('href', ver.mapLink);
    mobileLink.setAttribute('href', ver.mapLink);
    mapLocation.setAttribute('src', ver.map);
    monHour.innerText = ver.time.mon
    tueHour.innerText = ver.time.tue
    wedHour.innerText = ver.time.wed
    thuHour.innerText = ver.time.thu
    friHour.innerText = ver.time.fri
    satHour.innerText = ver.time.sat
    sunHour.innerText = ver.time.sun

    
})  

 }

export const btns = document.getElementsByClassName('card-pin');
export function mapPin(){
    for (let i = 0; i < btns.length; i++) {
        $('.card-pin').click(function(){
            let setMap = $(this).attr('data-set');
            let map = document.getElementById('map')
            $('#map').attr('src', setMap);
            map.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
            let current = document.getElementsByClassName("active-pin");
            current[0].className = current[0].className.replace("active-pin", "");
            this.className += " active-pin";
        
        })
        }
}





  
  
