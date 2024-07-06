let allBoldItems;

function getBoldItems() {
    allBoldItems = document.querySelectorAll('#paragraph strong');
}

function highlight() {
    allBoldItems.forEach(item => {
        item.style.color = 'blue';
    });
}

function returnItemsToDefault() {
    allBoldItems.forEach(item => {
        item.style.color = 'black';
    });
}

getBoldItems();

document.getElementById('paragraph').addEventListener('mouseover', highlight);
document.getElementById('paragraph').addEventListener('mouseout', returnItemsToDefault);