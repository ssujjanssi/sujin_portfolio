$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

// gnb
$(function(){
    $(".innerHeader .menu").on("click",function(){
        $(".gnb").addClass("on"); //
    });
    $(".gnb .close, section").on("click",function(){
        $(".gnb").removeClass("on");
    });
});

// $(function(){
//     $('.gnb ul li:last-child').on('click',function(){

//         $('html,body').animate({scrollTop : $('body').offset().top +화면상단에서부터 contact까지의 길이},1000);
//     })
// })
// $(function(){
//     $(".goTop").on("click", function(){
//         let top = $('body').offset().top; // body의 top의 위칫값을 변수 top한테 저장(대입)
//         // offset() 함수는 원하는 선택자의 위치값을 top.left 형식을 반환하여 줍니다.
//     $('html,body').animate({ scrollTop : (top) }, 2000);
//     });
// });


$(function(){
    Splitting();
});

$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once:false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

$(function(){
    $('.information .photo').slick({
       arrows: false,  //화살표
       dots: false, //인디케이트 해제
       fade: true,//페이드효과
       autoplay:true, //자동재생
       autoplaySpeed: 4000, //재생시간
       pauseOnHover: false,
       pauseOnFocus: false,
   });
});

$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width:800px)':function(){
            
            gsap.utils.toArray('.visual').forEach((section,i)=>{
                ScrollTrigger.create({
                   trigger:section,
                   start:'0% 0%',
                   end:'160% top',
                   scrub:1,
                   pin:true,
                   pinSpacing:true,
                //    markers:true
                })
             })
        
                //01.visual
                gsap.timeline({
                    scrollTrigger:{
                        trigger:'.visual',
                        start:'55% 100%',
                        end:'100% 0%',
                        scrub:3,
                        // markers:true
                    }
                })
                .fromTo('.visual .img', {'clip-path':'inset(60%)'},{'clip-path':'inset(0%'},{position:'fixed',left:'0',top:'0',ease:'none',duration:'5'})
        
                gsap.timeline({
                    scrollTrigger:{
                        trigger:'.visual',
                        start:'49% 90%',
                        end:'150% 10%',
                        scrub:1,
                        // markers:true
                    }
                })
                .fromTo('.visual .txtbox',{y:'50%'},{y:'0%',ease:'none',duration:'5'},0)
        }
    })
});


$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width:500px)':function(){
// 02.informaion
gsap.timeline({
    scrollTrigger:{
        trigger:'.information',
        start:'0% 50%',
        end:'30% 30%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.circle',{'width':'0','height':'0','top':'0','duration':'10','ease':'elastic'},{'width':'2930px','height':'2930px','top':'0','duration':'10','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.information .inforBox',
        start:'0% 80%',
        end:'100% 80%',
        scrub:1,
        //markers:true
    }
})
.fromTo('.inforBox',{'y':'20%','duration':'3','ease':'elastic','opacity':'0'},{'y':'0%','duration':'3','ease':'none','opacity':'1'},0)
    }
})
    
    // work title
    gsap.timeline({
        scrollTrigger:{
            trigger:'.work',
            start:'0% 50% ',
            end:'5% 30%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.work .worktit .a',{x:'-100%'},{x:'0%',ease:'none',duration:'5'},0)
    .fromTo('.work .worktit .b',{x:'100%'},{x:'0%',ease:'none',duration:'5'},0)

    // worklist의 배경색이 바뀜
    gsap.timeline({
        scrollTrigger:{
            trigger:'.workBox',
            start:'0% 100%',
            end:'0% 100%',
            scrub:1,
            // markers:true
        }
    })
    // 배경색 그레이 글자 골드
    .to('.work',{backgroundColor:'#202020',color:'#ECE0C7',ease:'none',duration:'5'},0)
    .to('.work .worktit', {position:'fixed',left:'0%',top:'0%',ease:'none',duration:'5'},0)
    .fromTo('.workBox',{margin:'0 auto'},{margin: '100vh auto 0',position:'relative',zIndex:'10',duration:'1'},0)
    
    // title이 화면밖으로 사라지는 효과
    gsap.timeline({
        scrollTrigger:{
            trigger:'.workBox',
            start:'95% 50% ',
            end:'95% 0%',
            scrub:1,
            // markers:true
        }
    })
    .to('.work .worktit .a',{x:'-100%'},{x:'0%',ease:'none',duration:'5'},0)
    .to('.work .worktit .b',{x:'100%'},{x:'0%',ease:'none',duration:'5'},0)

});

