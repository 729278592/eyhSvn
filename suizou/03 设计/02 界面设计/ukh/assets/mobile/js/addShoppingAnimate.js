$(function () {

    /*点击购买或加入购物车提示选择规格*/
    var showBuyDailog = $(".showBuyDailog");
    var shopTypeListLi = $(".shopTypeList li");
    var wrapper = $(".wrapper");
    var weui_actionsheet = $("#weui_actionsheet");
    showBuyDailog.on("touchend",function(e){  //加入购物车
        e.preventDefault();
        var shoppingId = $(this).data("shoppingId");
        if($(this).data("specifications")){  //specifications有无规格;
            var shoppingCartHtml = '<div class="weui_mask_transition" id="mask"></div>'+
                '<div class="weui_actionsheet" id="weui_actionsheet">'+
                '<div class="weui_actionsheet_menu">'+
                '<div class="weui_con_hd">'+
                '商品名'+
                '<span class="closeImg">×</span>'+
                '</div>'+
                '<div class="shopType style">'+
                '<p class="title">选择规格 :</p>'+
                '<ul class="shopTypeList clearfix">'+
                '<li>尺寸一</li>'+
                '<li>尺寸一尺寸一</li>'+
                '<li>尺寸一</li>'+
                '<li>尺寸一</li>'+
                '<li>尺寸一尺寸一尺寸一尺寸一</li>'+
                '</ul>'+
                '</div>'+
                '<div class="weui_con_ft clearfix">'+
                '<div class="left">'+
                '<span class="nums">￥10.9</span>'+
                '<span class="name">(规格名)</span>'+
                '</div>'+
                '<div class="right">'+
                '<a href="###" class="btnAddCat" id="btnAddCat">'+
                '<img src="../../../assets/mobile/images/cart.png" class="cart" alt="">'+
                '加入购物车'+
                '</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
                '</div>';
            addBuyDailog(shoppingCartHtml);
            shopAnimatie(shoppingId,$("#btnAddCat"));


            // $.ajax({
            //     url: "",
            //     dataType: 'jsonp',
            //     data: '',
            //     jsonp: 'callback',
            //     success: function (data) {
            //         onDailog($(this).data("shoppingId"));
            //         shopAnimatie(shoppingId,$(this))
            //     }
            // });

        }else {  //无规格
            animateShoping(shoppingId,$(this));
        }

    });

    function addBuyDailog(shoppingCartHtml) {
        wrapper.append(shoppingCartHtml);
    }


    wrapper.on("touchend",".closeImg",function () {
        removeBuyDailog()
    });



    function removeBuyDailog() {
        $(".weui_mask_transition").remove();
        $(".weui_actionsheet").remove();
    }


    /*加入购物车动画*/
    function shopAnimatie(id,obj) {
        wrapper.on("touchend",".btnAddCat",function () {
            animateShoping(id,obj);
        });
    }

    function animateShoping(id,obj) {
        obj.shoping({
            interface:"",  //接口
            shoppingId:id,  //商品id
            interFun:function () {
                //提交商品信息
                $.post(this.interface,{shopId:this.shoppingId},function(res){
                    if(res.status == "ok"){

                    }else{

                    }
                });
            }
        });
    }

    /*规格选择*/
    var shopTypeListLi = $(".shopTypeList li");
    shopTypeListLi.on("touchend",function(){
        $(this).addClass("active");
        $(this).siblings(shopTypeListLi).removeClass("active");
    });

    //选择规格弹窗
    function onDailog() {
        mask.removeClass("hide");
        weui_actionsheet.removeClass("hide");
        $("body").addClass("overflowy");
        if(!shopTypeListLi.is(".active")){
            shopTypeListLi.eq(0).addClass("active");
        }
    }

    /*选规格*/
    var mask = $("#mask");
    var closeImg = $(".closeImg");
    weui_actionsheet.on("touchend",".closeImg",function(){

    });

//关闭选择规格弹窗
    function closeDailog() {
        $("body").removeClass("overflowy");
        mask.addClass("hide");
        weui_actionsheet.addClass("hide");
    }
});