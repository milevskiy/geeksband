$(document).ready(function(){
  $(".btn-transition").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top - 50;
		//анимируем переход на расстояние - top за 1500 мс
		$('body, html').animate({scrollTop: top}, 1500);
	});

  $(".header__nav__button").on("click", function(event) {
    event.preventDefault();
    var navList = $("#nav ul");

    if (navList.css("display") === "none")
      navList.css("display", "block");
    else
      navList.css("display", "none");
  });

  $("#header").waypoint(function(){
    var className = $('#header__nav').attr('class');
    if (className == undefined)
      $('#header__nav').addClass('header-scrolled');
    else
      $('#header__nav').removeAttr('class');
  },{offset:'-5%'});

  $("#header").waypoint(function(){
    var className = $('#portfolio').find('.container').attr('class');
    if (className == 'container')
      $('#portfolio').find('.container').addClass('portfolio-scrolled');
    else
      $('#portfolio').find('.container').removeClass('portfolio-scrolled');
  },{offset:'-65%'});

  $('.open-popup-link').magnificPopup({
    type:'inline',
    // Delay in milliseconds before popup is removed
    removalDelay: 300,
    // Class that is added to popup wrapper and background
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

});
