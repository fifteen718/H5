function audioAutoPlay() {
    var music = document.getElementById("music");
    if ($(".musicImg").attr("src") == "img/musicPlay.gif") {
        music.play();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    audioAutoPlay();
});

document.addEventListener("WeixinJSBridgeReady", function () {
    audioAutoPlay();
}, false);

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

    var photoSwiper = new Swiper('.photoContainer', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });

    $(".musicImg").click(function () {
        audioTogglePlay();
    });
});
