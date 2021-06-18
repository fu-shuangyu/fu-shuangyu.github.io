$(function(){
    $el = $('.col-md-2');
    console.log($el);
    $el.hover(function(){
        $(this).find('.xiala').css({top:0});
    },function(){
        $(this).find('.xiala').css({top:'-100%'});
    });
    // $(this).next('.xiala').hover(function(){
    //     $(this).css({top:'0'});
    // },function(){
    //     $(this).css({top:'-100%'});
    // });
})