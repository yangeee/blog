var result2 =`
/* 我需要一张白纸 */

#paper{
    position: fixed;
    right: 0;
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background: #282C34;

}
#paper > .content{
    background: white;
    height: 100%;
    width: 100%;
    padding-left: 16px;
}
`

var result = `/*
*面试官你好，我是XXX
*我将以动画的形式来介绍我自己
*只用文字介绍太单调了
*我就用代码来介绍吧
*首先准备一些样式
*/

*{
    transition: all 1s;
}
html{
    background: white;
    font-size: 16px;
}
#code{ 
    border: 1px solid red;
    padding: 16px;
    overflow: hidden;
    position: fixed;
    width: 50%;
    height: 100%;
    left: 0;
}

/* 我需要一点代码高亮 */

.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68
}

/* 加点3D效果 */
#code{
    transform: rotate(360deg);
}

/* 不玩了，我来介绍一下我自己 */
`

var md =`
# 自我介绍

我叫杨艺
1998 年 12 月
HUT学校毕业
自学前端1年
希望xxxxxxxxxxxxxx

# 技能介绍

熟悉 Javascript CSS

# 项目介绍

1. 轮播
2. 画板
3. 导航

`
function writeCode(prefix,code,fn){
    let n = 0
    let domCode =document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix+code.substring(0,n), Prism.languages.css, 'css')
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        console.log(domCode.scrollTop)
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    },15)
}

function writeMarkdown(markdown){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
        }
    },15)
}

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    document.body.appendChild(paper)
    paper.appendChild(content)
    fn.call()
}
writeCode('',result, ()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md)
        })
    })
})




