/**
 * Created by eyohu023 on 2015/9/2.
 */
$(function(){

    /*手机顶部页面切换*/
    var hg = $(".head-main .glyphicon-th-list");
    var mm = $(".menu_mobile");
    var mml = $(".menu_mobile li");
    hg.on("click", function () {
        if (mm.css("display") == "none") {
            mm.css({"display": "inline-block"});
            mm.animate({"marginLeft": "0"}, 500);
            mml.animate({"width": "25%"})
        }
    });

    mm.on("click", function () {
        mm.css({"display": "none"});
        mm.animate(mml.animate({"width": "0%"}));
    });
    var winH = $(window).width();

    $(window).on("resize",function(){
        if(winH>640){
            mm.css({"display": "none"});
        }
    });
    if($(window).height()<700){
        $(".footer").css({"position":"relative","marginTop":"20px"})
    }


    /*IE支持placeholder属性*/
    var doc = document, inputs = doc.getElementsByTagName('input'), supportPlaceholder = 'placeholder'in doc.createElement('input'), placeholder = function (input) {
        var text = input.getAttribute('placeholder'), defaultValue = input.defaultValue;
        if (defaultValue == '') {
            input.value = text
        }
        input.onfocus = function () {
            if (input.value === text) {
                this.value = ''
            }
        };
        input.onblur = function () {
            if (input.value === '') {
                this.value = text
            }
        }
    };
    if (!supportPlaceholder) {
        for (var i = 0, len = inputs.length; i < len; i++) {
            var input = inputs[i], text = input.getAttribute('placeholder');
                if (((input.type == 'text')||(input.type == 'password')) && text) {
                placeholder(input)
            }
        }
    }




});
