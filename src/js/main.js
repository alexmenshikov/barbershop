$(document).ready(() => {
	// === mobile menu ===
	let menu = $(".menu");
	let body = $("body");

	$(".burger").click(() => {
		menu.addClass("menu__mobile");
		body.css('overflow','hidden');
	});

	$(".close").click(() => {
		menu.removeClass("menu__mobile");
		body.css('overflow','unset');
	});

	$(".menu__item__link").click(() => {
		menu.removeClass("menu__mobile");
		body.css('overflow','unset');
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
		let flag_name = false;
		let name_message = $("#name-message");
		name.css("border-color", "rgb(174, 137, 89)");
		name_message.hide();

		let service = $("#service");
		let flag_service = false;
		let service_message = $("#service-message");
		service.css("border-color", "rgb(174, 137, 89)");
		service_message.hide();

		let date = $("#datepicker");
		let flag_date = false;
		let date_message = $("#date-message");
		date.css("border-color", "rgb(174, 137, 89)");
		date_message.hide();

		let phone = $("#phone");
		let flag_phone = false;
		let phone_message = $("#phone-message");
		phone.css("border-color", "rgb(174, 137, 89)");
		phone_message.hide();

		let master = $("#master");
		let flag_master = false;
		let master_message = $("#master-message");
		master.css("border-color", "rgb(174, 137, 89)");
		master_message.hide();

		let time = $("#time");
		let flag_time = false;
		let time_message = $("#time-message");
		time.css("border-color", "rgb(174, 137, 89)");
		time_message.hide();

		// проверка имени
		if (!name.val()) {
			name.css("border-color", "rgb(231, 38, 38)");
			name_message.show();
			flag_name = false;
		} else {
			flag_name = true;
		}

		// проверка услуг
		if (!service.val()) {
			service.css("border-color", "rgb(231, 38, 38)");
			service_message.show();
			flag_service = false;
		} else {
			flag_service = true;
		}

		// проверка даты
		if (!date.val()) {
			date.css("border-color", "rgb(231, 38, 38)");
			date_message.show();
			flag_date = false;
		} else {
			flag_date = true;
		}

		// проверка телефона
		if (!phone.val()) {
			phone.css("border-color", "rgb(231, 38, 38)");
			phone_message.show();
			flag_phone = false;
		} else {
			flag_phone = true;
		}

		// проверка мастера
		if (!master.val()) {
			master.css("border-color", "rgb(231, 38, 38)");
			master_message.show();
			flag_master = false;
		} else {
			flag_master = true;
		}

		// проверка времени
		if (!time.val()) {
			time.css("border-color", "rgb(231, 38, 38)");
			time_message.show();
			flag_time = false;
		} else {
			flag_time = true;
		}

		if (
			flag_name &&
			flag_service &&
			flag_date &&
			flag_phone &&
			flag_master &&
			flag_time
		) {
			$(".sent-form").show();
			$(".submit-form").hide();
			// $.ajax({
			// 	type: "post",
			// 	url: "mail.php",
			// 	data:
			// 		"name=" +
			// 		name.val() +
			// 		"&service=" +
			// 		service.val() +
			// 		"&date=" +
			// 		date.val() +
			// 		"&phone=" +
			// 		phone.val() +
			// 		"&master=" +
			// 		master.val() +
			// 		"&time=" +
			// 		time.val(),
			// 	success: () => {
			// 		$(".sent-form").show();
			// 		$(".submit-form").hide();
			// 	},
			// 	error: () => {
			// 		// $(".reservation__container").hide();
			// 		alert("Ошибка записи. Свяжитесь пожалуйста, по номеру телефона.");
			// 	},
			// });
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

	// ==============
	// === Яндекс карта ===
	let map_center = [55.05487708843939, 82.90210826322935];

	ymaps.ready(() => {
		// Добавляем карту на страницу
		let map = new ymaps.Map("contact__map", {
			// Центр карты, указываем коордианты
			center: map_center,
			// Масштаб, тут все просто
			zoom: 17,
			// Отключаем все элементы управления
			controls: [],
		});

		// === Создаём свою метку на яндекс карте ===
		let placemark = new ymaps.Placemark(
			map_center,
			{
				// balloonContentBody: "Текст в балуне",
			},
			{
				// Сообщаем карте, что хотим использовать свою картинку
				iconLayout: "default#image",
				// Путь до нашей картинки
				iconImageHref: "../barbershop/images/location.png",
				// Размер по ширине и высоте
				iconImageSize: [40, 50],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				iconImageOffset: [-20, -50],
			}
		);

		// === Добавляем свою метку на яндекс карте ===
		map.geoObjects.add(placemark);
	});
});
