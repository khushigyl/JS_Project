const uname = document.getElementById("name");
const email = document.getElementById("email");
const mob = document.getElementById("number");
const gender = document.getElementById("gender");
const dob = document.getElementById("dob");
const bg = document.getElementById("bg");
const hf = document.getElementById("hospital");
const ward = document.getElementById("ward");
const record = document.getElementById("record");
const register = document.getElementById("sub");

register.addEventListener("click", (e) => {
  e.preventDefault();
  const dataobj = {
    name: uname.value,
    email: email.value,
    phone: mob.value,
    gender: gender.value,
    dob: dob.value,
    bg: bg.value,
    hospital: hf.value,
    ward: ward.value,
    record: record.value,
  };

  fetch("http://localhost:8080/reciever", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Thankyou, You Have Successfully Registered !!");
    //   window.location.replace(`./index1.html`);
      window.location.href = "../Home/index.html";
    });
});
