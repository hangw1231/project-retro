$(function() {
    /* 인트로 비디오 */
    const $intro = $('#intro');
    const $wrap = $('.wrap');
    const video = $('#introVideo').get(0);

    function show(){
        $intro.fadeOut(800,function(){
            $wrap.fadeIn(600)
        })
    }

    $(video).on('ended', show);

    setTimeout(()=>{
        if($intro.is('visible')){
            show()
        }
    }, 3000);

    /* 별 떨어지는 느낌 */
/*     const $container = $('.wrap .stars');
    const maxStars = 20;

    function createStars(){
        const $star = $(`<span></span>`);
        const startX = Math.random() * $(window).width()
        const startY = Math.random() * ($(window).height() * 0.4);
        const duration = 3 + Math.random() * 3
        const delay = 0

        $star.css({
            left : startX + 'px',
            top : startY + 'px',
            animationDuration : duration + 's',
            animationDelay : delay + 's'
        });

        $container.append($star);

        setTimeout(()=>{
            $star.remove();
        }, duration * 1000)
    }

    setInterval(()=>{
        if($container.children().length < maxStars){
            createStars()
        }
    }, 500) */

})

