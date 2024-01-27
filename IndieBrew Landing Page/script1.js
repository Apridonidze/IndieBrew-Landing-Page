let myBtn = document.querySelector(".toggle-hamburger");


myBtn.onclick = function(){
    let toggleDiv = document.querySelector(".toggle-bar")
    toggleDiv.style.display = "block";
}


let closeBtn = document.querySelector("#toggleClose");

closeBtn.onclick = function() {
    let toggleDiv = document.querySelector(".toggle-bar")
    toggleDiv.style.display = "none";
}