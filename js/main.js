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

    function audioAutoPlay() {
        var music = document.getElementById("music");
        if ($(".musicImg").attr("src") == "img/musicPlay.gif") {
            music.play();
        }
    }

    function audioTogglePlay() {
        var music = document.getElementById("music");
        if (music.paused) {
            music.play();
            $(".musicImg").attr("src", "img/musicPlay.gif");
        }
        else {
            music.pause();
            $(".musicImg").attr("src", "img/musicStop.jpg");
        }
    }

    $(".musicImg").click(function () {
        audioTogglePlay();
    });
});

document.addEventListener('DOMContentLoaded', function () {
//     alert("DOMContentLoaded !!!!!");
    audioAutoPlay();
});

document.addEventListener("WeixinJSBridgeReady", function () {
//     alert("WeixinJSBridgeReady !!!!!");
    audioAutoPlay();
}, false);

