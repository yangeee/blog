let $slides = $('#slides');
let $images = $slides.children('img');
let $buttons = $('.buttons>div');
$buttons.eq(0).on('click',function(){
    $slides.css({transform:'translateX(0px)'})
})
$buttons.eq(1).on('click',function(){
    $slides.css({transform:'translateX(-920px)'})
})
$buttons.eq(2).on('click',function(){
    $slides.css({transform:'translateX(-1840px)'})
})
$buttons.eq(3).on('click',function(){
    $slides.css({transform:'translateX(-2760px)'})
})