try {
  console.log("Abans");

  let opcio = prompt("Escriu 1 per provocar un error de codi (o qualsevol altra cosa per error d'opció):");

  if (opcio === "1") {
    
    console.log(variableInexistent);
  } else {
   
    throw new Error("Opció incorrecta! Només s'accepta el número 1.");
  }

  console.log("Això no es mostrarà mai");

} catch (error) {
  
  console.error("Error: " + error.message);

  
  alert("Atenció! Hi ha hagut un problema: " + error.message);
}