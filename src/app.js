import "bootstrap";
import "./style.css";



window.onload = function () {
   const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const ext=['.com','.net','.us','.io','.etc'];

  for (let i =0;i<pronoun.length;i++){
    for(let j=0;j<adj.length;j++){
      for(let k=0;k<noun.length;k++){
        for(let h=0;h<ext.length;h++){
          //Añadimos los array dentro del p y creamos un span dentro de p para darle estilo 
           document.getElementById("dominio").innerHTML+=`<span class="spanDominio m-1">`+pronoun[i]+adj[j]+noun[k]+ext[h]+`</span>`;


     
        }
      }
    }
  }
 };

//