
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementsByClassName("modal-wrapper")[0];

open.onclick = function () {
    modal.style.display = "flex";
};
close.onclick = function () {
    modal.style.display = "none";
};