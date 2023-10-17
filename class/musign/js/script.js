//a 속성 제거 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//svg path 길이 구하기
$(function(){
    $('.svgAni').find('path').each(function(i, path){
        var length = path.getTotalLength();
        // alert(length);  
    });
});

$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      });

//배경색 변경
$(window).on('scroll resize',function(){
    var scrollTop = $(document).scrollTop();
    bgColor();

    function bgColor(){
        if(scrollTop > 1400){
            $('body').addClass('on');
        }else {
            $('body').removeClass('on');
        }
        if(scrollTop > 2700) {
            $('body').removeClass('on');
        }
    }
})

//menuopen
$(function(){
    $('.menuOpen button.open').on('click',function(){
        $('.menuOpen .menuWrap').addClass('on');
    });
    $('.menuOpen .menuWrap .close').on('click',function(){
        $('.menuOpen .menuWrap').removeClass('on');
    });
});

//gnb마우스 오버, 포커스시 밑줄 => span.bar
$(function(){
    $('.gnb li a ').on('mouseenter focus',function(){
        let bar = $(this).position().left;
        let widNum = $(this).width();

        $('span.bar').css({'left': bar + 'px','width':widNum + 'px','opacity':'1'});
    });
    $('.gnb li a').on('mouseleave',function(){
        $('span.bar').css({'left':0,'width':0,'opacity':'0'});
    });
});