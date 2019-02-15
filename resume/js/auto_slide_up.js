//打开网页名片上浮
setTimeout(() => {
    findClosestAndRemoveOffset();
}, 1100);
    //添加一个类用来设置内容平滑上移
    let specialTags = document.querySelectorAll('[data-x]');
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset');
    }
    window.addEventListener('scroll',function(){
        findClosestAndRemoveOffset();
    })
    function findClosestAndRemoveOffset() {
        //这里是找到最靠近视口顶部的元素
        let specialTags = document.querySelectorAll('[data-x]');
        let minIndex = 0;
        for (let i = 0; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY - 400)) {
                minIndex = i;
            }
        }
        //滚动距离时文字出现动画
        specialTags[minIndex].classList.remove('offset');
        let id = specialTags[minIndex].id;
        let a = document.querySelector('a[href="#' + id + '"]');
        let li = a.parentNode;
        let brothersAndMe = li.parentNode.children;
        for (let i = 0; i < brothersAndMe.length; i++) {
            brothersAndMe[i].classList.remove('highlight');
        }
        li.classList.add('highlight');
    }