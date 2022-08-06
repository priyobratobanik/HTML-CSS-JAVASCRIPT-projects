var arr = JSON.parse(localStorage.getItem('usersign')) || [];

function usersign(a, b, c, d) {
    this.name = a;
    this.contact = b;
    this.email = c;
    this.password = d;
};
var denger = document.querySelector("#denger");
denger.style.display = 'none';

function Signup(e) {
    e.preventDefault();
    let form = document.querySelector('#formid');
    let name = form.name.value;
    let number = form.number.value;
    let email = form.email.value;
    let password = form.password.value;
    var nameset = new usersign(name, number, email, password);
    if (name == "" || number == '' || email == '' || password == '') {
        denger.style.display = 'block';
    } else {
        denger.style.display = 'none';
        arr.push(nameset);
        localStorage.setItem('usersign', JSON.stringify(arr));
        window.location.href = "login.html";
    }

}