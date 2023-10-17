$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// sublogin
$(function(){
    $(".innerHeader .login").on("click",function(){
        $(".sublogin").addClass("on");
    });
    $(".sublogin .close, section").on("click",function(){
        $('.sublogin').removeClass("on");0 
    });
});

//fixHeader함수
function fixHeader(){
    if(scrollTop > 150) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}


$(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "2",
        spaceBetween: 1400,
        loop : true, 
        pagination: {
        el: ".swiper-pagination",
        clickable: false,
        },
      });
    });

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
    $('.visual .slide').slick({
       arrows: false,  //화살표
       dots: false, //인디케이트 해제
       fade: true,//페이드효과
       autoplay:true, //자동재생
       autoplaySpeed: 4000, //재생시간
       pauseOnHover: false,
       pauseOnFocus: false,
   });
});

$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once:false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

$(function(){
    $(".openmore").on("click", function(){
        $(".asiamore").addClass("on");
        $('.more').addClass('on');
    });
    $(".closemore").on("click", function(){
        $(".asiamore").removeClass("on");
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