$(function(){
    $el = $('.col-md-2 a img');
    $el.hover(function(){
        $(this).next('.xiala').css({top:'0'});
    },function(){
        $(this).next('.xiala').css({top:'-100%'});
    });
    $(this).next('.xiala').hover(function(){
        $(this).css({top:'0'});
    },function(){
        $(this).css({top:'-100%'});
    });
})