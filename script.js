/* OWL open and config*/

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    items: 1
})

/* TAB SERVICES */

function openServices(evt, service) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(service).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();

/* TAB PRICES */

function openPrice(evt, price) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent-price");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink-price");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(price).style.display = "flex";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
function autoClick() {
    document.querySelector(".defaultOpen-service").click();
    document.querySelector(".defaultOpen-price").click();
}

autoClick();

/************* NAV SCROLL AND ANIMATE *****************/

// $('#jumbotron').on('click', function () {
//     $('body, html').animate({
//         scrollTop: $('.about').offset().top
//     })
// })


function displayDate() {
    window.scroll({
        top: 1000,
        left: 0,
        behavior: 'smooth'
    })
}

function scrollFunction() {
    document.querySelector('.about').scrollIntoView({
        behavior: 'smooth'
    });
}
document.querySelector('#about').addEventListener("click", scrollFunction)