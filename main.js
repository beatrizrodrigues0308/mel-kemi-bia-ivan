document.getElementById("botaoSomar").addEventListener("click", function() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  // Converte os valores para número (caso venham como string)
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  // Verifica se os dois valores são válidos
  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("resultado").textContent = "⚠️ Por favor, digite dois números válidos!";
  } else {
    const soma = n1 + n2;
    document.getElementById("resultado").textContent = `A soma entre ${n1} e ${n2} é igual a ${soma}.`;
  }
});
