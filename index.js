function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const button = document.getElementById('changeColorBtn');
button.addEventListener('click', () => {
    const card = document.querySelector('.card');
    card.style.backgroundColor = getRandomColor();
});
