$(function () {
    var mySwiper = new Swiper('.mainContainer', {
        direction: 'vertical',
        loop: true,
        // nextButton: '#bottom',
        speed: 1000,
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
    $(".musicImg").click(function () {
        var music = document.getElementById("music");
        if (music.paused){
            music.play();
            $(".musicImg").attr("src","img/musicPlay.gif");
        }
        else{
            music.pause();
            $(".musicImg").attr("src","img/musicStop.jpg");
        }
    })

});

