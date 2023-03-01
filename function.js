function enableDarkMode() {
  let main_body = document.body;
  main_body.classList.toggle("DarkMode");
}

function scrollElement(){
  var element = document.getElementById(nav);
  element.scrollTo();
};

document.getElementById("contactar");

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


