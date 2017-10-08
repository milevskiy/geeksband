$(document).ready(function(){
  $(".btn-transition").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

  $(".header__nav__button").on("click", function(event) {
    event.preventDefault();
    var navList = $("#nav ul");

    if (navList.css("display") === "none")
      navList.css("display", "block");
    else
      navList.css("display", "none");
  });
});
