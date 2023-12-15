// Dados das cartas
const cards = [
    { name: 'Náusea', type: 'menor', vinculo: 'Cambaleante (maior)', text: 'Impede uso de pushes enquanto estiver no local. Descartada quando sair do local.', tags: ['não letal', 'shock'] },
    { name: 'Cambaleante', type: 'maior', vinculo: 'náusea (menor)', text: 'Impede o uso de pushes enquanto estiver no local. +2 na dificuldade de qualquer teste devido a confusão. Descartada assim que chegar em terra firme.', tags: ['não letal', 'shock'] },
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
    cardContainer.innerHTML = `<h3>${card.name}</h3><p>${card.type}</p><p>${card.vinculo}</p><p>${card.text}</p><p>Tags: ${card.tags.join(', ')}</p>`;
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
