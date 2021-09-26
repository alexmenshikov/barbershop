$(document).ready(() => {
	// === mobile menu ===
	let menu = $(".menu");
	$(".burger").click(() => {
		menu.addClass("menu__mobile");
	});

	$(".close").click(() => {
		menu.removeClass("menu__mobile");
	});

	$(".menu__item__link").click(() => {
		menu.removeClass("menu__mobile");
	});

	// ==============
	$(".masters__slider").slick({
		// показывать 3 слайда
		slidesToShow: 3,
		// перелистывать по одному слайду
		slidesToScroll: 1,
		// стрелки
		arrows: true,
		// маркеры внизу
		dots: true,
		// добавлять стиль центральному слайду
		centerMode: true,
		// выравнивать ширину, по самому широкому слайду
		variableWidth: true,
		// скорость
		speed: 500,
		// бесконечная работа слайдера
		infinite: true,

		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					centerMode: false,
					variableWidth: false,
					dots: false,
				},
			},
		],
	});

	// var imgs = $(".masters__slider img");
	// imgs.each(function () {
	// 	var item = $(this).closest(".item");
	// 	item.css({
	// 		"background-image": "url(" + $(this).attr("src") + ")",
	// 		"background-position": "center",
	// 		"-webkit-background-size": "cover",
	// 		"background-size": "cover",
	// 	});
	// 	$(this).hide();
	// });
	// ==============

	// Яндекс карта
	ymaps.ready(function () {
		var myMap = new ymaps.Map("map", {
			// Центр карты, указываем коордианты
			center: [55.02362, 82.925523],
			// Масштаб, тут все просто
			zoom: 9,
			// Отключаем все элементы управления
			controls: [],
		});

		var myGeoObjects = [];

		// Наша метка, указываем коордианты
		myGeoObjects = new ymaps.Placemark(
			[55.02362, 82.925523],
			{
				balloonContentBody: "Текст в балуне",
			},
			{
				iconLayout: "default#image",
				// Путь до нашей картинки
				iconImageHref: "../images/location.png",
				// Размер по ширине и высоте
				iconImageSize: [60, 60],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				iconImageOffset: [-35, -35],
			}
		);

		var clusterer = new ymaps.Clusterer({
			clusterDisableClickZoom: false,
			clusterOpenBalloonOnClick: false,
		});

		clusterer.add(myGeoObjects);
		myMap.geoObjects.add(clusterer);
		// Отлючаем возможность изменения масштаба
		myMap.behaviors.disable("scrollZoom");
	});
	// ymaps.ready(function () {
	// 	var myMap = new ymaps.Map(
	// 			"map",
	// 			{
	// 				center: [55.751574, 37.573856],
	// 				zoom: 9,
	// 			},
	// 			{
	// 				searchControlProvider: "yandex#search",
	// 			}
	// 		),
	// 		// Создаём макет содержимого.
	// 		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	// 			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
	// 		),
	// 		myPlacemark = new ymaps.Placemark(
	// 			myMap.getCenter(),
	// 			{
	// 				hintContent: "Собственный значок метки",
	// 				balloonContent: "Это красивая метка",
	// 			},
	// 			{
	// 				// Опции.
	// 				// Необходимо указать данный тип макета.
	// 				iconLayout: "default#image",
	// 				// Своё изображение иконки метки.
	// 				iconImageHref: "../images/map-marker.png",
	// 				// Размеры метки.
	// 				iconImageSize: [30, 42],
	// 				// Смещение левого верхнего угла иконки относительно
	// 				// её "ножки" (точки привязки).
	// 				iconImageOffset: [-5, -38],
	// 			}
	// 		),
	// 		myPlacemarkWithContent = new ymaps.Placemark(
	// 			[55.661574, 37.573856],
	// 			{
	// 				hintContent: "Собственный значок метки с контентом",
	// 				balloonContent: "А эта — новогодняя",
	// 				iconContent: "12",
	// 			},
	// 			{
	// 				// Опции.
	// 				// Необходимо указать данный тип макета.
	// 				iconLayout: "default#imageWithContent",
	// 				// Своё изображение иконки метки.
	// 				iconImageHref: "images/ball.png",
	// 				// Размеры метки.
	// 				iconImageSize: [48, 48],
	// 				// Смещение левого верхнего угла иконки относительно
	// 				// её "ножки" (точки привязки).
	// 				iconImageOffset: [-24, -24],
	// 				// Смещение слоя с содержимым относительно слоя с картинкой.
	// 				iconContentOffset: [15, 15],
	// 				// Макет содержимого.
	// 				iconContentLayout: MyIconContentLayout,
	// 			}
	// 		);

	// 	myMap.geoObjects.add(myPlacemark).add(myPlacemarkWithContent);
	// });
});
