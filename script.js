const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
    },

    pagination: {
        el: '.swiper-pagination',
        spaceBetween: 20,
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    on: {
        slideChange: function (swiper) {
            let activeIndex = swiper.realIndex;
            let color = "#0ED984";
            let url = "url(\"res/pag1.svg\")";
            if (activeIndex === 1) {
                color = '#3577F6';
                url = "url(\"res/pag2.svg\")";
            } else if (activeIndex === 2) {
                color = '#D72DF3';
                url = "url(\"res/pag3.svg\")";
            }
            setColor(color);
            setBackground(url);
        }
    },
});

function setColor(color) {
    document.getElementsByClassName("online")[0].style.color = color;
}

function setBackground(url) {
    let elem = document.getElementsByClassName("swiper-pagination-bullet");
    for (let i = 0; i < elem.length; i++) {
        if (elem[i].classList.contains('swiper-pagination-bullet-active')) {
            elem[i].style.backgroundImage = url;
        } else {
            elem[i].style.backgroundImage = "none";
        }
    }
}
