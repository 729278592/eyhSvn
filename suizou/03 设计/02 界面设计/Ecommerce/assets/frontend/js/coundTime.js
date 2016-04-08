/**
 * Created by WHB on 2016/4/8.
 */
$(function(){
    /*验证码倒计时*/
    $('#getting').click(function(){
        var btn = $(this);
        var count = 60;
        var resend = setInterval(function(){
            count--;
            if (count > 0){
                btn.val(count+"秒后可重新获取");
                btn.addClass("active");
                //                        $.cookie("captcha", count, {path: '/', expires: (1/86400)*count});
            }else {
                clearInterval(resend);
                btn.removeClass("active");
                btn.val("获取验证码").removeAttr('disabled style');
            }
        }, 1000);
        btn.attr('disabled',true).css('cursor','not-allowed');
    });
});