ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [55.6729, 37.6252],
            zoom: 13,
            controls: ['zoomControl', 'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.6729, 37.6252]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Мекканософт',
                hintContent: 'Мы находимся здесь'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#greenStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        });

    myMap.geoObjects
        .add(myGeoObject)
}

$(function() {
    $('body').addClass('landing-page');
    $('body').attr('id', 'page-top');

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

    // Page scrolling feature
    $('a.page-scroll').bind('click', function(event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
    });

    var cbpAnimatedHeader = (function() {
        var docElem = document.documentElement,
                header = document.querySelector( '.navbar-default' ),
                didScroll = false,
                changeHeaderOn = 200;
        function init() {
            window.addEventListener( 'scroll', function( event ) {
                if( !didScroll ) {
                    didScroll = true;
                    setTimeout( scrollPage, 250 );
                }
            }, false );
        }
        function scrollPage() {
            var sy = scrollY();
            if ( sy >= changeHeaderOn ) {
                $(header).addClass('navbar-scroll')
            }
            else {
                $(header).removeClass('navbar-scroll')
            }
            didScroll = false;
        }
        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }
        init();

    })();
});

$('video,audio').mediaelementplayer({
    defaultVideoWidth: 480,
    defaultVideoHeight: 320,
    audioWidth: 400,
    audioHeight: 30,
});

$('.navy-link').click(function() {
  offset = $('#content-'+this.id).offset();
  $('#question-modal').hide();
  $('#question-sent-error').hide();
  $('#new_question').trigger('reset');
  $('#question-sent-error').empty();
  $('#question_subject').val($('#header-'+this.id).data('header'));
  $('#question-modal').css({left: offset.left, top: offset.top-31});
  $('#question-sent-success').css({left: offset.left+170, top: offset.top+120});
  $('#question-modal').show();
});

$('.close').click(function(){
  $('#question-modal').hide();
});

function hideAlert() {
  $('#question-sent-success').hide();
}

$.each($('.manual-content'), function(){
  if ($(this).height() > 315){
    id = $(this).attr('name');
    $('#content-'+id).addClass('manual-content-cropped');
    $('#read-more-'+id).css('display', 'inline-block');
    $('#fadeout-'+id).show();
  }
});

$('.read-more').click(function(){
  id = $(this).attr('name');
  $('#fadeout-'+id).hide();
  $('#read-more-'+id).hide();
  $('#content-'+id).removeClass('manual-content-cropped');
});

last_feedback = $('.feedback').last().get(0).id;
for (i=3; i <= last_feedback; i++) {
  $('#'+i).hide();
}

$('.button-more').click(function(){
  var last_visible = $('.feedback:visible:last').index();
  for (i=1; i <= 3; i++) {
    $('#'+(last_visible+i)).show();
  }
});

// $('.button-more').click(function(){
//   $.getJSON('feedbacks.json', function(data){
//     var items = [];
//     $.each(data, function(idx, obj){
//       items.push( '<div class="col-lg-4"><div class="bubble">'+obj.message+'</div><div class="comments-avatar"><div class="media-body"><div class="commens-name">'+obj.user_name+'</div><small class="text-muted">'+obj.user_company+'</small></div></div></div>');
//     });
//     $('.feedbacks').append(items);
//   });
// });

$('.button-test').click(function(){

});

$('.button-bonus').click(function(){
  alert('Всё сломалось');
  alert('Мы все умрём');
  alert('Выхода нет');
  alert('Всё тлен');
});
