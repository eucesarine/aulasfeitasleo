const botaoMudar = document.getElementById('botao-mudar');
const descricoes = document.getElementsByClassName("descricao")
const botaoAdicionar = document.getElementById('botao-adicionar')


botaoMudar.addEventListener('click', function(){
descricoes[0].textContent = 'Páragrafo modificado'

});

botaoAdicionar.addEventListener('click, function'(){ 
    const novoParagrafo = document.createElement('p')
    novoParagrafo.className = 'novoP'
    novoParagrafo.textContent = 'Novo parágrafo criado'
    document.body.appendChild (novoParagrafo)


    
})
   
botaoRemover.addEventListener('click, function (){ 
    paragrafo.remove()
})

