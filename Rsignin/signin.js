const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("signin");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(email.value);
  fetch("http://localhost:8080/Rsignin", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const comparison = data.find((ele) => ele.email === email.value);
      console.log(comparison);
      if (
        comparison.email === email.value &&
        comparison.password === password.value
      ) {
        alert("Logged in successfully");
        localStorage.setItem("token", JSON.stringify(Date.now()));
        localStorage.setItem("id", JSON.stringify(comparison.id));
        window.location.href = "../RForm/RForm.html";
      } else {
        alert("Incorrect Email or Password");
      }
    });
});
