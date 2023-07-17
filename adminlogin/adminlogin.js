const name = document.getElementById("name");
const password = document.getElementById("password");
const button = document.getElementById("signin");

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:8080/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const comparison = data.find((ele) => ele.name === "ADMIN");
      console.log(comparison);
      if (
        comparison.name === "ADMIN" &&
        comparison.password === password.value
      ) {
        alert("Logged in successfully");
        localStorage.setItem("token", JSON.stringify(Date.now()));
        localStorage.setItem("id", JSON.stringify(comparison.id));
        window.location.href = "../thnku.html";
      } else {
        alert("Incorrect input");
      }
    });
});
