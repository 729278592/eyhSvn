/**
 * Created by whb on 2015/8/19.
 */
var ErrorBox = function () {
    var errorbox = $(".error_box");
    var setTime = function(){
     // errorbox.addClass("swing");
        errorbox.fadeIn(500);
        setTimeout(function(){
            errorbox.fadeOut(500)
        },3000)
    };

    var quiltName = function() {
        var name = $("#QuiltName");
        if(name.val()==""){
            errorbox.text("姓名不能为空");
            setTime()
        }
        else{
            quiltNumber();
        }
    };

    var quiltNumber = function(){
        var number = $("#PhoneNumber");
        var reg = /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
        if(number.val()==""){
            errorbox.text("手机号码不能为空");
            setTime()
        }
        else if(!reg.test(number.val())){
            errorbox.text("手机号码格式不正确");
            setTime()
        }
        else{
            quiltAge()
        }
    };

    var quiltAge = function() {
        var age = $("#Age");
        if(age.val()==""){
            errorbox.text("年龄不能为空");
            setTime()
        }
        else{
            errorbox.fadeOut(2000)
        }
    };

    return {
        init: function () {
            quiltName();
        }
    };
}();

