    $(document).ready(function(){
        $(".tog_Lst a.dp1").click(function(){//대메뉴를 클릭하면
            $(".sub").removeClass("on");//서브메뉴 on이라는 클래스를 삭제해라.모든 서브메뉴 높이가 0-->안보이게 해라
            $(this).next(".sub").addClass("on");//대메뉴 바로뒤에오는 서브메뉴에 on이라는 클래스를 추가해라.높이가 125px-->보이게 해라
            $(".tog_Lst a.dp1").removeClass("on");//대메뉴에 on을 삭제해라
            $(this).addClass("on");//내자신(지금 내가 클릭한 대메뉴) on을 추가해라
        });
       
    });    