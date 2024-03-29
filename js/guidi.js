/*!
 * GUIDI Utiliza la libreria de HTML/CSS/JS para su construcción
 * Necesario tener los documentos en tu proyecto para que funcionen
 * Bootstrap v5.0.0 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */

/*
  -----------------------------------------------------------------------------------------------------
  * Selectores de Elementos 
  -----------------------------------------------------------------------------------------------------
  */

const displayInfo = document.getElementById("toggleClickDisplay");
const openInfoDisplay = document.getElementById("info-display");
const arrowDisplay = document.getElementById("arrow-open-display");
const clickInfo = document.getElementById("toggleClick");
const openInfo = document.getElementById("info");
const arrow = document.getElementById("arrow-open");
const openMobile = document.getElementById("nav-mobile");
const bars = document.getElementById("open");
const close = document.getElementById("close");
const navIcon = document.getElementById("nav-icon");
let openMenu = false;
const cardInner = document.getElementsByClassName("card-front");
const closeFlip = document.getElementsByClassName("card-back-close");
const navFilter = document.getElementsByClassName("nav-filter");
const tabView = document.getElementsByClassName("tab-view");
var data;
const mainContainer = document.getElementById("datalistOptions");
const inputMap = document.getElementById("exampleDataList");
const nombreLocation = document.getElementById("nombre-location");
const phoneLocation = document.getElementById("phone-location");
const phoneNumber = document.getElementById("phoneNumber");
const addressLocation = document.getElementById("address-location");
const addressLink = document.getElementById("address-link");
const mobileLink = document.getElementById("mobile-link");
const mapLocation = document.getElementById("map-location");
const monHour = document.getElementById("mon");
const tueHour = document.getElementById("tue");
const wedHour = document.getElementById("wed");
const thuHour = document.getElementById("thu");
const friHour = document.getElementById("fri");
const satHour = document.getElementById("sat");
const sunHour = document.getElementById("sun");
const dropArea = document.querySelector(".drag-area"),
  dragText = document.getElementById("drag-info"),
  button = document.getElementById("upload-button"),
  input = document.getElementById("upload"),
  list = document.getElementById("subidos");
let filename;
let file;

/*
  -----------------------------------------------------------------------------------------------------
  * Funciones
  -----------------------------------------------------------------------------------------------------
  */
/*===========================================
    =            Navegación       =
    =============================================*/

const openClick = () => {
  if (!openInfo.classList.contains("scrollAnimation")) {
    openInfo.classList.add("scrollAnimation");
    arrow.classList.add("arrow-rotate");
    setTimeout(function () {
      navIcon.classList.add("hidden");
    }, 200);
  } else if (openInfo.classList.contains("scrollAnimation")) {
    openInfo.classList.remove("scrollAnimation");
    arrow.classList.remove("arrow-rotate");
    setTimeout(function () {
      navIcon.classList.remove("hidden");
    }, 500);
  }
};

const openNavMobile = () => {
  openMobile.classList.add("mobileMenu");
  navIcon.classList.add("hidden");
  openMenu = true;
};
/*
 * @param - event not target
 */
const closeNavMobile = (event) => {
  if (clickInfo.contains(event.target) && openMenu == true) {
    openMobile.classList.remove("mobileMenu");
    setTimeout(function () {
      navIcon.classList.add("hidden");
    }, 500);
    openMenu = false;
  } else if (!openMobile.contains(event.target) && openMenu === true) {
    openMobile.classList.remove("mobileMenu");
    setTimeout(function () {
      navIcon.classList.remove("hidden");
    }, 500);
    openMenu = false;
  }
};
/*==============================================================*/

/*===========================================
  =            Cartas       =
  =============================================*/

const cardOpen = function () {
  for (let i = 0; i < cardInner.length; i++) {
    cardInner[i].addEventListener("click", function () {
      const cardContainer = this.closest(".card-container");
      cardContainer.classList.add("is-flipped");
    });
  }
};

