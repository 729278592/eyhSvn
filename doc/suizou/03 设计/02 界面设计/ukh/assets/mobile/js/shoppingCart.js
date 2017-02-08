;(function ($,window,document,undefined) {
    $.fn.shoppingBuy = function (options) {
        var defaults = {
            wajxHtml : '',
            list:[]
        };

        var opts = $.extend({}, defaults, options);

        var Methods = {
            init: function (_this) {
                Methods.ajaxGg(_this);
                Methods.keyup(_this);
                Methods.plus(_this);
                Methods.reduce(_this);
            },
            ajaxRecord:function(opt,wajxHtml){//商品结构
                for(let i = 0;i<opt.length;i++){
                    wajxHtml += '<li data-num="'+opt[i].index+'">'+
                                    '<div class="orderCon">'+
                                        '<div class="orderImg">'+
                                            '<img src="../../../assets/mobile/images/order1.jpg" alt=""/>'+
                                        '</div>'+
                                        '<div class="orderInfor">'+
                                            '<p class="clearfix">'+
                                                '<span class="left">'+opt[i].title+'</span>'+
                                            '</p>'+
                                            '<p class="clearfix">'+
                                                '单价 : ￥<span class="verdana color2">'+opt[i].price+'</span>'+
                                            '</p>'+
                                            '<p class=" clearfix">'+
                                                '<a class="num">'+
                                                    '<span class="minus" ></span>'+
                                                    '<input type="tel" class="buycount" value="'+opt[i].num+'" maxlength="3"/>'+
                                                    '<span class="plus" ></span>'+
                                                '</a>'+
                                            '<button class="right btnRemove">'+
                                            '删除'+
                                            '</button>'+
                                            '</p>'+
                                        '</div>'+
                                    '</div>'+
                                '</li>';
                }
                return wajxHtml;
            },
            ajaxGg:function (_this) { //取商品结构的json数据
                var that = this;
                $.ajax({
                    url: opts.shopList,
                    dataType: 'json',
                    data: '',
//                  jsonp: 'callback',
                    success: function (res) {
                        if(res.status == "ok"){
                            opts.list = res.datas;
                            for(let i = 0;i<opts.list.length;i++){
                                opts.list[i].index = i; //给每条商品json数据添加下标
                            }
                            //console.log(JSON.stringify(opts.list))
                            _this.append(that.ajaxRecord(opts.list,opts.wajxHtml));//商品结构加入页面
                        }else{

                        }
                    }
                });
            },
            keyup:function (_this) { //键盘输入
                _this.on("keyup",'.buycount',function() {
                    var buycount = $(this).closest(".num").find(".buycount");
                    var number = parseInt(buycount.val());
                    if (isNaN(number)){
                        number = 1;
                    }

                    if (number < 1){
                        number = 1;
                    }

                    if (number > 100){
                        number = 100;
                    }

                    buycount.val(number);
                    Methods.updateTotalPrice(_this,$(this),number);
                });
            },
            plus:function (_this) { //点击加数量

                _this.on("click",".plus",function() {

                    var buycount = $(this).closest(".num").find(".buycount");
                    var number = parseInt(buycount.val());
                    if (number == 100) {
                        return false;
                    }

                    number++;
                    buycount.val(number);
                    Methods.updateTotalPrice(_this,$(this),number);
                });
            },
            reduce:function (_this) { //点击减数量
                _this.on("click",".minus",function() {
                    var buycount = $(this).closest(".num").find(".buycount");
                    var number = parseInt(buycount.val());
                    number--;
                    if (number <= 0){
                        number = 1;
                    }

                    buycount.val(number);
                    Methods.updateTotalPrice(_this,$(this),number);
                })
            },
            updateTotalPrice:function (_this,_that,number) { //更新总价
                var dataNum = _that.closest("li").data("num");
                opts.list[dataNum].num = number;
                for(let i = 0;i<opts.list.length;i++){
                    var totalPrice = 0;
                    setTimeout(function () {
                        totalPrice += opts.list[i].num*opts.list[i].price;
                        _this.closest("#order").find(".totalPrice .color2").text(totalPrice);
                    })
                }
            }
        };

        Methods.init($(this));
    };
})(jQuery,window,document,undefined);
