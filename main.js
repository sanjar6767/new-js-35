let login = document.getElementById("login")
let password = document.getElementById("password")
let btn = document.getElementById("btn")

let logins = {
    login:"sanjar",
    password:"0000"
}

btn.addEventListener("click",()=>{
    if(login.value === logins.login  && password.value === logins.password){
        window.location.href = "student.html"
    }
    else{
        alert("bu notog'ri")
    }
})