const cardClose = function () {
  for (let i = 0; i < closeFlip.length; i++) {
    closeFlip[i].addEventListener("click", function () {
      const cardContainer = this.closest(".card-container");
      cardContainer.classList.remove("is-flipped");
    });
  }
};
/*==============================================================*/

/*===========================================
   =            Filtro       =
  =============================================*/
const selectFilter = function () {
  $(".nav-filter").click(function () {
    let type = $(this).data("bs-target");
    if (type == "all") {
      $(".tab-view").fadeOut(0);
      $(".tab-view").fadeIn(500);
      $(".nav-filter").removeClass("active");
      $(this).addClass("active");
    } else {
      $(".tab-view").hide();
      $(".nav-filter").removeClass("active");
      $(this).addClass("active");
      $("#" + type + ".tab-view").fadeIn(500);
    }
  });
};
/*==============================================================*/

/*===========================================
   =            Forms      =
  =============================================*/

/*
 * Uso para todas las dinámicas de los inputs
 */
const viewForm = () => {
  $(".input").on("focusin", function () {
    $(this).parent().find(".label").addClass("active-label");
  });

  $(".input").on("focusout", function () {
    if (!this.value) {
      $(this).parent().find(".label").removeClass("active-label");
    }
  });
  $(".selection").on("focusin", function () {
    $(this).parent().find(".label").addClass("active-label");
  });

  $(".selection").on("focusout", function () {
    if (!this.value) {
      $(this).parent().find(".label").removeClass("active-label");
    }
  });
};
// const stepperTrue = $(".bs-stepper"),
//   stepperTrueVertical = $("#vertical");
// let stepper = new Stepper(stepperTrue[0], {
//   linear: true,
//   animation: true,
// });
// $(".btnNext").click(function () {
//   stepper.next();
// });
// $(".btnPrev").click(function () {
//   stepper.previous();
// });
// let stepper2 = new Stepper(stepperTrueVertical[0], {
//   animation: true,
// });
// $(".btnVerticalNext").click(function () {
//   stepper2.next();
// });
// $(".btnVerticalPrev").click(function () {
//   stepper2.previous();
// });

/*
 * Ejemplo de Contact Form
 */
$("#emailCheckSteps").hide();
$("#emailErrorSteps").hide();
// Validate Username
$("#namecheck").hide();
let usernameError = true;
$("#contact-name").keyup(function () {
  validateUsername();
});

function validateUsername() {
  let name = document.getElementById("contact-name");
  let usernameValue = $("#contact-name").val();
  if (usernameValue.length == "") {
    name.classList.add("is-invalid");
    $("#namecheck").show();
    usernameError = false;
    return false;
  } else {
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");
    $("#namecheck").hide();
  }
}
// Validate Email
$("#emailCheck").hide();
$("#emailError").hide();
let emailError = true;
let emailCheck = true;
$("#contact-email").keyup(function () {
  validateEmail();
});
const email = document.getElementById("contact-email");

function validateEmail() {
  let email = document.getElementById("contact-email");
  let useremailValue = $("#contact-email").val();
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let s = email.value;
  if (useremailValue.length == "") {
    email.classList.add("is-invalid");
    $("#emailCheck").show();
    $("#emailError").hide();
    emailCheck = false;
    return false;
  } else if (!regex.test(s)) {
    email.classList.add("is-invalid");
    $("#emailError").show();
    $("#emailCheck").hide();
  } else {
    email.classList.remove("is-invalid");
    email.classList.add("is-valid");
    $("#emailCheck").hide();
    $("#emailError").hide();
  }
}

$("#msgCheck").hide();
let messageError = true;
$("#contact-mensaje").keyup(function () {
  validateMessage();
});
function validateMessage() {
  let message = document.getElementById("contact-mensaje");
  let messageValue = $("#contact-mensaje").val();
  if (messageValue.length == "") {
    message.classList.add("is-invalid");
    $("#msgCheck").show();
    messageError = false;
  } else {
    message.classList.remove("is-invalid");
    message.classList.add("is-valid");
    $("#msgCheck").hide();
    messageError = true;
  }
}
//Step Form

