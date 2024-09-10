const scrollButton = document.getElementById('scrollButton');
const movieScroll = document.getElementById('movieScroll');
let isScrolled = false; // Track scroll state

scrollButton.addEventListener('click', () => {
    if (!isScrolled) {
        
        movieScroll.scrollBy({
            top: 0,
            left: 500, 
            behavior: 'smooth'
        });
        scrollButton.textContent = "<-"; 
    } else {
        movieScroll.scrollBy({
            top: 0,
            left: -500, 
            behavior: 'smooth'
        });
        scrollButton.textContent = ">"; 
    }
    isScrolled = !isScrolled; 
});