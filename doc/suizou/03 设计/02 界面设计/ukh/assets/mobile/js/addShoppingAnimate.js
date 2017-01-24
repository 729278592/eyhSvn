;(function ($,window,document,undefined) {
    $.fn.shoppingAnimate = function (options) {
        var defaults = {
            shoppingList : $(".shoppingList"),
            shopTypeListLi : $(".shoppingList li"),
            wrapper : $(".wrapper"),
            closeImg : $(".closeImg"),
            weui_mask_transition : $(".weui_mask_transition"),
            weui_actionsheet : $(".weui_actionsheet"),
            btnAddCat : $(".btnAddCat"),
            specifiLi:'',
            wajxHtml : ''
        };

        var opts = $.extend({}, defaults, options);

        var Methods = {
            init: function (_this) {
                Methods.judgmentStandard(_this); //判断有无规格

                opts.wrapper.on("touchend",opts.closeImg,function (e) {
                    if($(e.target).attr("class")=="closeImg"){
                        e.preventDefault();
                        Methods.removeMask($(this)); //点击关闭删除规格弹窗
                    }
                });

                opts.wrapper.on("touchend",opts.btnAddCat,function (e) {
                    if($(e.target).attr("class")=="btnAddCat"){
                        Methods.addSHoppingCart($(this)); //点击规格弹窗中的加入购物车去加入购物车
                    }
                });

                opts.wrapper.on("touchend",opts.shopTypeListLi,function (e) {
                    if($(e.target).parent().attr("class")=="shopTypeList clearfix"){
                        Methods.chioceGg($(e.target)); //点击选择规格
                    }
                })

            },
            jsInfor:function (that) { //取出相应规格的价格
                $(".nums span").text(that.attr("price"));
                $(".name").text(that.text());
            },
            ajaxRecord:function(opt,wajxHtml,specifiLi){//规格弹窗的模板
                wajxHtml += '<div class="weui_mask_transition" id="mask"></div>'+
                            '<div class="weui_actionsheet" id="weui_actionsheet">'+
                                '<div class="weui_actionsheet_menu">'+
                                    '<div class="weui_con_hd">'+
                                        ''+opt.name+''+
                                        '<span class="closeImg">×</span>'+
                                    '</div>'+
                                    '<div class="shopType style">'+
                                        '<p class="title">选择规格 :</p>'+
                                        '<ul class="shopTypeList clearfix">';
                            wajxHtml += specifiLi;
                            wajxHtml += '</ul>'+
                                    '</div>'+
                                    '<div class="weui_con_ft clearfix">'+
                                        '<div class="left">'+
                                            '<span class="nums">￥<span></span></span> '+
                                            '( <span class="name"></span>)'+
                                        '</div>'+
                                        '<div class="right">'+
                                            '<a class="btnAddCat" id="btnAddCat">'+
                                            '<img src="../../../assets/mobile/images/cart.png" class="cart" alt="">'+
                                            '加入购物车'+
                                        '</a>'+
                                        '</div>'+
                                    '</div>'+
                                '</div>'+
                            '</div>';
                        return wajxHtml;
            },
            ajaxGg:function () {
                var that = this;
                $.ajax({
                    url: "../../../assets/mobile/data/specifications.json",
                    dataType: 'json',
                    data: '',
//                  jsonp: 'callback',
                    success: function (res) {
                        if(res.status == "ok"){
                            var wajxHtml = '';
                            for(let i=0; i<res.datas.length; i++){ //循环规格json数据的,并将规格的价格艺术性的方式添加入相应的规格结构中
                                opts.specifiLi += '<li price="'+res.datas[i].price+'"> '+res.datas[i].specifi+' </li>';
                            }

                            opts.wrapper.append(that.ajaxRecord(res,wajxHtml,opts.specifiLi));//加入购物车弹窗添加到wrapper

                            if(!opts.shopTypeListLi.is(".active")){ //打开购物车弹窗是默认选中第一个规格
                                $(".shopTypeList li:first-child").addClass("active");
                                Methods.jsInfor($(".shopTypeList li.active"));//获取默认选中规格
                            }

                        }else{

                        }
                    }
                });
            },
            shopAnimate:function (_this) {
                _this.shoping({
                    interFun:function () {

                        //提交商品信息
                        $.post(opts.interface,{shopId:opts.shoppingId},function(res){
                            if(res.status == "ok"){

                            }else{

                            }
                        });
                    }
                });
            },
            judgmentStandard:function (_this) {
                if(!opts.specifications){ //无规格

                    Methods.shopAnimate(_this); //加入购物车动画

                }
                else {//有规格

                    Methods.ajaxGg(); //请求规格json数据

                }
            },
            addSHoppingCart:function (that) {
                Methods.shopAnimate($(".btnAddCat"));
                // setTimeout(function () {
                //     Methods.removeMask(that)
                // },800)
            },

            chioceGg:function (that) {
                that.addClass("active");
                that.siblings().removeClass("active");
                Methods.jsInfor(that); ////获取选中规格
            },

            removeMask:function (that) {//删除购物车弹框
                that.find(".weui_mask_transition").remove();
                that.find(".weui_actionsheet").remove();
            }
        };

        Methods.init($(this));
    };
})(jQuery,window,document,undefined);