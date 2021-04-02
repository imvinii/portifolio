var hamburger = document.querySelector(".hamburger")
hamburger.addEventListener("click", function(){
    var sidebar = document.querySelector(".container").classList.toggle("show-menu");
});