$("#nameStep").hide();
$("#lnameStep").hide();
$("#emailStepCheck").hide();
$("#emailStepError").hide();
let nameError = true;
let lnameError = true;
let emailStepError = true;
let emailStepCheck = true;
$("#next").prop("disabled", true);
$("#firstnameVertical,#lastnameVertical,#emailVertical").change(function () {
  if (validateStepName() && validateStepLastName() && validateStepEmail()) {
    console.log("valido");
    $("#next").removeClass("boton-disable");
    $("#next").prop("disabled", false);
  }
});
function clickNext() {
  $("#next").click(function () {
    alert("hey");
  });
}

function validateStepName() {
  let name = document.getElementById("firstnameVertical");
  let nameStep = $("#firstnameVertical").val();
  if (nameStep.length == "") {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
    $("#nameStep").show();
    nameError = false;
    return false;
  } else {
    name.classList.remove("is-invalid");
    name.classList.add("is-valid");
    $("#nameStep").hide();
    return true;
  }
}
function validateStepLastName() {
  let lname = document.getElementById("lastnameVertical");
  let lastnameStep = $("#lastnameVertical").val();
  if (lastnameStep.length == "") {
    lname.classList.add("is-invalid");
    lname.classList.remove("is-valid");
    $("#lnameStep").show();
    lnameError = false;
    return false;
  } else {
    lname.classList.remove("is-invalid");
    lname.classList.add("is-valid");
    $("#lnameStep").hide();
    return true;
  }
}
const emailStep = document.getElementById("emailVertical");

function validateStepEmail() {
  let emailStep = document.getElementById("emailVertical");
  let emailStepValue = $("#emailVertical").val();
  let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let s = emailStep.value;
  if (emailStepValue.length == "") {
    emailStep.classList.add("is-invalid");
    $("#emailStepCheck").show();
    $("#emailStepError").hide();
    emailStepCheck = false;
    return false;
  } else if (!regex.test(s)) {
    emailStepCheck = false;
    emailStep.classList.add("is-invalid");
    $("#emailStepError").show();
    $("#emailStepCheck").hide();
    return false;
  } else {
    emailStepCheck = true;
    emailStep.classList.add("is-valid");
    emailStep.classList.remove("is-invalid");
    $("#emailStepCheck").hide();
    $("#emailStepError").hide();
    return true;
  }
}

// PASO 2
$("#next2").prop("disabled", true);
$("#asunto,#mensajeVertical").keyup(function () {
  if (validateAsunto() && validateMensaje()) {
    console.log("valido");
    $("#next2").removeClass("boton-disable");
    $("#next2").prop("disabled", false);
  } else {
    console.log("no valido");
    $("#next2").addClass("boton-disable");
    $("#next2").prop("disabled", true);
  }
});
$("#asunto").blur(function () {
  validateAsunto();
});
$("#mensajeVertical").blur(function () {
  validateMensaje();
});
$("#asuntoStep").hide();
$("#mensajeStep").hide();
let asuntoError = true;
let mensajeError = true;
function validateAsunto() {
  let asunto = document.getElementById("asunto");
  let asuntoStep = $("#asunto").val();
  if (asuntoStep.length == "") {
    asunto.classList.add("is-invalid");
    asunto.classList.remove("is-valid");
    $("#asuntoStep").show();
    asuntoError = false;
    return false;
  } else {
    asunto.classList.remove("is-invalid");
    asunto.classList.add("is-valid");
    asuntoError = true;
    $("#asuntoStep").hide();
    return true;
  }
}
function validateMensaje() {
  let mensaje = document.getElementById("mensajeVertical");
  let mensajeStep = $("#mensajeVertical").val();
  if (mensajeStep.length == "") {
    mensaje.classList.add("is-invalid");
    mensaje.classList.remove("is-valid");
    $("#mensajeStep").show();
    mensajeError = false;
    return false;
  } else {
    mensaje.classList.remove("is-invalid");
    mensaje.classList.add("is-valid");
    mensajeError = true;
    $("#mensajeStep").hide();
    return true;
  }
}

