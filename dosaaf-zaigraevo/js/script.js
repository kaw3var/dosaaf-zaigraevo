document.addEventListener("DOMContentLoaded", function() {
    const navBtn = document.querySelector('.nav__btn');
    const navHidden = document.querySelector('.nav__menu--hidden');
    var changeImgBtn = document.getElementById("changeImgBtn");
    var imgToChange = document.getElementById("imgToChange");

    navBtn.addEventListener('click', function() {
        if (navHidden.style.display === 'none' || navHidden.style.display === '') {
            navHidden.style.display = 'block';
            imgToChange.src = "img/cross.jpeg";
        } else {
            navHidden.style.display = 'none';
            imgToChange.src = "img/line-hidden.jpeg";
        }
    });
});
