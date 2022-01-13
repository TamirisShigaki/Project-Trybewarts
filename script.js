//!login

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

//! Botão enviar

function habilitarBotao() {
  if (checkAgreement.checked) {
    botaoSubmit.removeAttribute('disabled');
  } else {
    botaoSubmit.setAttribute('disabled', '');
  }
}

//! Contador

const contadorInicial = contadorLetras.innerText;
function contador() {
  contadorLetras.innerText = contadorInicial-textArea.value.length;

}

//! Substituindo informações do Forms

  const form = document.createElement('form');
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house');
  const familia = document.querySelector('#familiares');
  const materias = document.querySelector('#lista-conteudos');
  const avaliacao = document.querySelector('#avaliacao');
  const observacoes = document.querySelector('#textarea').value;

function formulario (event) {
  event.preventDefault();
  let array = []
  for (let i =0; i < 7; i += 1) {
    array[i] = document.createElement('div')
}

}

botaoSubmit.addEventListener('click', formulario);
textArea.addEventListener('keyup', contador);
checkAgreement.addEventListener('click', habilitarBotao);
botaoEntrar.addEventListener('click', login);