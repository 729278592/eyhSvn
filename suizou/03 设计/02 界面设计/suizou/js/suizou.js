$(function(){
    $(".wft_logo").on("click",function(){

        if(($(".user").val()=="")&&($(".password").val()=="")){
            $(".error1").removeClass("hide")
            $(".error2").removeClass("hide")
        }
        else if(($(".user").val()=="")&&($(".password").val()!="")){
            $(".error1").removeClass("hide")
            $(".error2").addClass("hide")
        }
        else if(($(".user").val()!="")&&($(".password").val()=="")){
            $(".error1").addClass("hide")
            $(".error2").removeClass("hide")
        }
        else if(($(".user").val()!="")&&($(".password").val()!="")){
            $(".error1").addClass("hide")
            $(".error2").addClass("hide")
        }
    })
    $(".wft_logo").on("click",function(){
        $(this).val("正在登录中...")
    })
    $(".cl_li2").on("click",function(){
        $(".meng").css({"display":"block"})
    })
    $(".bbtn").on("click",function(){
        $(".meng").css({"display":"none"})
    })
    $(".cl_li3").hover(function(){
        $(".meng1").removeClass("hide")
    },function(){
        $(".meng1").addClass("hide")
    })
    if (navigator.userAgent.indexOf('Firefox') >= 0){
        $(".c_login").css({"position":"relative","top":"-25px"})
        $(".shuru1").css({"left":"0"})

    }

    $("#top").on("click",function(){

        return false;
    });
    $("#register").validate({
        rules: {
            username:{
                required:true,
                remote: {
                    url: "",     //后台处理程序
                    type: "post",               //数据发送方式
                    dataType: "json",           //接受数据格式
                    data: {//要传递的数据
                        emailcode: function ()
                        {
                            return $("#username").val();
                        }
                    }
                }
            },

            password:{
                required:true,
                maxlength:16,
                minlength:6
            },
            passrword: {
                required: true,
                equalTo: "#password"
            },
            phone:{
                required:true,
                digits:true,
                maxlength:11,
                minlength:11

            } ,
            email: {
                required: true,
                email: true
            },
            lusername:{
                required:true
            }
        },

        messages: {

            username:{
                required:"请输入昵称",
                remote: "很遗憾，您输入的用户名已被使用！"

            },
            password:{
                required:"请输入密码",
                minlength: jQuery.validator.format("应为 {0} 个字以上"),
                maxlength: jQuery.validator.format("应为{0} 个字以下")
            },
            phone:{
                digits:"号码应为11个数字哦",
                minlength: jQuery.validator.format("应为 {0} 个数字"),
                maxlength: jQuery.validator.format("应为{0} 个数字")
            },
            passrword: {
                required: "应和密码一致！",
                equalTo: "两次输入密码不相同！"
            },
            email: {
                required: '请输入电子邮件',
                email: '请检查电子邮件的格式'
            } ,
            lusername:{
                required:"请输入昵称"
            }
        },
        highlight: function(element, errorClass) {
            $(element).css({"position":"relative","top":"-12px"})
            $(".rcp_sp").css({"top":"-12px"})
            $(".inblock").css({"top":"38px"})
            $(".sh_in").css({"top":"-12px"})
            $(".ab_im").css({"top":"-6px"})
        },
        onfocusout: function(element){
            $(element).valid();
        }
    });
    $("#mianfei").validate({
        rules: {
            email:{
                required:true,
                email: true,
                remote: {
                    url: "",     //后台处理程序
                    type: "post",               //数据发送方式
                    dataType: "json",           //接受数据格式
                    data: {//要传递的数据
                        emailcode: function ()
                        {
                            return $("#email").val();
                        }
                    }
                }
            }
        },
        messages: {
            email:{
                required:"请输入邮箱",
                email: "请检查邮箱的格式",
                remote:"很遗憾，您输入的用户名已被使用！"

            }
        },

        highlight: function(element, errorClass) {
            $(errorClass)
        },

        onfocusout: function(element){
            $(element).valid();
        }

    });
    $("#iregister").validate({
        rules: {
            iphone:{
                required:true,
                digits:true,
                maxlength:11,
                minlength:11,
                remote: {
                    url: "",     //后台处理程序
                    type: "post",               //数据发送方式
                    dataType: "json",           //接受数据格式
                    data: {//要传递的数据
                        emailcode: function ()
                        {
                            return $("#iphone").val();
                        }
                    }
                }

            } ,
            iemail: {
                required: true,
                email: true,
                remote: {
                    url: "",     //后台处理程序
                    type: "post",               //数据发送方式
                    dataType: "json",           //接受数据格式
                    data: {//要传递的数据
                        emailcode: function ()
                        {
                            return $("#iemail").val();
                        }
                    }
                }
            }
        },

        messages: {
            iphone:{
                required:"不能为空",
                digits:"号码应为11个数字哦",
                remote: "很遗憾，您输入的号码已被使用！",
                minlength: jQuery.validator.format("应为 {0} 个数字"),
                maxlength: jQuery.validator.format("应为{0} 个数字")
            },

            iemail: {
                required: '不能为空',
                email: '请检查电子邮件的格式',
                remote: "很遗憾，您输入的邮箱已被使用！"
            }
        },
        highlight: function(element, errorClass) {

        },
        onfocusout: function(element){
            $(element).valid();
        }
    });

$(".close").on("click",function(){
    $(this).parent().parent().parent().hide()
})
    jQuery(function(){
        var jq=jQuery;
        jq('.cl_li4').click(function () {
        jq('html,body').animate({
        scrollTop : '0px'
        }, 400);//返回顶部所用的时间
        });
        });




    $(document).ready(function(){
        //禁止退格键 作用于Firefox、Opera
        document.onkeypress = banBackSpace;
        //禁止退格键 作用于IE、Chrome
        document.onkeydown = banBackSpace;
    });
//处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外
    function banBackSpace(e){
        //alert(event.keyCode)
        var ev = e || window.event;//获取event对象
        var obj = ev.target || ev.srcElement;//获取事件源
        var t = obj.type || obj.getAttribute('type');//获取事件源类型
        //获取作为判断条件的事件类型
        var vReadOnly = obj.readOnly;
        var vDisabled = obj.disabled;
        //处理undefined值情况
        vReadOnly = (vReadOnly == undefined) ? false : vReadOnly;
        vDisabled = (vDisabled == undefined) ? true : vDisabled;
        //当敲Backspace键时，事件源类型为密码或单行、多行文本的，
        //并且readOnly属性为true或disabled属性为true的，则退格键失效
        var flag1 = ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea") && (vReadOnly == true || vDisabled == true);
        //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效
        var flag2 = ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea";
        //判断
        if (flag2 || flag1)
            event.returnValue = false;//这里如果写 return false 无法实现效果
    }
});











