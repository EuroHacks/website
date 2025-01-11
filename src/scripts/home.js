const carousel = document.querySelector('.carousel');
		
const carouselImages = [...carousel.children];
carouselImages.forEach((img) => {
    const clone = img.cloneNode(true);
    carousel.appendChild(clone);
});