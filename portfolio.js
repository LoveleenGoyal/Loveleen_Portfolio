window.onload = function () {
    var preloader = document.getElementById("preloader");
    var mainContent = document.getElementById("main-content");

    preloader.style.display = "block";
    setTimeout(function () {
        preloader.style.display = "none";
        mainContent.style.display = "block";
    }, 2000);
};



document.addEventListener("DOMContentLoaded", function () {
    // var typed = new Typed(".typing", {
    //     strings: ["Web Developer", "Web Designer", "Graphic Designer"],
    //     typeSpeed: 90,
    //     backSpeed: 100,
    //     loop: true
    // });
    var navListVisible = false;
    document.getElementById("menu-btn").addEventListener("click", function () {

        var navList = document.getElementById("nav-list");
        navList.classList.toggle("menu-active");
        if (!navListVisible) {
            navList.style.display = "block";
        } else {
            navList.style.display = "none";
        }
        navListVisible = !navListVisible;
    });

    window.addEventListener("resize", function () {
        var navList = document.getElementById("nav-list");
        var screenWidth = window.innerWidth;

        if (screenWidth > 1050) {
            navList.style.display = "flex";
            navList.classList.remove("menu-active");
        } else {
            if (navListVisible) {
                navList.style.display = "none";
                navListVisible = false;
            }
        }
    });

    const themeBtn = document.getElementById("theme-btn");
    const body = document.body;
    const themeIcon = themeBtn.querySelector("i");

    themeBtn.addEventListener("click", function () {
        body.classList.toggle("dark-theme");
        if (body.classList.contains("dark-theme")) {
            themeIcon.classList.remove("ri-moon-line");
            themeIcon.classList.add("ri-sun-fill");
        } else {
            themeIcon.classList.remove("ri-sun-fill");
            themeIcon.classList.add("ri-moon-line");
        }
    });

});

function showHiddenPara() {
    var hiddenPara = document.body.getElementsByClassName("hidden-para");
    var readMoreBtn = document.getElementById("read-more-btn");
    for (var i = 0; i < hiddenPara.length; i++) {
        if (hiddenPara[i].style.display === "none") {
            hiddenPara[i].style.display = "block";
            readMoreBtn.innerText = "Read Less";
        } else {
            hiddenPara[i].style.display = "none";
            readMoreBtn.innerText = "Read More";
        }
    }

}

document.addEventListener("DOMContentLoaded", function () {
    const skillsBars = document.querySelectorAll('.skills-percentage');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.8  // Adjust this threshold value as needed
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.skillWidth;
            }
        });
    }, observerOptions);

    skillsBars.forEach(bar => {
        bar.dataset.skillWidth = bar.style.width;
        bar.style.width = '0';
        observer.observe(bar);
    });
});

document.querySelector("#arrow-icon1").addEventListener("click", function () {
    scrollAndToggle('left');
});

document.querySelector("#arrow-icon2").addEventListener("click", function () {
    scrollAndToggle('right');
});

function scrollAndToggle(direction) {
    var galleryContainer = document.getElementById("gallery-container");
    var leftImages = document.querySelector(".left-images");
    var rightImages = document.querySelector(".right-images");

    if (direction === "left") {
        galleryContainer.scrollLeft -= 400;
        leftImages.classList.remove("hidden");
        rightImages.classList.add("hidden");
    } else if (direction === "right") {
        galleryContainer.scrollLeft += 400;
        rightImages.classList.remove("hidden");
        leftImages.classList.add("hidden");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const serviceLinks = document.querySelectorAll(".service-box a.more");
    const popups = document.querySelectorAll(".popup");

    serviceLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            popups[index].style.display = "flex";
        });
    });

    const closeButtons = document.querySelectorAll(".popup .close-popup");
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".popup").style.display = "none";
        });
    });
});

var nameInput = document.querySelector('.contact-input[placeholder="Name"]');
var emailInput = document.querySelector('.contact-input[placeholder="Email"]');
var subjectInput = document.querySelector('.contact-input[placeholder="Subject"]');
var messageInput = document.querySelector('textarea[placeholder="Message"]');
document.querySelector("#send-msg-btn").addEventListener("click", function (event) {
    event.preventDefault();

    if (nameInput.value.length > 0 && emailInput.value.length > 0 && subjectInput.value.length > 0 && messageInput.value.length > 0) {

        var popup = document.getElementById("popup-message");
        popup.style.display = "flex";

        document.getElementById("close-popup").addEventListener("click", function () {
            popup.style.display = "none";
        });

        document.getElementById("contact-form").reset();
    }
    else {
        alert("Please fill in all fields.");
    }
});

