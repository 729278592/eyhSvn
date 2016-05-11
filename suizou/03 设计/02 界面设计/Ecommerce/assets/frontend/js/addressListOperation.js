/**
 * Created by WHB on 2016/4/21.
 */
$.fn.addressListOperation = function(opts){
    var defaults = {

    };
    var opts = $.extend({}, defaults, opts);
    var method = {
        init:function(_this){
            var arr = {};
            arr.mask = $(".mask");
            arr.maskBg = $(".mask-bg");
            arr.maskMaskBg  = $(".mask,.mask-bg");
            arr.addressFooterUl = $(".address_footer_ul");
            arr.btn = $(".btn-address");
            arr.addressContent = $(".address_content");
            arr.maskAddress = $(".mask-address");
            arr.SaveModifliyAddress = "saveModifliyAddress";
            arr.modifly = "modifly";
            arr.addAddress = "addAddress";
            arr.addressList = $(".address-list");
            arr.btnModifly = arr.addressList.find(".btn-modifly");
            arr.btnModiflys = "btnModiflys";
            method.pageAuto(_this,arr);
            method.addressList(_this,arr);
            method.modiflyAddressList(_this,arr);
            method.removeAddressList(_this,arr);
            method.cancelAddressLists(_this,arr);
            method.cancelSaveAddressList(_this,arr);
            method.saveModiflyAddressList(_this,arr);
            method.saveAddressList(_this,arr);
            method.addAddressList(_this,arr);
            method.btnModiflyList(_this,arr);
            method.addressListClick(_this,arr);
        },
        pageAuto:function(_this,arr){/*分页水平居中*/
            arr.page = _this.find(".paging");
            arr.pageWidth = arr.page.outerWidth();
            arr.pagemarginLeft = -arr.pageWidth/2+"px";
            arr.page.css({marginLeft:arr.pagemarginLeft});
        },
        addressListClick:function(_this,arr){
            arr.addressList.delegate("li","click",function(){
               $(this).addClass("active");
                $(this).siblings("li").removeClass("active");
            })
        },
        btnModiflyList:function(_this,arr){
            arr.addressList.delegate(".btn-modifly","click",function(e){
                e.stopPropagation()
                arr.maskMaskBg .removeClass("hide");
                method.objAuto(_this,arr);
                arr.maskAddress.addClass("shake");
                $(arr.maskAddress).on('webkitAnimationEnd', function (){
                    $(this).removeClass('shake');
                }).on('animationend', function (){
                    $(this).removeClass('shake');
                });
                $(this).addClass("btn-modiflys");
                arr.mask.find(".btn_save").addClass(arr.btnModiflys);
            });
        },
        objAuto:function(_this,arr){/*对象垂直水平居中*/
            arr.addressWidth = arr.maskAddress.outerWidth(true);
            arr.addressmarginLeft = -arr.addressWidth/2+"px";
            arr.addressHeight = arr.maskAddress.outerHeight(true);
            arr.addressmarginTop = -arr.addressHeight/2+"px";
            arr.maskAddress.css({marginLeft:arr.addressmarginLeft,marginTop:arr.addressmarginTop});
        },
        defaultAuto:function(_this,arr){/*对象垂直水平居中*/
            arr.maskAddress.css({marginLeft:"0px",marginTop:"0px"});
        },
        addressList:function(_this,arr){/*偶数项地址列表去掉右外边距*/
            arr.Liodd = _this.find(".address_footer_ul li:odd");
            arr.Lieven = _this.find(".address_footer_ul li:even");
            arr.Liodd.addClass("mr0");
            arr.Lieven .removeClass("mr0");
        },
        addAddressList:function(_this,arr){/*新增地址列表*/
            arr.btn.on("click",function(){
                arr.maskMaskBg .removeClass("hide");
                method.objAuto(_this,arr);
                arr.maskAddress.addClass("shake");
                $(arr.maskAddress).on('webkitAnimationEnd', function (){
                    $(this).removeClass('shake');
                }).on('animationend', function (){
                    $(this).removeClass('shake');
                });
                $(this).addClass("btn-modiflys");
                arr.mask.find(".btn_save").addClass(arr.addAddress);
            });
        },
        modiflyAddressList:function(_this,arr){/*编辑地址列表*/
            arr.addressFooterUl.delegate(".btn-modifly","click",function(){
                arr.maskMaskBg .removeClass("hide");
                method.objAuto(_this,arr);
                arr.maskAddress.addClass("shake");
                $(arr.maskAddress).on('webkitAnimationEnd', function (){
                    $(this).removeClass('shake');
                }).on('animationend', function (){
                    $(this).removeClass('shake');
                });
                $(this).addClass("btn-modiflys");
                arr.mask.find(".btn_save").addClass(arr.SaveModifliyAddress);
            });
        },
        removeAddressList:function(_this,arr){/*删除地址列表*/
            arr.addressFooterUl.delegate(".btn-remove","click",function(){
                if(confirm("您确定要删除地址?")){
                    $(this).closest("li").remove();
                    heightAuto()
                }
            });
        },
        cancelAddressLists:function(_this,arr){/*取消保存编辑的地址无提示*/
            arr.mask.delegate("#btn-remove","click",function(){
                arr.maskMaskBg .addClass("hide");
                method.defaultAuto(_this,arr);
            });
        },
        cancelSaveAddressList:function(_this,arr){/*取消保存编辑的地址有提示*/
            arr.mask.delegate(".btn_cancel","click",function(){
                if(confirm("是否取消编辑地址")){
                    arr.maskMaskBg .addClass("hide");
                    method.defaultAuto(_this,arr);
                    arr.addressFooterUl.find(".btn-modiflys").removeClass("btn-modiflys");
                }
            });
        },
        saveModiflyAddressList:function(_this,arr){ /*保存修改的地址*/
            arr.mask.delegate(".saveModifliyAddress,.addAddress,.btnModiflys","click",function(){
                arr.nameText = arr.addressContent.find(".nameText").val();
                arr.phoneText = arr.addressContent.find(".phoneText").val();
                arr.numberText = arr.addressContent.find(".numberText").val();
                arr.textareas = arr.addressContent.find(".textarea").val();
                arr.selects = arr.addressContent.find(".select-s option:selected").val();
                arr.selectq = arr.addressContent.find(".select-q option:selected").val();
                arr.selectx = arr.addressContent.find(".select-x option:selected").val();

                if(arr.addressFooterUl.get(0)){
                    arr.str = '<p class="address_footer_ul_head">收货人 : '+arr.nameText+'</p>'+
                        '<p>手机号 : '+arr.phoneText+'</p>'+
                        '<p>邮编 : '+arr.numberText+'</p>'+
                        '<p>详细地址 : '+arr.selects+arr.selectq+arr.selectx+arr.textareas+'</p>'+
                        '<p>'+
                        '<button class="btn-modifly">编辑</button>'+
                        ' <button class="btn-remove">删除</button>'+
                        '</p>';
                    arr.addressFooterUl.find(".btn-modiflys").closest("li").html(arr.str);
                    arr.mask.find(".btn_save").removeClass(arr.SaveModifliyAddress);
                }
                else if( arr.mask.find(".addAddress").get(0)){
                    var str1 =
                        '<li>' +
                            '<label>' +
                                '<input type="radio" name="address"/>'+
                                '<span>'+arr.selects+arr.selectq+arr.selectx+arr.textareas+'</span>'+
                                '<span>'+arr.phoneText+'</span>'+
                                '<button class="btn-modifly right">修改</button>'+
                            '</label>'+
                        '</li>';
                    arr.addressList.append(str1);
                    arr.mask.find(".btn_save").removeClass(arr.addAddress);
                }
                else if(arr.addressList.find(".btn-modiflys").get(0)){
                    var str2 =

                        '<label>' +
                        '<input type="radio" name="address"/>'+
                        '<span>'+arr.selects+arr.selectq+arr.selectx+arr.textareas+'</span>'+
                        '<span>'+arr.phoneText+'</span>'+
                        '<button class="btn-modifly right">修改</button>'+
                        '</label>'

                    arr.addressList.find(".btn-modiflys").closest("li").html(str2);
                    arr.mask.find(".btn_save").removeClass(arr.btnModiflys);
                    arr.addressList.find(".btn-modifly").removeClass("btn-modiflys")
                }
                arr.maskMaskBg .addClass("hide");
                method.defaultAuto(_this,arr);
            });
        },
        saveAddressList:function(_this,arr){/*保存增加的地址*/
            arr.addressContent.delegate("#btn_save","click",function(){
                arr.nameText = $(this).closest(arr.addressContent).find(".nameText").val();
                arr.phoneText = $(this).closest(arr.addressContent).find(".phoneText").val();
                arr.numberText = $(this).closest(arr.addressContent).find(".numberText").val();
                arr.textareas = $(this).closest(arr.addressContent).find(".textarea").val();
                arr.selects = $(this).closest(arr.addressContent).find(".select-s option:selected").val();
                arr.selectq = $(this).closest(arr.addressContent).find(".select-q option:selected").val();
                arr.selectx = $(this).closest(arr.addressContent).find(".select-x option:selected").val();
                arr.str = '<p class="address_footer_ul_head">收货人 : '+arr.nameText+'</p>'+
                            '<p>手机号 : '+arr.phoneText+'</p>'+
                            '<p>邮编 : '+arr.numberText+'</p>'+
                            '<p>详细地址 : '+arr.selects+arr.selectq+arr.selectx+arr.textareas+'</p>'+
                            '<p>'+
                            '<button class="btn-modifly">编辑</button>'+
                            ' <button class="btn-remove">删除</button>'+
                    '</p>';
                arr.html = '<li>' +
                               arr.str+
                           '</li>';
                arr.addressFooterUl.append(arr.html);
                method.addressList(_this,arr);

            })
        }
    };
    method.init($(this))
};

