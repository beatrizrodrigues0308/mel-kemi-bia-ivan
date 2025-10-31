function somar() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("resultado").textContent = "Por favor, digite dois números válidos!";
  } else {
    const soma = num1 + num2;
    document.getElementById("resultado").textContent = `A soma entre ${num1} e ${num2} é igual a ${soma}.`;
  }
}
