/********************************************
 *    función de validación
 */

function validacion(event){
    event.preventDefault(); // Evita el envío predeterminado del formulario
    let correcto = true;
    let nameUser = document.getElementById('nameUser').value; //Getter
    let Ape1User = document.getElementById('Ape1User').value; //Getter
    let email = document.getElementById('Email').value; //Getter
    let normalBooking = document.getElementById('malaga'); //Getter
    let birthdayBooking = document.getElementById('almeria'); //Getter
    let otherBooking = document.getElementById('granada'); //Getter
    let terminos = document.getElementById('terminos'); //Getter

  //Si hay un campo vacio, con solo espacios, que tenga digitos o con menos de dos caracteres, indicara un mensaje de error.
  if(nameUser == ""){
    document.getElementById('nameUserHelp').style.visibility ="visible";
    correcto = false;
  }

  if(Ape1User == ""){
    document.getElementById('Ape1UserHelp').style.visibility ="visible";
    correcto = false;
  }

  if (!malaga.checked && !almeria.checked && !granada.checked) {
    document.getElementById('inputRadioHelp').style.visibility = "visible";
    correcto = false;
  }

  if (email == "" || !/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('EmailHelp').style.visibility = "visible";
    correcto = false;

  }

  if (!terminos.checked) {
    document.getElementById('terminosHelp').style.visibility = "visible";
    correcto = false;
  }

  return correcto;
}

//Una vez el valor es cambiado, se resetean los valores y desaparece el mensaje y el borde.
function resetear(id) {
  document.getElementById(id + 'Help').style.visibility="hidden";
}