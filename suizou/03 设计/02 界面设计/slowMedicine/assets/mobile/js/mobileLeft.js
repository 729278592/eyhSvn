/**
 * Created by WHB on 2016/3/30.
 */

/*手机顶部页面切换*/
$(function(){
    var html =  '<div class="mask hide leftMask">'+
                    '<div class="leftNav hide">'+
                        '<div class="person-head personImg clearfix">'+
                            '<a href="patientInfor.html">' +
                                '<img src="../../assets/mobile/images/personImg.png" alt="" class="portrait"><br/>'+
                                '<span>李建国</span>'+
                            '</a>'+
                        '</div>'+
                        '<ul class="menu-list">'+
                            '<li>'+
                                '<a href="modifyDoctorInfor.html">'+
                                    '<img src="../../assets/mobile/images/modifyInforIcon.jpg" class="personIcon" style="width:16px;margin-right:5px;">'+
                                    '<span>修改信息</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="uploadPrescription.html">'+
                                    '<img src="../../assets/mobile/images/upLoadIcon.jpg" class="personIcon" style="width:16px;margin-right:5px;">'+
                                    '<span class="right style color1">(尚未上传)</span>'+
                                    '<span class="right style color2 hide">共3份处方单</span>'+
                                    '<span>新增处方</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="uploadMedicalRecord.html">'+
                                    '<img src="../../assets/mobile/images/upLoadIcon.jpg" class="personIcon" style="width:16px;margin-right:5px;">'+
                                    '<span class="right style color1 hide">(尚未上传)</span>'+
                                    '<span class="right style color2 ">共3份病历单</span>'+
                                    '<span>新增病历</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="prescriptionRecord.html">'+
                                   '<img src="../../assets/mobile/images/personIcon1.png" class="personIcon" style="width:15px;margin-right:5px;">'+
                                    '<span>处方记录</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="medicalRecord.html">'+
                                    '<img src="../../assets/mobile/images/personIcon2.png" class="personIcon" style="width:15px;margin-right:5px;">'+
                                    '<span>病历档案</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="myDoctor.html">'+
                                    '<img src="../../assets/mobile/images/personIcon3.png" class="personIcon" style="width:15px;margin-right:5px;">'+
                                    '<span>我的名医</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="myConsultingList.html">'+
                                    '<img src="../../assets/mobile/images/personIcon4.png" class="personIcon" style="width:15px;margin-right:5px;">'+
                                    '<span>咨询记录</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>';
    $(".container").append(html);
    var html1 = '<div class="bars">'+
                    '<i class="fa fa-bars"></i>'+
                '</div>';
    $(".container").append(html1);
});

    var mobileLeft = function(){
        var fabarsClck = function(_this){
            _this.find(".bars").on("touchend",function(){
                _this.find(".leftMask,.leftNav").removeClass("hide");
                _this.find(".leftMask").addClass('slideIn');
                $($(".leftMask")).on('webkitAnimationEnd', function (){
                    $(".leftMask").removeClass("slideIn");
                    _this.find(".leftMask,.leftNav").removeClass("hide");
                }).on('animationend', function (){
                    $(".leftMask").removeClass("slideIn");
                    _this.find(".leftMask,.leftNav").removeClass("hide");
                });
            })
        };

        var maskHeadClick = function(_this){
            _this.delegate(".leftMask","click",function(){
                $(this).addClass('slideOut');
                $($(".leftMask")).on('webkitAnimationEnd', function (){
                    $(".leftMask").removeClass("slideOut");
                    _this.find(".leftMask,.leftNav").addClass("hide");
                }).on('animationend', function (){
                    $(".leftMask").removeClass("slideOut");
                    _this.find(".leftMask,.leftNav").addClass("hide");
                });
            })
        };

        var menuListClick = function(_this){
            _this.find(".leftNav").on("click",function(e){
                e.stopPropagation();
            });
        };

        var maskHeadTouch = function(_this) {
            var iStartX = 0;
            var iStartPagex = 0;
            _this.find(".leftMask").on("touchstart", function (ev) {
                iStartPagex = ev.originalEvent.targetTouches[0].pageX;
            });

            _this.find(".leftMask").on("touchmove", function (ev) {
                iStartX = iStartPagex - ev.originalEvent.targetTouches[0].pageX;
            });

            _this.find(".leftMask").on("touchend", function () {
                if(iStartX>10){
                    iStartX = 0;
                    $(this).addClass('slideOut');
                    $($(".leftMask")).on('webkitAnimationEnd', function (){
                        $(".leftMask").removeClass("slideOut");
                        _this.find(".leftMask,.leftNav").addClass("hide");
                    }).on('animationend', function (){
                        $(".leftMask").removeClass("slideOut");
                        _this.find(".leftMask,.leftNav").addClass("hide");
                    });
//                    $(".bd").css({"overflow-y":"auto",height:"auto","paddingBottom":"50px"});
                }
            });
        };

        return {
            init:function(_this){
                fabarsClck(_this);
                maskHeadClick(_this);
                menuListClick(_this);
                maskHeadTouch(_this);
            }
        }
    }();




