$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//splitting.js
$(function(){
    Splitting();
});

$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 