//$(function(){

//    /*分页水平居中*/
//    function pageAuto(_this){
//        var ml = _this.outerWidth()/2;
//        _this.get(0).style.marginLeft = -ml+"px";
//    }
//    pageAuto($(".paging"));
//
//
//    /*对象垂直水平居中*/
//    function objauto(_this){
//        var ml = _this.outerWidth()/2;
//        _this.get(0).style.marginLeft = -ml+"px";
//        var ml = _this.outerHeight()/2;
//        _this.get(0).style.marginTop = -ml+"px";
//    }
//
//
//    /*偶数项地址列表去掉右外边距*/
//    function addressList(){
//        $(".address_footer_ul li:odd").addClass("mr0");
//        $(".address_footer_ul li:even").removeClass("mr0");
//    }
//    addressList();
//
//
//    /*编辑地址列表*/
//    function modiflyAddressList(){
//        $(".mask-bg,.mask").removeClass("hide");
//        objauto($(".mask-address"));
//        $(".mask-address").addClass("shake");
//        $($(".mask-address")).on('webkitAnimationEnd', function (){
//            $(this).removeClass('shake');
//        }).on('animationend', function (){
//            $(this).removeClass('shake');
//        });
//        $(".mask").find(".btn_save").addClass("saveModifliyAddress");
//    }
//    $(".address_footer_ul").delegate(".btn-modifly","click",modiflyAddressList);
//
//
//    /*删除地址列表*/
//    function removeAddressList(){
//        if(confirm("您确定要删除地址?")){
//            $(this).closest("li").remove();
//            addressList();
//        }
//    }
//    $(".address_footer_ul").delegate(".btn-remove","click",removeAddressList);
//
//
//    /*保存增加的地址*/
//    var addressContent = $("#btn_save").closest(".address_content_content");
//    var nameText = addressContent.find(".nameText").val();
//    var phoneText = addressContent.find(".phoneText").val();
//    var numberText = addressContent.find(".numberText").val();
//    var selects = addressContent.find(".select-s option:selected").text();
//    var selectq = addressContent.find(".select-q option:selected").text();
//    var selectx = addressContent.find(".select-x option:selected").text();
//    var textareas = addressContent.find(".textarea").val();
//    var html =  '<p class="address_footer_ul_head">收货人 : '+nameText+'</p>'+
//        '<p>手机号 : '+phoneText+'</p>'+
//        '<p>邮编 : '+numberText+'</p>'+
//        '<p>详细地址 : '+selects+selectq+selectx+textareas+'</p>'+
//        '<p>'+
//        '<button class="btn-modifly">编辑</button>'+
//        ' <button class="btn-remove">删除</button>'+
//        '</p>';
//    function saveAddressList(){
//        var str = '<li>'+
//            html+
//            '</li>';
//        console.log(html);
//        $(".address_footer_ul").append(str);
//        addressList();
//    }
//    $(".address_content_content").delegate("#btn_save","click",saveAddressList);
//
//
//    /*取消保存增加的地址有提示*/
//    function cancelAddressList(){
//        if(confirm("是否取消编辑地址")){
//            $(".address_content_content").find(".w_inc,.textarea").each(function(){
//                $(this).val("");
//                $(this).attr({placeholder:$(this).attr("placeholder")});
//                $(".mask-bg,.mask").addClass("hide");
//            });
//        }
//    }
//    $(".address_content_content").delegate(".btn_cancel","click",cancelAddressList);
//
//
//    /*取消保存编辑的地址无提示*/
//    function removeAddressLists(){
//        $(".mask-bg,.mask").addClass("hide");
//    }
//    $(".mask").delegate("#btn-remove","click",removeAddressLists);
//
//
//    /*保存编辑的地址*/
//    function saveModiflyAddressList(){
//        $(".mask-bg,.mask").addClass("hide");
//    }
//    $(".mask").delegate(".saveModifliyAddress","click",saveModiflyAddressList);
//});
