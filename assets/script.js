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

// Déclaration des variables arrow left et arrow right

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dots = document.querySelectorAll(".dot");

// Sélection des bullets points

let currentSlide = 0;

// Event Listeners sur les flèches et défilement infini

arrowLeft.addEventListener("click", function () {
console.log("flèche gauche");
currentSlide--;
if (currentSlide < 0) {
	currentSlide = dots.length - 1;
}
updateBulletPoint();
updateSlideContent();
});

arrowRight.addEventListener("click", function () {
	console.log("flèche droite");
	currentSlide++;
	if (currentSlide >= dots.length) {
		currentSlide = 0;
	}
	updateBulletPoint();
	updateSlideContent();
	});



