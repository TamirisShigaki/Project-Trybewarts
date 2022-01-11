window.onload = function () {
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;
  let botaoEntrar = document.querySelector(".botao-entrar");

  function login() {
    if (email === "tryber@teste.com" && senha === 123456) {
      alert("Olá, Tryber!");
    } else {
      alert("Email ou senha inválidos.");
    }
  }
  login();

  botaoEntrar.addEventListener("click", login);
};
