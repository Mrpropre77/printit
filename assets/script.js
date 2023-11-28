const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des flèches, des images et des points

let currentIndex = 0;

const aLeft = document.querySelector(".arrow_left");
const aRight = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

// Ajout des Event Listeners

// Event Listener Gauche
aLeft.addEventListener("click", () => {
	currentIndex--;
	if(currentIndex < 0){
		currentIndex = slides.length - 1;
	}
	updateSlider();
});

// Event Listener Droite
aRight.addEventListener("click", () => {
	currentIndex++;
	if(currentIndex >= slides.length){
		currentIndex = 0;
	}
	updateSlider();
})

// Modification des Slides

function updateSlider() {
	
// Slide/TagLine
bannerImg.src = './assets/images/slideshow/' + slides[currentIndex].image;
tagLine.innerHTML = slides[currentIndex].tagLine;

// Dots sélectionnées
const allDots = document.querySelectorAll('.dot');
allDots.forEach((dot, index) => {
	dot.classList.remove('dot_selected');
	if (index === currentIndex) {
	  dot.classList.add('dot_selected');
	}
  });
}

// Initialisation html et dots

for (let i = 0; i < slides.length; i++) {
	dots.innerHTML += '<span id="dot' + i + '" class="dot" title="Image ' + (i + 1) + '"></span>';
  }
  
updateSlider();
