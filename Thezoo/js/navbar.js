window.onclick = function(event) {
    var closed = document.getElementById("mySidenav");
    if (event.target === closed) {
        closed.style.width = "0"
    }
}

function openNav() {
    var nav, openIcon;
    nav = document.getElementById("mySidenav");
    nav.style.width = "260px"
}

function closeNav() {
    var nav, body, closed;
    nav = document.getElementById("mySidenav");
    closed = nav.style.width = "0";

}