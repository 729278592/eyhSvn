/**
 * Created by whb on 2015/8/19.
 */
var ErrorBox = function () {
    var errorbox = $(".error_box");
    var setTime = function(){
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
//        var ProvincesCard = $("#ProvincesCard");
//        var regCard = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
        if(age.val()==""){
            errorbox.text("年龄不能为空");
            setTime()
        }
        else{
            errorbox.fadeOut(2000)
        }
//        if(ProvincesCard.val()==""){
//            errorbox.text("身份证号码不能为空");
//            setTime()
//        }
//        else if(!regCard.test(ProvincesCard.val())){
//            errorbox.text("身份证号码格式不正确");
//            setTime()
//        }
//        else{
//            errorbox.fadeOut(2000)
//        }
    };

    return {
        init: function () {
            quiltName();
        }
    };
}();

