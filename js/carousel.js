const images = [
  "assets/breno1.jpg",
  "assets/breno2.jpg",
  "assets/breno3.jpg",
  "assets/breno11.jpg",
  "assets/breno12.jpg",
  "assets/breno13.jpg",
  "assets/breno14.jpg",
  "assets/breno15.jpg",
  "assets/breno16.jpg",
  "assets/breno17.jpg",
  "assets/breno18.jpg",
  "assets/breno19.jpg",
  "assets/breno7.jpg",
  "assets/breno8.jpg",
  "assets/breno9.jpg",
  "assets/breno10.jpg",
  "assets/breno4.jpg",
  "assets/breno5.jpg",
  "assets/breno6.jpg",
];

let currentIndex = 0;

const carouselImage = document.getElementById("carousel-image");

// Alterna a imagem do carrossel a cada 3 segundos
const interval = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  carouselImage.src = images[currentIndex];
}, 1500);