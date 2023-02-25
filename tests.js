let elem = document.body.querySelectorAll('.div');
elem.onmouseover = function () {
    elem.style.color = "red";
};
elem.onmouseleave = function () {
    elem.style.color = "white";
}