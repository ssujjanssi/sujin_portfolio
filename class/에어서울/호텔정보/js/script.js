$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//fixHeader함수
function fixHeader(){
    if(scrollTop > 150) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

//fixHeader
let scrollTop = 0;
scrollTop = $(document).scrollTop();
fixHeader();

//스크롤과 윈도우창 조절시 이벤트
$(window).on('scroll resize',function(){
    scrollTop = $(document).scrollTop();
    fixHeader();
});

$(function(){
    $('.openmore').on('click',function(){
        $('.hotelListmo').addClass('on');
        $('.more').addClass('on');
    });
    $('.closemore').on('click',function(){
        $('.hotelListmo').removeClass('on');
        $('.more').removeClass('on');
    });

});

$(function(){
    $('header .open').on('click',function(){
        $('body').css({'overflow':'hidden'});
        $('header .bg').css({'display':'block'});
        $('header nav').addClass('on');
    });

    $('header .close,header .bg').on('click',function(){
        $('body').css({'overflow':'auto'});
        $('header .bg').css({'display':'none'});
        $('header nav').removeClass('on');
    });
});

$(function() {
    $('.gnb > li > a').on('mouseenter focus',function(){
        var gnbindex = $('.gnb > li > a').index($(this));
        // alert(gnbindex);
        $('.gnb li ul.inner').removeClass('on');
        $('.gnb li ul.inner:eq('+ gnbindex +')').addClass('on');
    });
    $('header').on('mouseleave',function(){
        $('.gnb li ul.inner').removeClass('on');
    })
});

$(function(){
    $('.innerHeader .login').on('mouseenter focus',function(){
        var tnbindex = $('.innerHeader .login').index($(this));
        $('.innerHeader ul.innerlog').removeClass('on');
        $('.innerHeader ul.innerlog:eq('+ tnbindex +')').addClass('on');
    });
    
    $('header').on('mouseleave',function(){
        $('.innerHeader ul.innerlog').removeClass('on');
    })
});






