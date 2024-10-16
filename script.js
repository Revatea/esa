const scrollText = document.getElementById('scroll-text');
const containerHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const translateX = (scrollPosition / containerHeight) * 100; // Move to left
    const translateY = (scrollPosition / containerHeight) * 100; // Move up

    scrollText.style.transform = `translate(-${translateX}vw, -${translateY}vh)`;