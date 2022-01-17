//! login

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
  contadorLetras.innerText = contadorInicial - textArea.value.length;
}

//! Substituindo informações do Forms

const embaixoBotao = document.querySelector('#evaluation-form');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const casa = document.querySelector('#house');
const familia = document.querySelector('#familiares');
const materias = document.querySelector('#lista-conteudos');
const avaliacao = document.querySelector('#avaliacao');
const observacoes = document.querySelector('#textarea');

const divNome = document.createElement('div');
const divEmail = document.createElement('div');
const divCasa = document.createElement('div');
const divFamilia = document.createElement('div');
const divMaterias = document.createElement('div');
const divAvaliacao = document.createElement('div');
const divObservacoes = document.createElement('div');

function checkedFamilia() {
  for (let i = 1; i < familia.children.length; i += 1) {
    if (familia.children[i].children[0].checked) {
      divFamilia.innerText = `Família: ${familia.children[i].children[0].value}`;
    }
  }
}

function checkedMateria() {
  divMaterias.innerText = 'Matérias: ';
  for (let i = 1; i < materias.children.length; i += 1) {
    if (materias.children[i].children[0].checked) {
      const materiaAdicional = materias.children[i].children[0].value;
      divMaterias.innerText += `${materiaAdicional}, `;
    }
  }
}

function checkedAvaliacao() {
  for (let i = 1; i < avaliacao.children.length; i += 1) {
    if (avaliacao.children[i].children[0].checked) {
      divAvaliacao.innerText = `Avaliação: ${avaliacao.children[i].children[0].value}`;
    }
  }
}

function removeDiv() {
  const formDiv = document.querySelectorAll('#evaluation-form div');
  for (let index = 0; index < formDiv.length; index += 1) {
    formDiv[index].remove();
  }
}

function formulario(event) {
  event.preventDefault();
  removeDiv();

  divNome.innerText = `Nome: ${nome.value} ${sobrenome.value}`;
  divEmail.innerText = `Email: ${email.value}`;
  divCasa.innerText = `Casa: ${casa.value}`;
  checkedFamilia();
  checkedMateria();
  checkedAvaliacao();
  divObservacoes.innerText = `Observações: ${observacoes.value}`;
  embaixoBotao.appendChild(divNome);
  embaixoBotao.appendChild(divEmail);
  embaixoBotao.appendChild(divCasa);
  embaixoBotao.appendChild(divFamilia);
  embaixoBotao.appendChild(divMaterias);
  embaixoBotao.appendChild(divAvaliacao);
  embaixoBotao.appendChild(divObservacoes);
}

botaoSubmit.addEventListener('click', formulario);
textArea.addEventListener('keyup', contador);
checkAgreement.addEventListener('click', habilitarBotao);
botaoEntrar.addEventListener('click', login);
