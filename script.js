// Exemplo de dados das cartas
const cards = [
    { name: 'Carta 1', type: 'Tipo A', text: 'Texto da Carta 1', tags: ['Tag1', 'Tag2'] },
    { name: 'Carta 2', type: 'Tipo B', text: 'Texto da Carta 2', tags: ['Tag2', 'Tag3'] },
    // Adicione mais cartas conforme necessário
];

let currentCardIndex = 0;

// Função para embaralhar e sortear uma carta
function shuffleAndDraw() {
    currentCardIndex = Math.floor(Math.random() * cards.length);
    displayCard(cards[currentCardIndex]);
}

// Função para exibir a carta
function displayCard(card) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = `<h3>${card.name}</h3><p>${card.type}</p><p>${card.text}</p><p>Tags: ${card.tags.join(', ')}</p>`;
}

// Função para buscar carta por nome, tipo ou tag
function searchCard() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const foundCard = cards.find(card => card.name.toLowerCase() === searchInput || card.type.toLowerCase() === searchInput || card.tags.includes(searchInput));
    
    if (foundCard) {
        displayCard(foundCard);
    } else {
        alert('Carta não encontrada.');
    }
}

// Função para filtrar cartas por nome, tipo ou tag
function filterBy(filterType) {
    const uniqueValues = [...new Set(cards.map(card => card[filterType]))];
    const selectedValue = prompt(`Selecione um valor para filtrar (${filterType}): ${uniqueValues.join(', ')}`);
    
    if (selectedValue) {
        const filteredCards = cards.filter(card => card[filterType] === selectedValue);
        
        if (filteredCards.length > 0) {
            currentCardIndex = 0;
            displayCard(filteredCards[currentCardIndex]);
        } else {
            alert('Nenhuma carta encontrada com o valor selecionado.');
        }
    }
}

// Exibição inicial de uma carta
shuffleAndDraw();