$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width:1024px)':function(){
             // worklist의 배경색이 바뀜
    gsap.timeline({
        scrollTrigger:{
            trigger:'.workBox',
            start:'0% 100%',
            end:'0% 100%',
            scrub:1,
            // markers:true
        }
    })
    // 배경색 그레이 글자 골드
    .to('.work',{backgroundColor:'#202020',color:'#ECE0C7',ease:'none',duration:'5'},0)
    .to('.work .worktit', {position:'fixed',left:'0%',top:'0%',ease:'none',duration:'5'},0)
    .fromTo('.workBox',{margin:'0 auto'},{margin: '100vh auto 0',position:'relative',zIndex:'10',duration:'1'},0)
        }
    })
        
})
    


$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width:800px)':function(){
// 02.informaion
gsap.timeline({
    scrollTrigger:{
        trigger:'.information',
        start:'0% 50%',
        end:'30% 30%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.circle',{'width':'0','height':'0','top':'0','duration':'10','ease':'elastic'},{'width':'2930px','height':'2930px','top':'0','duration':'10','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.information .inforBox',
        start:'0% 80%',
        end:'100% 80%',
        scrub:1,
        //markers:true
    }
})
.fromTo('.inforBox',{'y':'20%','duration':'3','ease':'elastic','opacity':'0'},{'y':'0%','duration':'3','ease':'none','opacity':'1'},0)
    }
})
});

$(function(){
    gsap.registerPlugin(ScrollTrigger);

    // 02.informaion
gsap.timeline({
    scrollTrigger:{
        trigger:'.information',
        start:'0% 50%',
        end:'30% 30%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.circle',{'width':'0','height':'0','top':'0','duration':'10','ease':'elastic'},{'width':'2930px','height':'2930px','top':'0','duration':'10','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.information .inforBox',
        start:'0% 80%',
        end:'100% 80%',
        scrub:1,
        //markers:true
    }
})
.fromTo('.inforBox',{'y':'20%','duration':'3','ease':'elastic','opacity':'0'},{'y':'0%','duration':'3','ease':'none','opacity':'1'},0)
});


$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width:1024px)':function(){
                //  ncs가로스크롤
    let list =  gsap.utils.toArray('.ncs .ncsimg li'); // .work ul li를 배열로 만들어서 변수 list한테 저장
    let scrollTween = gsap.to(list, {
    xPercent: -100 * (list.length - 1), //원래 리스트의 갯수보다 1을 빼서 길이를 구한 후에 가로로 이동
    ease: 'none',
    scrollTrigger: {
        trigger: '.ncs',
        pin: true,
        scrub:1,
        start: '90% 95%',
        end:'300%', // 뷰포트 높이의 300% -> 숫자가 클수록 느려진다.
        // markers: true
    }
   })

      gsap.timeline({
    scrollTrigger:{
        trigger:'.ncs',
        start:'0% 100%',
        end:'0% 100%',
        scrub:1,
        // markers:true
    }
})
.to('.ncs',{backgroundColor:'#000000',ease:'none',duration:'5'},0)

    // line가로스크롤
    gsap.timeline({
        scrollTrigger:{
            trigger:'.ncs',
            start:'90% 95%',
            end:'200% 0%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.line .a',{'width':'0','height':'4px','left':'664px','duration':'5','ease':'elastic'},{'width':'591px','height':'4px','right':'0', 'duration':'5','ease':'none'},0)
        }
    })

});






