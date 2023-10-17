//0. a클릭시 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]',function(e){
    e.preventDefault();
});

// 여러줄 주석 shift+Alt+A

// fixheader
$(window).on('scroll resize',function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
     //alert(scrollPos);,alert은 경고창으로 변수값을 확인 할 때 주로 사용

    fixHeader();
    fixList();
    fix();

    function fixHeader(){
        if(scrollPos > 80 ){$('header').addClass('on');}
        else{$('header').removeClass('on');}
    }
    function fixList(){
        $('.approcach .inner .list li a').removeClass('on');

        if(scrollPos > 1250){
            $('.approcach .inner .list li a').removeClass('on');
            $('.approcach .inner .list li:eq(0) a').addClass('on');
        }
        if(scrollPos > 1650){
            $('.approcach .inner .list li a').removeClass('on');
            $('.approcach .inner .list li:eq(1) a').addClass('on');
        }
        if(scrollPos > 2050){
            $('.approcach .inner .list li a').removeClass('on');
            $('.approcach .inner .list li:eq(2) a').addClass('on');
        }
        if(scrollPos > 2550){
            $('.approcach .inner .list li a').removeClass('on');
            $('.approcach .inner .list li:eq(3) a').addClass('on');
        }
    }
    function fix() {
        if(scrollPos > 1250){$('.fix .text').addClass('on');}
        else {$('.fix .text').removeClass('on');}
        if(scrollPos > 2700){$('.fix .text').removeClass('on');}
    }





});

//gnbmenu
$(function(){
    $('header .gnbBtn').on('click',function(){
        $('nav.gnb').toggleClass('on');
    });

    $('.contents').on('click',function(){
        $('header nav.gnb').removeClass('on');
    });
});

//03.scrolla
//2.스크롤 이벤트
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once:false
    });
});
 //3.텍스트애니메이션
$(function(){Splitting();});



