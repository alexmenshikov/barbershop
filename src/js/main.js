$(document).ready(() => {
	// === mobile menu ===
	$(".burger").click(() => {
		$(".menu").addClass("menu__mobile");
	});

	$(".close").click(() => {
		$(".menu").removeClass("menu__mobile");
	});

	$(".menu__item__link").click(() => {
		$(".menu").removeClass("menu__mobile");
	});

	$(".parallax-window").parallax({
		naturalWidth: 1920,
		imageSrc: "images/bg-instagram.jpg",
	});
});
