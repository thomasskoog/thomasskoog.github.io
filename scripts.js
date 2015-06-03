/**
 * Created by Thomas on 19/05/2015.
 */

//Hoppa mellan sidinnehåll

document.addEventListener("click", function(e){
   var valueButton = e.path[1].value;
   switch (valueButton){
       case 0:
           document.getElementById("articleOm").style.display = "";
           document.getElementById("articlePortfolio").style.display = "none";
           document.getElementById("articleKontakt").style.display = "none";
           break;
       case 1:
           document.getElementById("articleOm").style.display = "none";
           document.getElementById("articlePortfolio").style.display = "";
           document.getElementById("articleKontakt").style.display = "none";
           break;
       case 2:
           document.getElementById("articleOm").style.display = "none";
           document.getElementById("articlePortfolio").style.display = "none";
           document.getElementById("articleKontakt").style.display = "";
           break;
   }
});

document.getElementById("articleOm").style.display = "none";
document.getElementById("articlePortfolio").style.display = "";
document.getElementById("articleKontakt").style.display = "none";
