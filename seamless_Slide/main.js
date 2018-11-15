//首先获取按钮
var allButtons = $('#buttons > span');
//自然的紧接着就要监听点击事件
for(let i=0; i<allButtons.length; i++){
  $(allButtons[i]).on('click',function(x){
    //点击后自然是要切换图片
    //先获取点击的元素，再获取索引
    let c= $(x.currentTarget).index();
    let n = c *  -300;
    index = c;//修复BUG，用一个全局变量index存储自动播放的序号，点击后重置
    $('#images').css({
      transform: 'translate('+ n +'px)'
    });
    //点击后的按钮应该变红
    //当然其他点过的按钮应该不变色
    $(allButtons[i]).addClass('red').siblings().removeClass('red');
  });
}

var timer = autoPlay();

var index = 0;

function autoPlay(){
  return setInterval(()=>{
   index+=1; 
  let size = allButtons.length;          
  allButtons.eq(index%size).trigger('click');//这里只要写trigger
  },2000);
}

$('.window').on('mouseenter',function(){
  window.clearInterval(timer);
});
$('.window').on('mouseleave',function(){
  timer = autoPlay();
});
