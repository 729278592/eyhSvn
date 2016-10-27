$(function () {

    /*全屏图片居中*/
    var ai = $(".autoImg");
    ai.each(function(){
        $(this).get(0).style.width ="1920px";
        var that = $(this);
        function toResize(){
            var veiwidth = $(window).width();
            if(veiwidth>1205){
                that.get(0).style.left = -(parseInt(that.get(0).style.width) - veiwidth)/2 + "px"
            }
        }
        toResize();
        $(window).on("resize",function(){
            toResize()
        });
    });


    var wrapper = $(".wrapper");
    /*网页底部*/
    $.ajax({
        type : "post",
        url : "foot/foot.html",
        dataType : "html",
        cache : false,
        success : function(data) {
            wrapper.append(data);
        }
    });


    /*搜索类型切换*/
    var searchType = $(".search-type");
    var typeMenu =  $(".type-menu");
    var type = $(".type");
    var down = $(".fa-angle-down");
    var typeName = $(".type-name");
    searchType.on("click",function () {
        $(this).closest(type).find(typeMenu);
        if(typeMenu.hasClass("hide")){
            typeMenu.removeClass("hide");
            down.removeClass("fa-angle-down").addClass("fa-angle-up");
        }else {
            typeMenu.addClass("hide");
            down.removeClass("fa-angle-up").addClass("fa-angle-down");
        }
    });

    typeMenu.delegate("li","click",function () {
        typeName.text($(this).text());
        typeMenu.addClass("hide");
        down.removeClass("fa-angle-up").addClass("fa-angle-down");
    })



});

