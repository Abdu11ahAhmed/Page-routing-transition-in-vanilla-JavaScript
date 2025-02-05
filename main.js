const transition = document.querySelector(".transition");
const nextPage = document.getElementById("nextPage");

let currect = false;
nextPage.onclick = function (event) {
    transition.style.opacity = "1";
    transition.style.transition = ".5s ease";
    setTimeout(function () {
        currect = true;
        window.open("./nextPage.html", "_self");
    }, 500);
    if (currect === false) {
        event.preventDefault();
    }
};

const lastPage = document.getElementById("lastPage");

lastPage.onclick = function (event) {
    transition.style.opacity = "1";
    transition.style.transition = ".5s ease";
    setTimeout(function () {
        currect = true;
        window.open("./index.html", "_self");
    }, 500);
    if (currect === false) {
        event.preventDefault();
    }
};
