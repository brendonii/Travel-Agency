const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))


//
window.onscroll = () => {
	var nav = document.querySelector("header");

	if (window.pageYOffset > 0) {
		nav.classList.add("sticky");
	} else {
		nav.classList.remove("sticky");
	}
};


// 
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

function handleScrollNext(direction) {
	const cards = document.querySelector('.card-content')
	cards.scrollLeft = cards.scrollLeft += window.innerWidth / 1 > 100 ? window.innerWidth / 1 : window.innerWidth - 100
}

function handleScrollPrev(direction) {
	const cards = document.querySelector('.card-content')
	cards.scrollLeft = cards.scrollLeft -= window.innerWidth / 1 > 100 ? window.innerWidth / 1 : window.innerWidth - 100
}

next.addEventListener('click', handleScrollNext)
prev.addEventListener('click', handleScrollPrev)

