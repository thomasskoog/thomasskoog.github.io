/**
 * Created by Thomas on 19/05/2015.
 */
document.getElementById("articleOm").style.display = "none";
document.getElementById("articlePortfolio").style.display = "";
document.getElementById("articleKontakt").style.display = "none";

document.getElementsByClassName("buttonNav")[0].addEventListener("click", function(){
    document.getElementById("articleOm").style.display = "";
    document.getElementById("articlePortfolio").style.display = "none";
    document.getElementById("articleKontakt").style.display = "none";
    document.getElementById("codeImg").style.display = "none";
});

document.getElementsByClassName("buttonNav")[1].addEventListener("click", function(){
    document.getElementById("articleOm").style.display = "none";
    document.getElementById("articlePortfolio").style.display = "";
    document.getElementById("articleKontakt").style.display = "none";
    document.getElementById("codeImg").style.display = "none";
});

document.getElementsByClassName("buttonNav")[2].addEventListener("click", function(){
    document.getElementById("articleOm").style.display = "none";
    document.getElementById("articlePortfolio").style.display = "none";
    document.getElementById("articleKontakt").style.display = "";
    document.getElementById("codeImg").style.display = "none";
});