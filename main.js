// define variables
var hamburger = document.getElementById("hamburger");
var menu = document.querySelector(".menu");

var body = document.querySelector("body");
var menuClassList = menu.classList;
var clickedHamburger = false;
var menuIsOpen = isMenuOpen();

// add listener for hamburger menu icon
hamburger.addEventListener("click", function() {

    if (!menuIsOpen) {
        menuIsOpen = true;
    } else {
        menuIsOpen = false;
    }

    // reset status booleans to intelligently
    // handle dropdown menu behavior
    menu.classList.toggle("hidden");
    clickedHamburger = true;
});

// add listener for entire body to close
// dropdown menu if it's open
body.addEventListener("click", function() {

    if (isMenuOpen() && !clickedHamburger) {
        menu.classList.add("hidden");
        menuIsOpen = false;
    }

    clickedHamburger = false;
});

// function to check whether the menu is open
function isMenuOpen () {
    funcMenuIsOpen = true;

    menuClassList.forEach(function (currentClass) {
        if (currentClass === "hidden") {
            funcMenuIsOpen = false;
        }
    });

    return funcMenuIsOpen;
}