function fecharDiv() {
  const div = document.querySelector('.texto_container_dir');
  if (div) {
      div.style.display = 'none';
  }
}

function abrirDiv() {
  const div = document.querySelector('.texto_container_dir');
  if (div) {
      div.style.display = 'block';
  }
}

function abrirOcorrencia() {
  const div = document.querySelector('.ocorrenciaDiv');
  if (div) {
      div.style.display = 'block';
  }
}

function fecharCard() {
  const div = document.querySelector('.card1');
  if (div) {
      div.style.display = 'none';
  }
}

function fecharOcorrencia() {
  const div = document.querySelector('.ocorrenciaDiv');
  if (div) {
      div.style.display = 'none';
  }
}

function fecharCardOcorrencia() {
  const div = document.querySelector('.cardOcorrencia');
  if (div) {
      div.style.display = 'none';
  }
}