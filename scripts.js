/**
 * Created by Thomas on 19/05/2015.
 */

//Hoppa mellan sidinnehåll

document.addEventListener("click", function(e){
    var valueButton = e.target.className; //e.path[1].value;

   switch (valueButton){
       case "om":
           document.getElementById("articleOm").style.display = "";
           document.getElementById("articlePortfolio").style.display = "none";
           document.getElementById("articleKontakt").style.display = "none";
           break;
       case "port":
           document.getElementById("articleOm").style.display = "none";
           document.getElementById("articlePortfolio").style.display = "";
           document.getElementById("articleKontakt").style.display = "none";
           break;
       case "kontakt":
           document.getElementById("articleOm").style.display = "none";
           document.getElementById("articlePortfolio").style.display = "none";
           document.getElementById("articleKontakt").style.display = "";
           break;
   }
});

document.getElementById("articleOm").style.display = "none";
document.getElementById("articlePortfolio").style.display = "";
document.getElementById("articleKontakt").style.display = "none";
