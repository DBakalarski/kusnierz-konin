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

function newSelector(liElement) {

    document.querySelector(`.${liElement}`).onclick = function () {
        this.classList.add("active")
        scrollFunction(`${liElement}`);
    }
}

function scrollFunction(sectionElement) {
    document.querySelector(`#${sectionElement}`).scrollIntoView({
        behavior: 'smooth'
    });
}

var liElements = document.querySelectorAll("nav li");
var arrayScrollElements = [];
for (var i = 0; i < liElements.length; i++) {
    var arrayScrollElement = liElements[i].className;
    arrayScrollElements.push(arrayScrollElement);
}
arrayScrollElements.forEach(newSelector);

function addActive() {
    var halfWindowHeight = window.outerHeight / 2;

    const hightScroll = window.scrollY;
    const hightJumbotron = document.querySelector("#jumbotronToScroll").offsetTop;
    const hightAbout = document.querySelector("#aboutToScroll").offsetTop - halfWindowHeight;
    const hightServices = document.querySelector("#servicesToScroll").offsetTop - halfWindowHeight;
    const hightGallery = document.querySelector("#galleryToScroll").offsetTop - halfWindowHeight;
    const hightPrice = document.querySelector("#priceToScroll").offsetTop - halfWindowHeight;
    const hightContact = document.querySelector("#contactToScroll").offsetTop - halfWindowHeight;

    for (var i = 0; i < liElements.length; i++) {
        liElements[i].classList.remove("active");

    }


    if (hightScroll < hightAbout) {
        document.querySelector(".jumbotronToScroll").classList.add("active")
    } else if (hightScroll >= hightAbout && hightScroll < hightServices)
        document.querySelector(".aboutToScroll").classList.add("active")
    else if (hightScroll >= hightServices && hightScroll < hightGallery)
        document.querySelector(".servicesToScroll").classList.add("active")
    else if (hightScroll >= hightGallery && hightScroll < hightPrice)
        document.querySelector(".galleryToScroll").classList.add("active")
    else if (hightScroll >= hightPrice && hightScroll < hightContact)
        document.querySelector(".priceToScroll").classList.add("active")
    else
        document.querySelector(".contactToScroll").classList.add("active")
}


window.addEventListener("scroll", addActive);