function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (weight && height) {
    const bmi = weight / (height * height);
    document.getElementById("result").style.color = "black";
    document.getElementById(
      "result"
    ).textContent = `Tu índice de masa corporal es: ${bmi.toFixed(2)}`;
  } else {
    document.getElementById("result").style.color = "red";
    document.getElementById("result").textContent =
      "Por favor, introduce tu peso y altura";
  }
}
