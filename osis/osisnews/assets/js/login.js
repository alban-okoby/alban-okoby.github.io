
let modal = document.getElementById
('user');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}