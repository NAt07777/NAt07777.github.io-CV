//Activa el modo oscuro
function enableDarkMode() {
  let main_body = document.body;
  main_body.classList.toggle("DarkMode");
}
//Navbar responsive
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//Scroll hasta elemento seleccionado
function scrollElement(){
  var element = document.getElementById(nav);
  element.scrollTo();
};

document.getElementById("contactar");

//Validad email
const nombre = document.getElementById("name");
const apellido = document.getElementById("last_name");
const email = document.getElementById("mail");
const form = document.getElementById("form");
function ValidateEmail(mail) 
{
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("Ingresaste una dirección no válida!")
    return (false);
}

//Scroll arriba 

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; // para Safari
  document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE and Opera
}


