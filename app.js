const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let count = images.length;
let index = 0;

nextBtn.addEventListener("click", () => {
	if (index < count - 1) {
	index += 1;
	let size = index * (-100);
		slides.style.transform = `translateX(${size}%)`
	}
})

prevBtn.addEventListener("click", () => {
	if (index > 0) {
	index -= 1;
	let size = index * (-100);
	slides.style.transform = `translateX(${size}%)`
	}
})