const botaoEntrar = document.querySelector('.botao-entrar');

function login() {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
}

botaoEntrar.addEventListener('click', login);