// PASO 3
$("#checkStep").hide();
let checkError = true;
let checkedSometer = false;
function checkboxStep() {
  $("#checkboxStep").change(function () {
    // let asuntoStep = $('#checkboxStep').val();
    if ($(this).is(":checked")) {
      $("#someter").removeClass("boton-disable");
      $("#checkLabel").addClass("text-success");
      $("#checkLabel").removeClass("text-danger");
      $("#checkStep").hide();
      checkedSometer = true;
    }
  });
}

function someterForm() {
  $("#someter").click(function () {
    if (checkedSometer) {
      toastOpen();
      $(":input").val("");
      $(":input").removeClass("is-valid");
      stepper2.reset();
      $("#next").prop("disabled", true);
      $("#next2").prop("disabled", true);
      $("#next").addClass("boton-disable");
      $("#next2").addClass("boton-disable");
      $("#vertical").parent().find(".label").removeClass("active-label");
      $("#checkboxStep").prop("checked", false);
      $("#checkLabel").removeClass("text-success");
    } else {
      $("#checkLabel").addClass("text-danger");
      $("#checkStep").show();
    }
  });
}
// Toast
function toastOpen() {
  var toastElList = [].slice.call(document.querySelectorAll(".toast"));
  var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });

  toastList.forEach((toast) => toast.show());
}

/*==============================================================*/

/*===========================================
   =            Graficas     =
  =============================================*/
/*
 * Dependencia de graph.js file
 */
function graphs() {
  const options = {
    series: [121, 78, 621],
    chart: {
      height: 430,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 300,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#104842", "#9c3795", "#00b1df"],
    labels: ["Agencia de Gobierno", "Municipios", "Hospitalizados"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "top-left",
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  const chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  const optionsBar = {
    series: [
      {
        name: "San Juan",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Mayagüez",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Ponce",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "75%",
        endingShape: "rounded",
      },
    },
    colors: ["#104842", "#9c3795", "#00b1df"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };

  const chartBar = new ApexCharts(
    document.querySelector("#chartBar"),
    optionsBar
  );
  chartBar.render();

  var optionsLines = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 350,
      type: "line",

      zoom: {
        enabled: false,
      },
    },
    colors: ["#00b1df"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };

  var chartLines = new ApexCharts(
    document.querySelector("#chartLines"),
    optionsLines
  );
  chartLines.render();
}
/*==============================================================*/

/*===========================================
   =           Mapas     =
  =============================================*/

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.open("GET", "/js/modules/dummy.json", true);
  xobj.send();
}
function init() {
  loadJSON(function (response) {
    var actual_JSON = JSON.parse(response);
    //  console.log(actual_JSON, 'esto es data');
    data = actual_JSON;
    for (const x of data) {
      let div = document.createElement("option");
      div.innerText = x.name;
      div.setAttribute("value", x.name);
      document.getElementById("datalistOptions").appendChild(div);
    }
  });

  mainContainer.addEventListener("change", function () {
    let ver = data.find((x) => x.name === this.value);
    nombreLocation.innerText = ver.name;
    phoneLocation.innerText = ver.telephone;
    // console.log(ver.telephone, 'este es el telefono')
    phoneNumber.setAttribute("href", "tel:" + ver.telephoneLink);
    addressLocation.innerText = ver.location;
    addressLink.setAttribute("href", ver.mapLink);
    mobileLink.setAttribute("href", ver.mapLink);
    mapLocation.setAttribute("src", ver.map);
    monHour.innerText = ver.time.mon;
    tueHour.innerText = ver.time.tue;
    wedHour.innerText = ver.time.wed;
    thuHour.innerText = ver.time.thu;
    friHour.innerText = ver.time.fri;
    satHour.innerText = ver.time.sat;
    sunHour.innerText = ver.time.sun;
  });
}

const btns = document.getElementsByClassName("card-pin");
function mapPin() {
  for (let i = 0; i < btns.length; i++) {
    $(".card-pin").click(function () {
      let setMap = $(this).attr("data-set");
      let map = document.getElementById("map");
      $("#map").attr("src", setMap);
      map.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
      let current = document.getElementsByClassName("active-pin");
      current[0].className = current[0].className.replace("active-pin", "");
      this.className += " active-pin";
    });
  }
}
/*==============================================================*/

/*===========================================
   =           Upload Files     =
  =============================================*/

$("#upload-button").click(function () {
  input.click(); //if user click on the button then the input also clicked
});
if (input) {
  input.addEventListener("change", function () {
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = this.files[0];
    filename = file.name;
    dropArea.classList.add("active");
    showFile(); //calling function
  });
}

if (dropArea) {
  //If user Drag File Over DropArea
  dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //preventing from default behaviour
    dropArea.classList.add("active");
    dragText.textContent = "Soltar documento";
  });
  //If user leave dragged File from DropArea
  dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    dragText.textContent = "Colocar los documentos aquí o";
  });
  //If user drop File on DropArea
  dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //preventing from default behaviour
    //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    file = event.dataTransfer.files[0];
    filename = file.name;
    dragText.textContent = "Añadir documento o";
    showFile(); //calling function
  });
}

