function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    /* let text=x.toLowerCase(); */
    if (x == "No te rindas") {
      alert("¡Respuesta correcta! ¡Felicidades!");      
      return true;
    }
    else (x != "No te rindas"); {
        alert("Respuesta incorrecta. Prueba otra vez.");
        return false;
    }
  } 