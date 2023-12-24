document.addEventListener("DOMContentLoaded",function(){
    var navToggle = document.querySelector('.fa-bars');
    var navBar = document.querySelector('nav');

    navToggle.addEventListener('click', function(){
         navBar.classList.toggle('active');//color changing

        navToggle.classList.toggle('fa-bars');
        navToggle.classList.toggle('fa-xmark');
    });
});

