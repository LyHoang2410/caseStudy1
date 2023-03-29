class Accounts {
    id
    username
    password
    phoneNumber
    email

    constructor(id, username, password, phoneNumber, email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
let account = new Accounts("1994", "admin", "123abc", "0978331094", "lyhoan@gmail.com")
let array = [account]
function checkIn(username, password) {
    for (let i = 0; i < array.length; i++) {
        if (username === array[i].username && password === array[i].password) {
            return true;
        }
    }
    return false
}

function logIn() {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    if (username === "" || password === "") {
        alert("Chưa nhập gì!!")
    } else {
        let result = checkIn(username, password);
        if (result === true) {
            alert("Đăng nhập thành công!!")
        } else {
            alert("Đăng nhập thất bại!!")
        }
    }
}

function register() {
    let id = document.getElementById("id").value;
    let username = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let phoneNumber = document.getElementById("phone").value;
    let email = document.getElementById("mail").value;
    let account1 = new Accounts(id, username, password, phoneNumber, email);
    array.push(account1);
    alert("Đăng ký thành công!!")
    window.location.href = "LogIn.html"
}

function haveUser() {
    window.location.href = ""
}

function notUser() {
    window.document.location.href = ""
}


