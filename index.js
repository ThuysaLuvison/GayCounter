let valor = Number(localStorage.getItem("contador")) || 0;
const contador = document.getElementById("contador");
const btnAumentar = document.getElementById("aumentar");
const btnDiminuir = document.getElementById("diminuir");
const btnZerar = document.getElementById("zerar");
const entradaNumero = document.getElementById("entradaNumero");
const btnDefinirNumero = document.getElementById("btnDefinirNumero");

btnAumentar.addEventListener("click", () => {
  valor++;
  atualizarContador();
});
btnDiminuir.addEventListener("click", () => {
  valor--;
  atualizarContador();
});
btnZerar.addEventListener("click", () => {
  valor = 0;
  atualizarContador();
});
btnDefinirNumero.addEventListener("click", () => {
  const valorDigitado = Number(entradaNumero.value);

  if (valor === 0) {
    valor = valorDigitado;
    atualizarContador();
    entradaNumero.value = "";
  } 
  else {
    alert(
      "ATENÇÃO!!! O contador não está zerado. Zere-o para definir um novo valor."
    );
  }
});
function atualizarContador() {
  contador.textContent = valor;

  contador.classList.remove("positivo", "negativo", "neutro");

  if (valor > 0) {
    contador.classList.add("positivo");
  } else if (valor < 0) {
    contador.classList.add("negativo");
  } else {
    contador.classList.add("neutro");
  }

  localStorage.setItem("contador", valor);

  contador.classList.add("animar");
  setTimeout(() => {
    contador.classList.remove("animar");
  }, 200);
}
atualizarContador();
