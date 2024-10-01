const imagemprincipal = document.getElementById('imagem-principal');

const miniaturas = document.querySelectorAll('.miniatura');

miniaturas.forEach(miniatura => {
miniatura.addEventListener('click', function(){
    const novaimagem = this.getAttribute('data-imagem');

    imagemprincipal.src = novaimagem;

});
});