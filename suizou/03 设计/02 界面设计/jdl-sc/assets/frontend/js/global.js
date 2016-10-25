$(function () {
    /*网页头部*/
    var wrapper = $(".wrapper");
    $.ajax({
        type : "post",
        url : "head/head.html",
        dataType : "html",
        cache : false,
        success : function(data) {
            wrapper.prepend(data);
        }
    });

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
});