function showFile() {
  let fileType = file.type; //getting selected file type
  let validExtensions = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
    "video/mp4",
    ".csv",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
    "text/html",
  ]; //adding some valid image extensions in array
  if (validExtensions.includes(fileType)) {
    //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = () => {
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
      // let imgTag = `<img width="100" src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
      // dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
      function createMenuItem(name) {
        let li = document.createElement("li");
        li.innerHTML = `<button class="icon-sm" onclick="remove(this)" ><i class="fas fa-trash"></i></button><p class="file-item ml-2">${name}</p>`;
        // li.textContent = name;
        return li;
      }
      list.appendChild(createMenuItem(filename));
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Colocar los documentos aquí o";
  }
  console.log(file);
}
function remove(link) {
  link.parentNode.parentNode.removeChild(link.parentNode);
}
/*==============================================================*/

/*
  -----------------------------------------------------------------------------------------------------
  * Llamadas
  -----------------------------------------------------------------------------------------------------
  */

const filter = document.getElementsByClassName("filter");
const form = document.getElementsByClassName("input");
const map = document.getElementsByClassName("map-responsive");

/*===========================================
   =           Info Display     =
  =============================================*/
const openClickDisplay = () => {
  if (!openInfoDisplay.classList.contains("scrollAnimation")) {
    openInfoDisplay.classList.add("scrollAnimation");
    arrowDisplay.classList.add("arrow-rotate");
  } else if (openInfoDisplay.classList.contains("scrollAnimation")) {
    openInfoDisplay.classList.remove("scrollAnimation");
    arrowDisplay.classList.remove("arrow-rotate");
  }
};
if (displayInfo > 0) {
  displayInfo.addEventListener("click", openClickDisplay);
} else {
  console.log('use "class=card-flip" to use card-flip module');
}

/*==============================================================*/

/*===========================================
   =           Navegación e Info Call     =
  =============================================*/
navIcon.addEventListener("click", openNavMobile);
document.addEventListener("mouseup", closeNavMobile);
clickInfo.addEventListener("click", openClick);

/*==============================================================*/

/*===========================================
   =           Card Calls     =
  =============================================*/
const cards = document.getElementsByClassName("card-flip");
if (cards.length > 0) {
  (async function impCard() {
    cardOpen();
    cardClose();
  })();
} else {
  console.log('use "class=card-flip" to use card-flip module');
}
/*==============================================================*/

/*===========================================
   =           Graph Call     =
  =============================================*/
const graph = document.getElementsByClassName("graph");
if (graph.length > 0) {
  (async function impGraph() {
    graphs();
  })();
} else {
  console.log('use "class=graph" to use graph module');
}
/*==============================================================*/
/*===========================================
   =           Inputs call    =
  =============================================*/
viewForm();

/*==============================================================*/

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
