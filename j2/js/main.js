$(document).ready(function(){
   var intv=setInterval(function(){
      nextAni(); 
   },3000);
    
    function nextAni(){ //nextAni()함수 : 다음 이미지 모션 정의
        $(".vs li").eq(0).appendTo($(".vs"));
        $(".vs li").eq(0).addClass("on");
        $(".vs li").not(":first-child").removeClass("on");
    };
	
     var ck1 = true, ck2 = true;  
	  
        //펼침 메뉴의 열기/닫기 모션
       $(".look").click(function(){
             if(ck1){
                 $(".search").addClass("on");
             } else {
                 $(".search").removeClass("on");
             }
             ck1 = !ck1;
       }); 
	
	var ck3=true;
	$("#collap li").click(function(){
		if(ck3){
			$(this).addClass("on");
			
		}else{
			$(this).removeClass("on");
		}
		ck3 = !ck3;
	});
	
	$(".toggle").click(function(){
		$("#collap").animate({
			"left":"0px"
		},800)
	});
	$(".c_close").click(function(){
		$("#collap").animate({
			"left":"-110%"
		},800)
	});
	
});

	