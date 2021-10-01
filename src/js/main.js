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

	// === popap discount ===
	let popap_discount = $(".popap-discount");

	$("#discount").click(() => {
		popap_discount.css("display", "flex");
	});

	$(".popap-discount__cancel__close, .popap-discount").click((e) => {
		if (
			e.target.className === "popap-discount" ||
			e.target.className === "popap-discount__cancel__close"
		) {
			popap_discount.css("display", "none");
		}
	});

	// === popap request ===
	let popap_request = $(".popap-request");

	$(".item__info__button").click((e) => {
		let tmp = e.target.parentNode.parentNode.className;
		let array_class = tmp.split(" ");

		array_class.forEach((element) => {
			if ($(window).width() > "767") {
				if (element === "slick-center") {
					popap_request.fadeIn();
				}
			} else {
				if (element === "slick-active") {
					popap_request.fadeIn();
				}
			}
		});
	});

	$(".popap-request__cancel__close").click(() => {
		popap_request.fadeOut();
	});

	// === отправка формы ===
	$(".popap-request__btn").click(() => {
		let status = [];

		let name = $("#name");
		let name_message = $("#name-message");
		name.css("border-color", "rgb(174, 137, 89)");
		name_message.hide();

		let service = $("#service");
		let service_message = $("#service-message");
		service.css("border-color", "rgb(174, 137, 89)");
		service_message.hide();

		let date = $("#datepicker");
		let date_message = $("#date-message");
		date.css("border-color", "rgb(174, 137, 89)");
		date_message.hide();

		let phone = $("#phone");
		let phone_message = $("#phone-message");
		phone.css("border-color", "rgb(174, 137, 89)");
		phone_message.hide();

		let master = $("#master");
		let master_message = $("#master-message");
		master.css("border-color", "rgb(174, 137, 89)");
		master_message.hide();

		let time = $("#time");
		let time_message = $("#time-message");
		time.css("border-color", "rgb(174, 137, 89)");
		time_message.hide();

		if (
			name.val() &&
			service.val() &&
			date.val() &&
			phone.val() &&
			master.val() &&
			time.val()
		) {
			$.ajax({
				type: "post",
				url: "mail.php",
				data:
					"name=" +
					name.val() +
					"&service=" +
					service.val() +
					"&date=" +
					date.val() +
					"&phone=" +
					phone.val() +
					"&master=" +
					master.val() +
					"&time=" +
					time.val(),
				success: () => {
					$(".sent-form").show();
					$(".submit-form").hide();
				},
				error: () => {
					// $(".reservation__container").hide();
					alert("Ошибка записи. Свяжитесь пожалуйста, по номеру телефона.");
				},
			});
		} else {
			// проверка имени
			if (!name.val()) {
				name.css("border-color", "rgb(231, 38, 38)");
				name_message.show();
			}

			// проверка услуг
			if (!service.val()) {
				service.css("border-color", "rgb(231, 38, 38)");
				service_message.show();
			}

			// проверка даты
			if (!date.val()) {
				date.css("border-color", "rgb(231, 38, 38)");
				date_message.show();
			}

			// проверка телефона
			if (!phone.val()) {
				phone.css("border-color", "rgb(231, 38, 38)");
				phone_message.show();
			}

			// проверка мастера
			if (!master.val()) {
				master.css("border-color", "rgb(231, 38, 38)");
				master_message.show();
			}

			// проверка времени
			if (!time.val()) {
				time.css("border-color", "rgb(231, 38, 38)");
				time_message.show();
			}
		}
	});

	// === animation ===
	new WOW({
		animateClass: "animate__animated",
	}).init();

	// === календарь в выборе даты ===
	$(function () {
		$("#datepicker").datepicker({
			minDate: 0,
		});

		$.datepicker.regional["ru"] = {
			closeText: "Закрыть",
			prevText: "<Пред",
			nextText: "След>",
			currentText: "Сегодня",
			monthNames: [
				"Январь",
				"Февраль",
				"Март",
				"Апрель",
				"Май",
				"Июнь",
				"Июль",
				"Август",
				"Сентябрь",
				"Октябрь",
				"Ноябрь",
				"Декабрь",
			],
			monthNamesShort: [
				"Январь",
				"Февраль",
				"Март",
				"Апрель",
				"Май",
				"Июнь",
				"Июль",
				"Август",
				"Сентябрь",
				"Октябрь",
				"Ноябрь",
				"Декабрь",
			],
			dayNames: [
				"воскресенье",
				"понедельник",
				"вторник",
				"среда",
				"четверг",
				"пятница",
				"суббота",
			],
			dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
			dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			weekHeader: "Нед",
			dateFormat: "dd.mm.yy",
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: "",
		};
		$.datepicker.setDefaults($.datepicker.regional["ru"]);
	});

	// === slider ===
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
	// ymaps.ready(function () {
	// 	var myMap = new ymaps.Map("map", {
	// 		// Центр карты, указываем коордианты
	// 		center: [55.02362, 82.925523],
	// 		// Масштаб, тут все просто
	// 		zoom: 9,
	// 		// Отключаем все элементы управления
	// 		controls: [],
	// 	});

	// 	var myGeoObjects = [];

	// 	// Наша метка, указываем коордианты
	// 	myGeoObjects = new ymaps.Placemark(
	// 		[55.02362, 82.925523],
	// 		{
	// 			balloonContentBody: "Текст в балуне",
	// 		},
	// 		{
	// 			iconLayout: "default#image",
	// 			// Путь до нашей картинки
	// 			iconImageHref: "../images/location.png",
	// 			// Размер по ширине и высоте
	// 			iconImageSize: [60, 60],
	// 			// Смещение левого верхнего угла иконки относительно
	// 			// её «ножки» (точки привязки).
	// 			iconImageOffset: [-35, -35],
	// 		}
	// 	);

	// 	var clusterer = new ymaps.Clusterer({
	// 		clusterDisableClickZoom: false,
	// 		clusterOpenBalloonOnClick: false,
	// 	});

	// 	clusterer.add(myGeoObjects);
	// 	myMap.geoObjects.add(clusterer);
	// 	// Отлючаем возможность изменения масштаба
	// 	myMap.behaviors.disable("scrollZoom");
	// });
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
