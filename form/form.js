const uname = document.getElementById("name");
const email = document.getElementById("email");
const mob = document.getElementById("number");
const city = document.getElementById("city");
const gender = document.getElementById("gender");
const weight = document.getElementById("weight");
const dob = document.getElementById("dob");
const bg = document.getElementById("bg");
const donated = document.getElementById("donated");
const dis = document.getElementById("diseses");
const register = document.getElementById("Reg");

register.addEventListener("click", (e) => {
  e.preventDefault();
  const dataobj = {
    name: uname.value,
    email: email.value,
    phone: mob.value,
    city: city.value,
    gender: gender.value,
    weight: weight.values,
    dob: dob.value,
    bg: bg.value,
    donatebef: donated.value,
    disease: dis.value,
  };

  fetch("http://localhost:8080/donors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Thankyou, You Have successfully Registered !!");
    //   window.location.replace(`./index1.html`);
      window.location.href = "../home/index.html";
    });
});
