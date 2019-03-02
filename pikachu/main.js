!function () {
    function createCode(prefix, code) {
        let n = 0
        let place = document.querySelector('#code')
        let style = document.querySelector('#styleTag')
        let id = setInterval(() => {
            place.innerHTML = Prism.highlight(code.slice(0, n), Prism.languages.css, 'css');
            style.innerHTML = code.slice(0, n)
            n += 1
            place.scrollTop = place.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
            }
        },15)
    }
    let code = `
/*
 *   首先，我们需要准备下皮卡丘的小黄皮
 */
body{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.preview{
    height: 100%;
    background: #FEE433;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
/*
 *   接下来，我们画一个鼻子
 */
.nose{
    width: 0px;
    height: 0px;
    border: 11px solid;
    border-radius: 11px;
    border-color:black transparent transparent;
    position: absolute;
    left: 50%;
    top: 28px;
    margin-left: -11px;
}
/*
 *   当然，眼睛是很重要的
 */
.eye{
    width: 49px;
    height: 49px;
    background: #2F2F2F;
    position: absolute;
    border-radius: 50%;
    border: 2px solid black;
}
.eye::after{
    content: '';
    display: block;
    height: 24px;
    width: 24px;
    background: white;
    position: absolute;
    border-radius: 50%;
    left: 6px;
    top: 2px;
    border: 2px solid white;
}
.eye.right{
    left: 50%;
    margin-left: 90px;
}
.eye.left{
    right: 50%;
    margin-right: 90px;
}
/*
 *   下面给皮卡丘画一个可爱的脸蛋吧！
 */
.face{
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    top: 100px;
}
.face.left{
    right: 50%;
    margin-right: -180px;
}
.face.right{
    left: 50%;
    margin-left: -180px;
}
/*
 *  然后是皮卡丘的嘴巴  
 */
.upperLip{
    height: 20px;
    width: 80px;
    border: 3px solid black;  
    border-top: none;
    background: #FEE433;
    position: absolute;
    top: 52px;
    
}
.upperLip.left{
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    transform: rotate(-20deg);
    border-right: none;
}
.upperLip.right{
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    transform: rotate(20deg);
    border-left: none;
}
/*
 *   舌头当然不能少哦
 */
.lowerLip-wrapper{
    bottom: -42px;
    position: absolute;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    height: 150px;
    overflow: hidden;
}
.lowerLip{
    width: 140px;
    height: 2000px;
    background: #990513;
    border-radius: 100px/500px;
    border: 3px solid black;
    position: absolute;
    bottom: 0px;
    left: 50%;
    margin-left: -70px;
    overflow: hidden;
}
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    margin-left: -75px;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    background: #FB4B62;
}
/*
 *  完成了！一只皮卡丘送给你  
 */
`
    createCode('', code)
}.call()

