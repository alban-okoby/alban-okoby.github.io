
let signInModal = document.getElementById
('user-sign-in');

let signUpModal = document.getElementById('user-sign-up');

window.onclick = function (event) {
    if (event.target == signInModal || event.target == signUpModal) {
        signInModal.style.display = "none";
        signUpModal.style.display = "none";
    }
}
