const imagemJanela = document.getElementById('imagem-janela');
function fecharJanela () {
  imagemJanela.src = 'assets/img/janelafechada.jpg';
}
function abrirJanela() {
  imagemJanela.src = 'assets/img/janelaaberta.png';
}
function quebrarJanela() {
  imagemJanela.src = 'assets/img/janelaquebrada.png';
}
imagemJanela.addEventListener('mouseenter', abrirJanela);
imagemJanela.addEventListener('mouseleave', fecharJanela);
imagemJanela.addEventListener('click', quebrarJanela);
