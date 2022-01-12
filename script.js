const botaoEntrar = document.querySelector('.botao-entrar');
const botaoSubmit = document.querySelector('#submit-btn');
const checkAgreement = document.querySelector('#agreement');
const contadorLetras = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');

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


const contadorInicial = contadorLetras.innerText;
function contador() {
  contadorLetras.innerText = contadorInicial-textArea.value.length;

}

textArea.addEventListener('keyup', contador);
checkAgreement.addEventListener('click', habilitarBotao);
botaoEntrar.addEventListener('click', login);
