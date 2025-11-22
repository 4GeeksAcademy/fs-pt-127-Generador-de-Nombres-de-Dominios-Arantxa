import "bootstrap";
import "./style.css";



window.onload = function () {
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const ext = ['.com', '.net', '.us', '.io', '.etc'];

  // la funcion flecha es lo mismo que poner (function(pronoun){})
  pronoun.map((pronoun) => {
    adj.map((adjective) => {
      noun.map((noun) => {
        ext.map((extension) => {
          //los ${} tienen que ir dentro de `` no ' ni "" porque tiene que ir dentro de una cadena string 
          document.getElementById("dominio").innerHTML += `<span class="spanDominio m-1"> ${pronoun}${adjective}${noun}${extension} </span>`;
        });
      });
    });
  });
};

