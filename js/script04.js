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

$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
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
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger:{
            trigger:'.main',
            start:'100% 90% ',
            end:'170% 0%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.title .portfolio',{x:'-150%'},{x:'0%',ease:'none',duration:'5'},0)
    .fromTo('.title .pro',{x:'150%'},{x:'0%',ease:'none',duration:'5'},0)

    gsap.utils.toArray('.main').forEach((section,i)=>{
        ScrollTrigger.create({
           trigger:section,
           start:'top top',
           end:'300%',
           pin:true,
           pinSpacing:true,
         //   markers:true
        })
     })
});