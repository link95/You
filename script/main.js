/**
 * Created by Misha on 07.05.2017.
 */
$(document).ready(function () {
   $(".nam_list_meny").on("click", function () {
       $(".nam-list").slideToggle();
        $(".div__header").slideToggle()
   })
});

new WOW().init();

$(document).ready(function(){
    $(".nav-item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('.back').show()
    }
    if($(window).scrollTop()<300){
        $('.back').hide()
    }

});

$(document).ready(function() {
    $(".back").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});