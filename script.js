const botaoEntrar = document.querySelector('.botao-entrar');
const botaoSubmit = document.querySelector('#submit-btn');
const checkAgreement = document.querySelector('#agreement');
function login() {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
function habilitarBotao() {
  if (checkAgreement.checked) {
    botaoSubmit.removeAttribute('disabled');
  } else {
    botaoSubmit.setAttribute('disabled', '');
  }
}
checkAgreement.addEventListener('click', habilitarBotao);
botaoEntrar.addEventListener('click', login);
