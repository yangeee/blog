!function () {
    var view = document.querySelector('#mySlides')
    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        },
        init: function(view){
            this.view = view
            this.initSwiper()
            this.onMouseOut()
            this.onMouseOver()
        },
        initSwiper: function(){
            this.swiper = new Swiper(
                this.view.querySelector('.swiper-container'), 
                this.swiperOptions
            )
        },
        onMouseOver: function(){
            this.swiper.el.onmouseover = function () {
                this.swiper.autoplay.stop();
            }
        },
        onMouseOut: function(){
            this.swiper.el.onmouseout = function () {
                this.swiper.autoplay.start();
            }
        }
    }
    controller.init(view)
}.call();