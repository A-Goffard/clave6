function validateForm() {
  let x = document.forms["myForm"]["fname"].value.toLowerCase();

  if (x === "no te rindas") {
      alert("¡Respuesta correcta! ¡Felicidades!");      
      return true;
  } else {
      alert("Respuesta incorrecta. Prueba otra vez.");
      return false;
  }
} 
