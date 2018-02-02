$(function () {
    $('.btn-box li').each(function (index) {
        $(this).click(function () {
            $('.btn-box li').removeClass('on').eq(index).addClass('on');
            $('.show-box').hide().eq(index).show();
            if(index==1){
                $('.m2-cont').css({
                        'height':'9.27rem',
                        'background':'url(images/m17.png) no-repeat center top',
                        'background-size':'7rem'
                    })
            }else{
                $('.m2-cont').css({
                    'height':'6.98rem',
                    'background':'url(images/m12.png) no-repeat center top',
                    'background-size':'7.1rem'
                })
            }
        })
    })
})