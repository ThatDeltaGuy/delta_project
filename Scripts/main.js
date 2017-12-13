$(function onLoad() {

    $('.top-bar .left-button').click(function(){
        if($('.directory').hasClass("active")){
            $('.directory').removeClass("active");
        }
        else{
            $('.directory').addClass("active");
        }
    });

    $('.top-bar .right-button').click(function(){
        if($('.menu').hasClass("active")){
            $('.menu').removeClass("active");
        }
        else{
            $('.menu').addClass("active");
        }
    });
});