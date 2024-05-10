const data = {
  name: "Oscar Garzón",
  description: "Programador en proceso de formación",
  email: "garzonoscar7@gmail.com",
  tel: "22345566",
};

function loadUserProfile(data) {
  document.getElementById("userName").textContent = data.name;
  document.getElementById("userDescription").textContent = data.description;
  document.getElementById("userEmail").textContent = data.email;
  document.getElementById("userTel").textContent = data.tel;
}

document.addEventListener("DOMContentLoaded", function () {
  loadUserProfile(data);
});
