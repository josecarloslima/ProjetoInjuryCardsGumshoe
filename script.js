// script.js
import cards from './cartas.js';

let currentCardIndex = 0;
let filteredCards = [];

// Função para embaralhar e sortear uma carta
function shuffleAndDraw() {
    currentCardIndex = Math.floor(Math.random() * cards.length);
    displayCard(cards[currentCardIndex]);
}

// Função para exibir a carta
function displayCard(card) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = `
    <h3 class="card-name">${card.name}</h3>
    <p class="card-type">${card.type}</p>
    <p class="card-vinculo">${card.vinculo}</p>
    <p class="card-text">${card.text}</p>
    <p class="card-tag">Tags: ${card.tags.join(', ')}</p>
    `;
}

// Exibição inicial de uma carta
shuffleAndDraw();

// Adicionar ouvintes de eventos apenas uma vez
document.querySelector('button[data-action="shuffle"]').addEventListener('click', shuffleAndDraw);
document.querySelector('button[data-action="search"]').addEventListener('click', searchCard);
document.querySelector('button[data-action="filterByType"]').addEventListener('click', () => filterBy('type'));
document.querySelector('button[data-action="filterByTag"]').addEventListener('click', () => filterBy('tags'));

// Função para buscar carta por nome, tipo ou tag
function searchCard() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const foundCard = cards.find(card => card.name.toLowerCase() === searchInput || card.type.toLowerCase() === searchInput || card.tags.some(tag => tag.toLowerCase() === searchInput));

    if (foundCard) {
        displayCard(foundCard);
    } else {
        alert('Carta não encontrada.');
    }
}

// Função para filtrar cartas por tipo ou tag
function filterBy(filterType) {
    const uniqueValues = [...new Set(cards.flatMap(card => card[filterType]))];
    const selectedValues = prompt(`Selecione um ou mais valores para filtrar (${filterType}): ${uniqueValues.join(', ')}`).split(',');

    if (selectedValues.length > 0) {
        filteredCards = cards.filter(card => {
            if (filterType === 'tags') {
                return selectedValues.some(selectedValue => card[filterType].some(tag => tag.toLowerCase().trim() === selectedValue.toLowerCase().trim()));
            } else {
                return selectedValues.some(selectedValue => card[filterType].toLowerCase().trim() === selectedValue.toLowerCase().trim());
            }
        });

        if (filteredCards.length > 0) {
            // Exibir as cartas filtradas em uma tabela abaixo do botão de filtro
            displayFilteredCards(filteredCards);
            // Exibir a primeira carta filtrada
            currentCardIndex = 0;
            displayCard(filteredCards[currentCardIndex]);
        } else {
            alert('Nenhuma carta encontrada com o valor selecionado.');
        }
    }
}


// Função para exibir as cartas filtradas em uma tabela
function displayFilteredCards(cards) {
    const tableContainer = document.getElementById('filteredTable');
    tableContainer.innerHTML = ''; // Limpar conteúdo anterior

    const table = document.createElement('table');
    const headerRow = table.insertRow(0);

    // Adicionar cabeçalho da tabela
    Object.keys(cards[0]).forEach(key => {
        const headerCell = document.createElement('th');
        headerCell.textContent = key;
        headerRow.appendChild(headerCell);
    });

    // Adicionar linhas de dados à tabela
    cards.forEach(card => {
        const row = table.insertRow(-1);

        Object.values(card).forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
    });

    tableContainer.appendChild(table);
}
