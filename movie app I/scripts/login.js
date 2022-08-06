var registeruser = JSON.parse(localStorage.getItem('usersign')) || [];
var denger = document.querySelector("#denger");
denger.style.display = 'none';

function loginuser() {
    event.preventDefault();
    let form = document.querySelector("#loginuser");
    let email = form.email.value;
    let password = form.password.value;


    registeruser.map(function(el, i) {
        if (email === el.email && password === el.password) {
            window.location.href = 'index.html';
        } else {
            denger.style.display = 'block';
        }
    });
}