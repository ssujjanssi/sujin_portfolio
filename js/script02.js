$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

$(function(){
    Splitting();
});

$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once:false //스크롤시 딱 한번만 하고싶을땐 true
	});    
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
    // main
    gsap.timeline({
        scrollTrigger:{
            trigger:'.main',
            start:'70% 80%',
            end:'70% 0%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.mainvideo video', {'clip-path':'inset(35% round 0%'},{'clip-path':'inset(0% round 0%)',ease:'none',duration:10},0)
});

$(function(){
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.main').forEach((section,i)=>{
       ScrollTrigger.create({
          trigger:section,
          start:'top top',
          end:'250%',
          pin:true,
          pinSpacing:true,
        //   markers:true
       })
    })
 })

$(function(){
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
            
        }
    })
        
});

$(function(){
    gsap.registerPlugin(ScrollTrigger);

    

    // 타임라인가로스크롤
    let list = gsap.utils.toArray('.history .hisimg li')
    let scrollTween = gsap.to(list,{
    xPercent: -100 * (list.length - 1),
    ease:'none',
    scrollTrigger:{
        trigger:'.history',
        pin:true,
        start:'90% 98%',
        end:'300%',
        scrub:1,
        // markers:true
    }
    })

    gsap.timeline({
        scrollTrigger:{
            trigger:'.history',
            start:'0% 100%',
            end:'0% 100%',
            scrub:1,
            // markers:true
        }
    })
    .to('.history',{background:'#202020',ease:'none',duration:'5'},0)


});

$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width:800px)':function(){
            let = list = gsap.utils.toArray('.skill .graphBox li')
            let = scrollTween = gsap.to(list, {
            xPercent: -100 * (list.length - 1),
            ease:'none',
            scrollTrigger:{
                trigger:'.skill',
                start:'85% 85%',
                end:'300%',
                pin:true,
                scrub:1,
                // markers:true
        }
    })
}
})
});

// $(function(){
//     gsap.registerPlugin(ScrollTrigger);

//     ScrollTrigger.matchMedia({
//         '(min-width:500px)':function(){
//         let = list = gsap.utils.toArray('.skill .graphBox li')
//         let = scrollTween = gsap.to(list, {
//         xPercent: -100 * (list.length - 1),
//         ease:'none',
//         scrollTrigger:{
//             trigger:'.skill',
//             start:'85% 85%',
//             end:'300%',
//             pin:true,
//             scrub:1,
//             // markers:true
//         }
//     })
// }
// })
// });


$(function() {
    $('.svgAni').find('#svgAni05').each(function(i, path) {
        var length = path.getTotalLength();
        // alert(length);
    })
});

