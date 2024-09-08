console.log('Olá, mundo!');

// Função para realizar a pesquisa
function realizarPesquisa() {
    
    var searchQuery = document.querySelector('input[type="text"]').value.toLowerCase();
    var items = document.querySelectorAll('.item-resultado');
    var resultadosDiv = document.querySelector('.resultados-pesquisa');
    var mensagemNoResultado = document.getElementById('nenhum-resultado');

    // Verifica se o campo de pesquisa está vazio
    if (searchQuery === '') {
        items.forEach(function(item) {
            item.style.display = 'none'; // Esconde todos os itens se a pesquisa estiver vazia
        });
        mensagemNoResultado.style.display = 'none'; // Esconde a mensagem de nenhum resultado
        return;
    }

    var encontrouResultado = false;

    items.forEach(function(item) {
        var characterName = item.getAttribute('data-name').toLowerCase();
        
        if (characterName.includes(searchQuery)) {
            item.style.display = 'block'; // Mostra o item se houver correspondência
            encontrouResultado = true;
        } else {
            item.style.display = 'none'; // Esconde o item se não houver correspondência
        }
    });

    // Mostra a mensagem se não encontrou resultados
    if (!encontrouResultado) {
        mensagemNoResultado.style.display = 'block';
    } else {
        mensagemNoResultado.style.display = 'none'; // Esconde a mensagem se encontrou resultados
    }
}

// Cria a mensagem de nenhum resultado encontrado
function criarMensagemNenhumResultado() {
    var mensagemDiv = document.createElement('div');
    mensagemDiv.id = 'nenhum-resultado';
    mensagemDiv.textContent = 'Nenhum resultado encontrado para sua pesquisa. 🙁';
    mensagemDiv.style.display = 'none'; // Inicialmente escondido
    mensagemDiv.style.color = 'rgb(255 255 255 / 82%)'; // Cor do texto
    mensagemDiv.style.textAlign = 'center'; // Alinha o texto ao centro
    mensagemDiv.style.marginTop = '-15rem'; // Espaçamento acima
    mensagemDiv.style.fontSize = '1.2rem'; // Tamanho da fonte
    mensagemDiv.style.fontFamily = 'inter';// Fonte
    document.querySelector('.resultados-pesquisa').appendChild(mensagemDiv);
}

// Adiciona a mensagem ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    criarMensagemNenhumResultado();
});

// Função para lidar com eventos de pesquisa
function handleSearchEvent() {
    realizarPesquisa();
}

// Evento de clique no botão de pesquisa
document.querySelector('button').addEventListener('click', handleSearchEvent);

// Evento de pressionamento da tecla "Enter"
document.querySelector('input[type="text"]').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleSearchEvent();
    }
});

// Evento de mudança no campo de pesquisa para ocultar resultados quando o campo estiver vazio
document.querySelector('input[type="text"]').addEventListener('input', function() {
    if (this.value === '') {
        realizarPesquisa(); // Chama a função para esconder resultados se o campo estiver vazio
    }
});
