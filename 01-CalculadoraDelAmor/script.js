function calculateLove() {
  const name1 = document.getElementById("name1").value;
  const name2 = document.getElementById("name2").value;
  console.log(name1, name2);

  if (name1 && name2) {
    const hash = (name1 + name2)
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const lovePocentage = hash % 101;
    console.log(lovePocentage);
    document.getElementById("result").style.color = "green";
    document.getElementById(
      "result"
    ).innerText = `El amor entre ${name1} y ${name2} es del ${lovePocentage}%`;
  } else {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").innerText =
      "Por favor, introduce ambos nombres";
  }
}
