import "bootstrap";
import "./style.css";



window.onload = function () {

   const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = [ 'letes', 'percom'];
  const ext = ['.com', '.es', '.net', '.etc'];
  // la funcion flecha es lo mismo que poner (function(pronoun){})

  pronoun.map((pronoun) => {
    adj.map((adjective) => {
      noun.map((noun) => {
        ext.map((extension) => {
          //Quita el primer caracter, el putno y el noun .endswidth te compara si la palabra termina igual
          let coincide = noun.endsWith(extension.slice(1));
          let nombreFinal;

          if (coincide) {
            //Si coincide le quitamos el largo osea los 3 ultimos y asi ponermos la extension el .es 
            nombreFinal = noun.slice(0, -extension.slice(1).length);
          } else {
            nombreFinal = noun;
          }
          //los ${} tienen que ir dentro de `` no ' ni "" porque tiene que ir dentro de una cadena string 

          document.getElementById("dominio").innerHTML +=
            `<span class="spanDominio m-1">${pronoun}${adjective}${nombreFinal}${extension}</span>`;
        });
      });
    });
  });
};

