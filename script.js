const scrollContainer = document.querySelector('.scroll-container');
const scrollAmount = 500; // Adjust this value to change scroll amount

document.getElementById('scrollButton1').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

document.getElementById('scrollButton').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});