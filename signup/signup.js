const email = document.getElementById("email");
const mob = document.getElementById("mob");
const uname = document.getElementById("name");
const pass = document.getElementById("password");
const Conf_pass = document.getElementById("Conf_password");
const button = document.getElementById("signup");

button.addEventListener("click", () => {
    const dataobj = {
        email: email.value,
        mob: mob.value,
        name: uname.value,
        password: pass.value,
        Conf_password: Conf_pass.value,
    };
    fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataobj),
    })
    .then((res) => res.json())
    .then((data) => {
        alert("Account created successfully!");
        window.location.href = "../signin/signin.html";
    });
});