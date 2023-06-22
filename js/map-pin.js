const btns = document.getElementsByClassName('card-pin');
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
const data = [
    {
    "name": "PRITS",
    "location": "360 Calle Ángel Buonomo, San Juan, 00918",
    "telephone": "1(787)555-5555",
    "telephoneLink": "7875555555",
    "mapLink": "https://www.google.com/maps?ll=18.42934,-66.070348&z=19&t=m&hl=en&gl=PR&mapclient=embed&cid=2119778429514620257",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.6121964192349!2d-66.07032834605393!3d18.429057029043108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0369e5c771c68f%3A0x1d6af74025c11d61!2sPuerto%20Rico%20Innovation%20and%20Technology%20Service!5e0!3m2!1sen!2spr!4v1623245580556!5m2!1sen!2spr",
    "time": {
        "mon":"8:00am - 5:00pm",
        "tue":"8:00am - 5:00pm",
        "wed":"8:00am - 5:00pm",
        "thu":"8:00am - 5:00pm",
        "fri":"8:00am - 5:00pm",
        "sat":"cerrado",
        "sun":"cerrado",
    }},
    {
    "name": "Educación",
    "location": "C. Federico Acosta, San Juan, 00918",
    "telephone": "1(787)555-0001",
    "telephoneLink": "7875550001",
    "mapLink": "https://www.google.com/maps/place/Departamento+de+Educacion+Nueva+Sede/@18.428973,-66.072189,19z/data=!4m5!3m4!1s0x0:0xda7478e8d4b5f44e!8m2!3d18.4289732!4d-66.0721892?hl=en",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658.3494972377041!2d-66.07210953381038!3d18.42882351512186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0369e903c26895%3A0xda7478e8d4b5f44e!2sDepartamento%20de%20Educacion%20Nueva%20Sede!5e0!3m2!1sen!2spr!4v1623270975312!5m2!1sen!2spr",
    "time": {
        "mon":"8:00am - 4:30pm",
        "tue":"8:00am - 4:30pm",
        "wed":"8:00am - 4:30pm",
        "thu":"8:00am - 4:30pm",
        "fri":"8:00am - 4:30pm",
        "sat":"cerrado",
        "sun":"cerrado",
    }},
    {
    "name": "El Capitolio",
    "location": "San Juan, 00902",
    "telephone": "1(787)555-2345",
    "telephoneLink": "7875552345",
    "mapLink": "https://www.google.com/maps?ll=18.466807,-66.105949&z=16&t=m&hl=en&gl=PR&mapclient=embed&cid=13111287742570157387",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.3715291735302!2d-66.10814338467395!3d18.466822875634616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036ec333197bad%3A0xb5f4a6bc3bd3d54b!2sEl%20Capitolio!5e0!3m2!1sen!2spr!4v1623271289595!5m2!1sen!2spr",
    "time": {
        "mon":"8:00am - 5:00pm",
        "tue":"8:00am - 5:00pm",
        "wed":"8:00am - 5:00pm",
        "thu":"8:00am - 5:00pm",
        "fri":"8:00am - 5:00pm",
        "sat":"8:00am - 5:00pm",
        "sun":"8:00am - 3:00pm",
    }},
    {
    "name": "Coliseo de Puerto Rico",
    "location": "500 Av. Arterial B, San Juan, 00918",
    "telephone": "1(787)555-1234",
    "telephoneLink": "7875551234",
    "mapLink": "https://www.google.com/maps?ll=18.427731,-66.061387&z=16&t=m&hl=en&gl=PR&mapclient=embed&cid=17341793768587481298",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.232802260279!2d-66.06357548467426!3d18.427736076815453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0368bbabb32157%3A0xf0aa6d8d40bd50d2!2sJos%C3%A9%20Miguel%20Agrelot%20Coliseum%20of%20Puerto%20Rico!5e0!3m2!1sen!2spr!4v1623271424946!5m2!1sen!2spr",
    "time": {
        "mon":"12:00pm - 7:00pm",
        "tue":"12:00pm - 7:00pm",
        "wed":"12:00pm - 7:00pm",
        "thu":"12:00pm - 7:00pm",
        "fri":"12:00pm - 7:00pm",
        "sat":"12:00pm - 7:00pm",
        "sun":"cerrado",
    }},
    {
    "name": "Castillo San Felipe del Morro",
    "location": "501 Calle Norzagaray, San Juan, 00901",
    "telephone": "1(787)555-8376",
    "telephoneLink": "7875558376",
    "mapLink": "https://www.google.com/maps?ll=18.470935,-66.123506&z=17&t=m&hl=en&gl=PR&mapclient=embed&cid=7638177855580823331",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2270.1466864716185!2d-66.12264743321003!3d18.469916816016564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c036ebdd9c262b9%3A0x6a00424a75265f23!2sCastillo%20San%20Felipe%20del%20Morro!5e0!3m2!1sen!2spr!4v1623271562226!5m2!1sen!2spr",
    "time": {
        "mon":"9:00am - 4:00pm",
        "tue":"9:00am - 4:00pm",
        "wed":"9:00am - 4:00pm",
        "thu":"9:00am - 4:00pm",
        "fri":"9:00am - 4:00pm",
        "sat":"cerrado",
        "sun":"cerrado",
    }},
    {
    "name": "Parque Luis Muñoz Marín",
    "location": "Expreso Las Américas, San Juan, 00920",
    "telephone": "1(787)555-1000",
    "telephoneLink": "7875551000",
    "mapLink": "https://www.google.com/maps?ll=18.407461,-66.073062&z=16&t=m&hl=en&gl=PR&mapclient=embed&cid=15474145187596130553",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.890300632886!2d-66.0748452559222!3d18.41072982363688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0368ed772dc3fd%3A0xd6bf3510057cd8f9!2sParque%20Luis%20Mu%C3%B1oz%20Mar%C3%ADn!5e0!3m2!1sen!2spr!4v1623271727281!5m2!1sen!2spr",
    "time": {
        "mon":"8:00am - 10:00pm",
        "tue":"8:00am - 10:00pm",
        "wed":"8:00am - 10:00pm",
        "thu":"8:00am - 10:00pm",
        "fri":"8:00am - 10:00pm",
        "sat":"8:00am - 10:00pm",
        "sun":"8:00am - 10:00pm",
    }},
    {
    "name": "Luis Muñoz Marín International Airport",
    "location": "Av. Aeropuerto, Carolina, 00979",
    "telephone": "1(787)555-1100",
    "telephoneLink": "7875551100",
    "mapLink": "https://www.google.com/maps/place/Luis+Mu%C3%B1oz+Mar%C3%ADn+International+Airport/@18.437345,-66.004076,14z/data=!4m5!3m4!1s0x0:0x157ef258ddd32b70!8m2!3d18.4373446!4d-66.0040763?hl=en",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14048.81684070253!2d-66.00399748651898!3d18.436190395266546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c0365d810d79007%3A0x157ef258ddd32b70!2sLuis%20Mu%C3%B1oz%20Mar%C3%ADn%20International%20Airport!5e0!3m2!1sen!2spr!4v1623272029691!5m2!1sen!2spr",
    "time": {
        "mon":"24 hrs",
        "tue":"24 hrs",
        "wed":"24 hrs",
        "thu":"24 hrs",
        "fri":"24 hrs",
        "sat":"24 hrs",
        "sun":"24 hrs",
    }},
    {
    "name": "Fortaleza",
    "location": "63 Calle de la Fortaleza, San Juan, 00901",
    "telephone": "1(787)555-1235",
    "telephoneLink": "7875551235",
    "mapLink": "https://www.google.com/maps/place/La+Fortaleza/@18.464106,-66.11923,17z/data=!4m5!3m4!1s0x0:0xc7550b3e9fae087c!8m2!3d18.4641766!4d-66.118819?hl=en",
    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1892.207682284114!2d-66.11741544180745!3d18.46483544098575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc7550b3e9fae087c!2sLa%20Fortaleza!5e0!3m2!1sen!2spr!4v1623271093468!5m2!1sen!2spr",
    "time": {
        "mon":"8:35am - 5:35pm",
        "tue":"8:35am - 5:35pm",
        "wed":"8:35am - 5:35pm",
        "thu":"8:35am - 5:35pm",
        "fri":"8:35am - 5:35pm",
        "sat":"cerrado",
        "sun":"cerrado",
    }}
  
  
]
const mainContainer = document.getElementById("datalistOptions");
const inputMap = document.getElementById('exampleDataList');
const nombreLocation = document.getElementById('nombre-location');
const phoneLocation = document.getElementById('phone-location');
const phoneNumber = document.getElementById('phoneNumber');
const addressLocation = document.getElementById('address-location');
const addressLink = document.getElementById('address-link');
const mobileLink = document.getElementById('mobile-link');
const mapLocation = document.getElementById('map-location');
const monHour= document.getElementById('mon');
const tueHour = document.getElementById('tue');
const wedHour = document.getElementById('wed');
const thuHour = document.getElementById('thu');
const friHour = document.getElementById('fri');
const satHour = document.getElementById('sat');
const sunHour = document.getElementById('sun');
if(mainContainer){
function appendData() {
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement("option");
      div.innerText = data[i].name;
      div.setAttribute('value', data[i].name);
      document.getElementById("datalistOptions").appendChild(div);
    }
  }
  appendData()
  mainContainer.addEventListener('change', function(){
    let ver = data.find(x => x.name === this.value)
    nombreLocation.innerText = ver.name;
    phoneLocation.innerText = ver.telephone;
    console.log(ver.telephone)
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
