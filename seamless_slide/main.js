//进行动画
timer = setInterval(stateChange, 2000);


//初始化状态
$(".images > img").each((index,value) => {
    if(index===0)
    value.classList.add('current');
    else
    value.classList.add('enter');
});
let n = 1;

//防止切换窗口，动画乱掉
document.addEventListener('visibilitychange', function () { //浏览器切换事件
    if (document.visibilityState == 'hidden') { //状态判断
        clearInterval(timer);
    } else {
        timer = setInterval(stateChange, 2000);
    }
});

//状态切换函数
function stateChange() {
    $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend', (e) => {
            $(e.currentTarget).removeClass('leave').addClass('enter');
        })
    $(`.images > img:nth-child(${x(n + 1)})`).removeClass('enter').addClass('current');
    n += 1;
}

//判断当前第几张的序号
function x(n) {
    if (n > 3) {
        n = n % 3;
        if (n === 0) {
            n = 3;
        }
    }
    return n;
}