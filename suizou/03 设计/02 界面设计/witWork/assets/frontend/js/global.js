/**
 * Created by WHB on 2015/10/30.
 */
$(function(){
    var h = $(".head-main .menu");
    /*多行打省略号*/
    var ad = $(".a-content .details");
    ad.each(function(){
        var divH = $(this).height();
        var $p = $("p", $(this)).eq(0);
        while ($p.outerHeight() > divH) {
            $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        }
    });

    /*IE不支持css3D效果的处理*/
    if ((!to3d()) || document.documentMode == 10 || document.documentMode == 11)
    {
        window.location="error.html";
    }
});