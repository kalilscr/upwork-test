const quantityInput = document.getElementById('quantity');
const itemListContainer = document.getElementById('item-list');

quantityInput.addEventListener('input', updateItemList);

function updateItemList() {
    const quantity = parseInt(quantityInput.value) || 1;
    itemListContainer.innerHTML = '';

    for (let i = 1; i <= quantity; i++) {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';

        const circleElement = document.createElement('div');
        circleElement.className = 'circle';
        circleElement.textContent = `${i}`;

        itemElement.appendChild(circleElement);
        itemListContainer.appendChild(itemElement);
    }
}

updateItemList();