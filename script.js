const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");


menuButton.addEventListener("click", function(){
    navLinks.classList.toggle("show");
})

navLinks.forEach(function(link){
    link.addEventListener("click", function(){
        
        navLinks.forEach(function(navLink){
            navLink.classList.remove("active");

        });
        link.classList.add("active");


        navMenu.classList.remove("show");


    });
});

console.log(menuButton);
