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
    gsap.registerPlugin(ScrollTrigger);

    // circle
gsap.timeline({
    scrollTrigger: {
        trigger:'.clonecoding',
        start:'0% 90%',
        end:'10% 30%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.circle',{'width':'0','height':'0','top':'0','duration':'10','ease':'elastic'},{'width':'4500px','height':'4500px','top':'0','duration':'10','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.clonecoding',
        start:'10% 0%',
        end:'90% 60%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.line .a',{'width':'1px','height':'0','top':'0','duration':'5','ease':'elastic'},{'width':'1px','height':'3000px','bottom':'0','duration':'5','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.clonecoding',
        start:'35% 75%',
        end:'25% 30%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.line .b',{'width':'0','height':'1px','right':'257px','duration':'5','ease':'elastic'},{'width':'252px','height':'1px','left':'0','duration':'5','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.clonecoding',
        start:'35% 65%',
        end:'30% 35%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.line .c',{'width':'0','height':'1px','left':'255px','duration':'5','ease':'elastic'},{'width':'252px','height':'1px','right':'0','duration':'5','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.clonecoding',
        start:'50% 75%',
        end:'45% 35%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.line .d',{'width':'0','height':'1px','right':'257px','duration':'5','ease':'elastic'},{'width':'252px','height':'1px','left':'0','duration':'5','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.clonecoding',
        start:'50% 50%',
        end:'45% 20%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.line .e',{'width':'0','height':'1px','left':'255px','duration':'5','ease':'elastic'},{'width':'252px','height':'1px','right':'0','duration':'5','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.clonecoding',
        start:'65% 65%',
        end:'60% 30%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.line .f',{'width':'0','height':'1px','right':'257px','duration':'5','ease':'elastic'},{'width':'252px','height':'1px','left':'0','duration':'5','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.clonecoding',
        start:'65% 40%',
        end:'60% 20%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.line .g',{'width':'0','height':'1px','left':'255px','duration':'5','ease':'elastic'},{'width':'252px','height':'1px','right':'0','duration':'5','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.clonecoding',
        start:'83% 65%',
        end:'80% 45%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.line .h',{'width':'0','height':'1px','right':'257px','duration':'5','ease':'elastic'},{'width':'252px','height':'1px','left':'0','duration':'5','ease':'none'},0)

gsap.timeline({
    scrollTrigger:{
        trigger:'.clonecoding',
        start:'90% 85%',
        end:'85% 50%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.line .i',{'width':'0','height':'1px','left':'255px','duration':'5','ease':'elastic'},{'width':'252px','height':'1px','right':'0','duration':'5','ease':'none'},0)

gsap.timeline({
    scrollTrigger: {
        trigger:'.clonecoding .codingBox',
        start:'3% 80%',
        end:'10% 90%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.codingBox li:nth-child(1)',{'opacity':'0','duration':'3','ease':'elastic'},{'opacity':'1','duration':'3','ease':'none'},0)

gsap.timeline({
    scrollTrigger: {
        trigger:'.clonecoding .codingBox',
        start:'20% 60%',
        end:'25% 50%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.codingBox li:nth-child(2)',{'opacity':'0','duration':'3','ease':'elastic'},{'opacity':'1','duration':'3','ease':'none'},0)

gsap.timeline({
    scrollTrigger: {
        trigger:'.clonecoding .codingBox',
        start:'20% 60%',
        end:'25% 40%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.codingBox li:nth-child(3)',{'opacity':'0','duration':'3','ease':'elastic'},{'opacity':'1','duration':'3','ease':'none'},0)

gsap.timeline({
    scrollTrigger: {
        trigger:'.clonecoding .codingBox',
        start:'45% 80%',
        end:'50% 70%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.codingBox li:nth-child(4)',{'opacity':'0','duration':'3','ease':'elastic'},{'opacity':'1','duration':'3','ease':'none'},0)

gsap.timeline({
    scrollTrigger: {
        trigger:'.clonecoding .codingBox',
        start:'50% 65%',
        end:'50% 20%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.codingBox li:nth-child(5)',{'opacity':'0','duration':'3','ease':'elastic'},{'opacity':'1','duration':'3','ease':'none'},0)

gsap.timeline({
    scrollTrigger: {
        trigger:'.clonecoding .codingBox',
        start:'70% 65%',
        end:'70% 50%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.codingBox li:nth-child(6)',{'opacity':'0','duration':'3','ease':'elastic'},{'opacity':'1','duration':'3','ease':'none'},0)

gsap.timeline({
    scrollTrigger: {
        trigger:'.clonecoding .codingBox',
        start:'80% 45%',
        end:'80% 40%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.codingBox li:nth-child(7)',{'opacity':'0','duration':'3','ease':'elastic'},{'opacity':'1','duration':'3','ease':'none'},0)

gsap.timeline({
    scrollTrigger: {
        trigger:'.clonecoding .codingBox',
        start:'100% 80%',
        end:'100% 80%',
        scrub:1,
        // markers:true
    }
})
.fromTo('.codingBox li:nth-child(8)',{'opacity':'0','duration':'3','ease':'elastic'},{'opacity':'1','duration':'3','ease':'none'},0)
});


$(function(){
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        '(min-width:500px)':function(){
            gsap.timeline({
                scrollTrigger: {
                    trigger:'.clonecoding',
                    start:'0% 90%',
                    end:'10% 30%',
                    scrub:1,
                    // markers:true
                }
            })
            .fromTo('.circle',{'width':'0','height':'0','top':'0','duration':'10','ease':'elastic'},{'width':'8000px','height':'8000px','top':'0','duration':'10','ease':'none'},0)

            gsap.timeline({
                scrollTrigger:{
                    trigger:'.clonecoding',
                    start:'10% 0%',
                    end:'90% 60%',
                    scrub:1,
                    // markers:true
                }
            })
            .fromTo('.line .a',{'width':'1px','height':'0','top':'0','duration':'5','ease':'elastic'},{'width':'1px','height':'4300px','bottom':'0','duration':'5','ease':'none'},0)
        }
    })
});
    

    
        

$(function(){
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger:{
            trigger:'.morework',
            start:'0% 50%',
            end:'5% 0%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.morework .moretit .more',{x:'-100%'},{x:'0%',ease:'none',duration:'5'},0)
    .fromTo('.morework .moretit .work',{x:'100%'},{x:'0%',ease:'none',duration:'5'},0)

    gsap.utils.toArray('.morework').forEach((section,i)=>{
        ScrollTrigger.create({
           trigger:section,
           start:'50% 53%',
           end:'200% top',
           pin:true,
           pinSpacing:true,
        //    markers:true
        })
     })

    gsap.timeline({
        scrollTrigger:{
            trigger:'.morework',
            start:'45% 50%',
            end:'200% 0%',
            scrub:1,
            // markers:true
        }
    })
    .fromTo('.morework .tag',{y:'300%'},{y:'0%',ease:'none',duration:'5'},0)
});

// $(function(){
//     gsap.registerPlugin(ScrollTrigger);



//     gsap.timeline({
//         scrollTrigger:{
//             trigger:'.kakao',
//             start:'0% 100%',
//             end:'20% 30%',
//             scrub:1,
//             // markers:true
//         }
//     })
//     .fromTo('.kakaoBox .img', {y:'80%'},{y:'0%',ease:'none',duration:'5'},0)

//     gsap.timeline({
//         scrollTrigger:{
//             trigger:'.kakao',
//             start:'20% 60%',
//             end:'20% 27%',
//             scrub:1,
//             // markers:true
//         }
//     })
//     .fromTo('.kakaoBox .subimg', {y:'100%'},{y:'0%',ease:'none',duration:'5'},0)

//     gsap.timeline({
//         scrollTrigger:{
//             trigger:'.kakao',
//             start:'20% 30%',
//             end:'20% 30%',
//             scrub:1,
//             // markers:true
//         }
//     })
//     .fromTo('.line span',{'width':'0','height':'2px','rigth':'100%','duration':'5','ease':'elastic'},{'width':'457px','height':'2px','rigth':'0', 'duration':'5','ease':'none'},0)

//     gsap.timeline({
//         scrollTrigger:{
//             trigger:'.kakao',
//             start:'20% 30%',
//             end:'20% 30%',
//             scrub:1,
//             // markers:true
//         }
//     })
//     .fromTo('.tit',{y:'100%',opacity:'0'},{y:'0%',opacity:'1',durtation:'5',ease:'none'},0)
//     .fromTo('.subtit',{y:'-100%',opacity:'0'},{y:'0%',opacity:'1',durtation:'5',ease:'none'},0)
//     .fromTo('.btn',{y:'-100%',opacity:'0'},{y:'0%',opacity:'1',durtation:'5',ease:'none'},0)
// });

// $(function(){
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.timeline({
//         scrollTrigger:{
//             trigger:'.renewal',
//             start:'30% 50%',
//             end:'45% 30%',
//             scrub:1,
//             // markers:true
//         }
//     })
//     .fromTo('.renewalBox .img', {y:'80%'},{y:'0%',ease:'none',duration:'5'},0)

//     gsap.timeline({
//         scrollTrigger:{
//             trigger:'.renewal',
//             start:'50% 60%',
//             end:'50% 35%',
//             scrub:1,
//             // markers:true
//         }
//     })
//     .fromTo('.renewalBox .subimg', {y:'100%'},{y:'0%',ease:'none',duration:'5'},0)

//     gsap.timeline({
//         scrollTrigger:{
//             trigger:'.renewal',
//             start:'40% 23%',
//             end:'40% 23%',
//             scrub:1,
//             // markers:true
//         }
//     })
//     .fromTo('.line span',{'width':'0','height':'2px','rigth':'916px','duration':'5','ease':'elastic'},{'width':'316px','height':'2px','rigth':'0', 'duration':'5','ease':'none'},0)

//     gsap.timeline({
//         scrollTrigger:{
//             trigger:'.renewal',
//             start:'80% 80%',
//             end:'20% 30%',
//             scrub:1,
//             // markers:true
//         }
//     })
//     .fromTo('.tit',{y:'100%',opacity:'0'},{y:'0%',opacity:'1',durtation:'5',ease:'none'},0)
//     .fromTo('.subtit',{y:'-100%',opacity:'0'},{y:'0%',opacity:'1',durtation:'5',ease:'none'},0)
//     .fromTo('.btn',{y:'-100%',opacity:'0'},{y:'0%',opacity:'1',durtation:'5',ease:'none'},0)
// });
