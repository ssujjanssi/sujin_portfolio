//a태그 위로 튕기는 현상 제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//li.on이 붙을 때
$(function(){
    $('.box li').on('mouseenter focus', function(){
        $('.box li').removeClass('on');
        $(this).addClass('on');
    });

    $('.tabTitle li a').on('click',function(){
        var index =$('.tabTitle li a').index($(this));
        $('.tabTitle li a').removeClass('on');
        $('.tab li').removeClass('on');
        $('.tab il').removeClass('on');
        $('.tab li:eq('+ index +')').addClass('on');
        $(this).addClass('on');
    })
});
