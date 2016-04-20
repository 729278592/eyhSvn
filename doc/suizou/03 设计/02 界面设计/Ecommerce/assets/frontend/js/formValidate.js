/**
 * Created by WHB on 2016/4/8.
 */
$(function(){
    /*验证表单*/
    $("#register-form").validate({
        errorElement: 'span', //default input error message container
        errorClass: 'help-block help-block-error', // default input error message class
        rules: {
            //                    mobile:{
            //                        required:true,
            //                        phone:true,
            //                        remote: {
            //                            url: "/isExistPhone.do",    //后台处理程序
            //                            type: "post",               //数据发送方式
            //                            dataType: "json",           //接受数据格式
            //                            data: {//要传递的数据
            //                                phone: function (){
            //                                    return $("#mobile").val();
            //                                }
            //                            }
            //                        }
            //                    },
            mobile:{
                required:true,
                phone:true
            },
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                maxlength:16,
                minlength:6
            },
            confirmPwd: {
                required: true,
                equalTo: "#password"
            },

            validateCode:{
                required:true
            },
            authCode:{
                required:true,
                maxlength:6,
                minlength:6
            },
            inviteCode:{
                minlength:4
            },
            name:{
                required:true
            },
            industry:{
                required:true
            },
            d4311:{
                required:true
            },
            code:{
                required:true
            }
        },

        messages: {
            validateCode:{
                required:"请输入验证码"
            },
            authCode:{
                required:"请输入验证码",
                maxlength:"验证码为6位",
                minlength:"验证码为6位"
            },
            inviteCode:{
                minlength:"邀请码至少是4个字符"
            },
            password:{
                required:"请输入密码",
                minlength: jQuery.validator.format("密码不能少于 {0} 个字符"),
                maxlength: jQuery.validator.format("密码不能多于 {0} 个字符")
            },

            confirmPwd: {
                required: "请输入确认密码",
                equalTo: "两次输入密码不相同"
            },

            //                    mobile:{
            //                        required:"请输入手机号码",
            //                        remote:"该手机已被注册"
            //                    }
            mobile:{
                required:"请输入手机号码",
                phone:"请输入正确手机号码"
            },
            email:{
                required:"请输入邮箱",
                email:"邮箱格式不对"
            }, name:{
                required:"请输入您的姓名"
            },
            industry:{
                required:"请选择您所属行业"
            },
            d4311:{
                required:"请选择您的生日"
            },
            code:{
                required:"请输入您的组织机构代码"
            }
        },

        errorPlacement: function (error, element) { // render error placement for each input type
            if (element.parent(".input-group").size() > 0) {
                error.insertAfter(element.parent(".input-group"));
            } else {
                heightAuto();
                error.insertAfter(element); // for other inputs, just perform default behavior
            }
        },

        highlight: function (element) { // hightlight error inputs
            $(element).closest('.input-group').removeClass("has-success").addClass('has-error'); // set error class to the control group
        },

        unhighlight: function (element) { // revert the change done by hightlight
            $(element).closest('.input-group').removeClass('has-error'); // set error class to the control group
        },

        success: function (label, element) {
            label.closest('.input-group').removeClass('has-error'); // set success class to the control group
        },

        submitHandler: function(form) {
            //                    register();
        }
    });
});