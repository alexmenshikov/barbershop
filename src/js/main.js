$(document).ready(() => {
	$(".category").click((e) => {
		let currentElement = $(e.target);
		$(".products-container").hide();
		let id = currentElement.data("id");
		$("#" + id).show();

		$(".category").removeClass("active");
		currentElement.addClass("active");

		$("#" + id + " .products").slick("refresh");
		$("#" + id + " .products-nav").slick("refresh");
	});

	// === mobile menu ===
	$("#burger").click(() => {
		$("#header").toggleClass("menu-open");
	});

	$("#header #menu ul li").click(() => {
		$("#header").removeClass("menu-open");
	});
});
