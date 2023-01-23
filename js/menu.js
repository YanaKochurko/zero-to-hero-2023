const menuButton = document.querySelector('#navButton');
const menu = document.querySelector('#navMenu');
const closedMenuPosition = '-300px';
const openedMenuPosition = '0px';

menuButton.addEventListener('click', e => {
    menu.style.right = openedMenuPosition;
    menuButton.style.display = 'none';
})

document.addEventListener('click', e => {
    if (e.clientX < document.body.clientWidth - menu.clientWidth && menu.style.right === openedMenuPosition) {
        menu.style.right = closedMenuPosition;
        menuButton.style.display = 'block';
    }
})
