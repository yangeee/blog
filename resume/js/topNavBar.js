//加载动画
setTimeout(() => {
    siteWelcome.classList.remove('active');
}, 1200);

//监听滚动事件，设置导航栏样式以及导航栏动画定位显示
window.addEventListener('scroll',function(){
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky');
    }
    else {
        topNavBar.classList.remove('sticky');
    }
})

//鼠标移入导航栏文字底部动画
let liTags = document.querySelectorAll('nav.menu > ul > li');
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        let li = x.currentTarget.classList.add('active');

    }
    liTags[i].onmouseleave = function (x) {
        let li = x.currentTarget.classList.remove('active');
    }
}
//导航栏点击定位
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
let aTags = document.querySelectorAll('nav.menu > ul > li > a');
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault();
        let a = x.currentTarget;
        let href = a.getAttribute('href');
        let element = document.querySelector(href);
        let top = element.offsetTop;

        let currentTop = window.scrollY;//当前位置
        let targetTop = top - 80;//目标位置
        var coords = { y: currentTop }; // Start at (0, 0)
        let s = targetTop - currentTop;//滚动的距离
        let t = Math.abs((s / 100) * 300);//总时长
        if (t > 500) { t = 500; }


        var tween = new TWEEN.Tween(coords) //传入一个初始的值，这里是一个对象
            .to({ y: targetTop }, t) //表示花t时间移动将y这个变量的值增大到targetTop
            .easing(TWEEN.Easing.Cubic.InOut) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                window.scrollTo(0, coords.y); //y会自动慢慢增加，自动移动
            })
            .start(); // Start the tween immediately.
    }
}