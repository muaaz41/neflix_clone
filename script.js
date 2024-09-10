document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('movieScroll');
    const scrollAmount = 500;

    document.getElementById('scrollButton').addEventListener('click', () => {
        scrollContainer.scrollBy({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    document.getElementById('scrollButton1').addEventListener('click', () => {
        scrollContainer.scrollBy({
            top: 0,
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
});