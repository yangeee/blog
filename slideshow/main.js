let $slides = $('#slides');
let $images = $slides.children('img');
let $buttons = $('.buttons>div');
let current = 0;//这里不能放函数里，因为goTo的作用域是全局，所以函数里的current改变不了的
let a = setInterval(function(){
    goTo(current++);
},1300);
function clickPlay(){

    $('.buttons').on('click','div',function(e){
        clearInterval(a);//防止瞎几把转
        let $button = $(e.currentTarget)
        let $index = $button.index();
        goTo($index);
        current = $index;
        a = setInterval(function(){
            goTo(current++);//这里必须用current，因为依靠全局的current来控制自动
        },1300);
    });

}

function goTo(index){
    console.log(index)
    if(index>=$buttons.length-1){
        current = 0;
    }
    $buttons.removeClass('click');
    $buttons.eq(index).addClass('click');
    $slides.css({transform:`translateX(${-(index)*920}px)`});
}

function hoverStop(){
    $('.slides').on('mouseenter', function(){
        window.clearInterval(a);
      }).on('mouseleave', function(){
        a = setInterval(function(){
          goTo(current++);
        },1300)
      });
}

clickPlay();
hoverStop();

